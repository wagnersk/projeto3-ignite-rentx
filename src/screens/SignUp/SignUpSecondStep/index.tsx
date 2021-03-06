import React, { useState } from 'react';
import {useNavigation,useRoute} from '@react-navigation/native'
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { api } from '../../../services/api'




import { 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';




import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle
} from './styles';
import { PasswordInput } from '../../../components/PasswordInput';
import { useTheme } from 'styled-components';


interface Params{
  user:{
      name:string;
      email:string;
      driverLicense:string;
  }
}

export function SignUpSecondStep(){
  const [password,SetPassword] = useState('')
  const [passwordConfirm,setPasswordConfirm]= useState('')

  
  const navigation = useNavigation()
  const route = useRoute()
  const theme = useTheme()

  const { user } = route.params as Params;

  console.log(user)

  function handleBack(){
    navigation.goBack()
  }

 async function handleRegister() {

    if(!passwordConfirm||!password){
            return Alert.alert('Informe a senha e a confirmação dela')
    }

    if(!passwordConfirm != !password){
      return Alert.alert('As senhas não são iguais')
    } 

    await api.post('/users',{
      name:user.name,
      email:user.email,
      driver_license:user.driverLicense,
      password,
    })
    .then(()=>{
        navigation.navigate('Confirmation',{
        nextScreenRoute:'Home',
        title:'Conta Criada!',
        message:`Agora é só fazer login\ne aproveitar`
      })
      })
      .catch(()=>{
        Alert.alert('Opa','Não foi possível cadastrar')
      });
  }

  return (

     <KeyboardAvoidingView behavior="position" enabled  >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} > 
    <Container>
      <Header>
        <BackButton onPress={handleBack} />

      <Steps>
        <Bullet active/>
        <Bullet/>
    </Steps>
      </Header>

      <Title>
        Crie sua {"\n"}conta
      </Title>
      <SubTitle>
        Faça seu cadastro de {'\n'}
        forma rápida e facil
      </SubTitle>

      <Form>
        <FormTitle>
          2.Senha
        </FormTitle>

        <PasswordInput 
        iconName="lock"
        placeholder="Senha"
        onChangeText={SetPassword}
        value={password}
        
        />

         <PasswordInput 
        iconName="lock"
        placeholder="Repetir Senha"
        onChangeText={setPasswordConfirm}
        value={passwordConfirm}

        />
        


      </Form>

      <Button
      color={theme.colors.success}
      title="Cadastrar"
      onPress={handleRegister}

      />

    </Container>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
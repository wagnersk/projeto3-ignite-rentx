import React from 'react';
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';


import speedSvg from '../../assets/speed.svg' 
import accelerationSvg from '../../assets/acceleration.svg' 
import forceSvg from '../../assets/force.svg' 
import gasolineSvg from '../../assets/gasoline.svg' 
import exchangeSvg from '../../assets/exchange.svg' 
import peopleSvg from '../../assets/people.svg' 



import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  RentailPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,

  

} from './styles';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

export function SchedulingDetails(){

  const theme =useTheme()

  const navigation = useNavigation()

  function handleConfirmRental() {
    navigation.navigate('SchedulingComplete')
  }

  return (
    <Container>
      <Header>
        <BackButton
        onPress={()=>{}}
        />

      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9ULlIfz1HDoSSr6atk5wZmFr9nbCTp-kCjrygP6WIeiUu3NB1aQaragDpWKknPScpKI&usqp=CAU']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>

        </Details>

      <Acessories>

        <Accessory name="380Km/h" icon={speedSvg} />
        <Accessory name="3.2s" icon={accelerationSvg} />
        <Accessory name="800 Hp" icon={forceSvg} />
        <Accessory name="Gasolina" icon={gasolineSvg} />
        <Accessory name="Auto" icon={exchangeSvg} />
        <Accessory name="2 pessoas" icon={peopleSvg} />


        </Acessories>

        <RentailPeriod>
          <CalendarIcon>
        <Feather
        name="calendar"
        size={RFValue(24)}
        color={theme.colors.shape}
        />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather
        name="chevron-right"
        size={RFValue(10)}
        color={theme.colors.text}
        />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentailPeriod>


       <RentalPrice>
         <RentalPriceLabel>TOTAL</RentalPriceLabel>
         <RentalPriceDetails>
           <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
           <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
         </RentalPriceDetails>
       </RentalPrice>

      </Content>

      <Footer>
        <Button  
        title="Alugar agora"
        color={theme.colors.success}
        onPress={handleConfirmRental}
         />
      </Footer>

    </Container>
  );
}
import { Text, View, StyleSheet, Button,TextInput,ImageBackground,Image,TouchableOpacity} from 'react-native';

import { Formik } from 'formik';
import { useState } from 'react';
import logo3 from './../../assets/pictures/logo3.png';

import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "./../navigations/index";



export interface FimScreenProps {
  route: RouteProp<NavegacaoPrincipalParams, "telafinal">
}

export function FimScreen (props: any) {
  
 const navigation = useNavigation<any>();
  
  return (
    
    <>
      <ImageBackground source={{uri:'./scr/assets/bg.png'}} style={styles.conteiner}>
        <Image source={logo3} />
        <Text style={styles.descricao}>Obrigado por comprar na minha loja</Text>
        <Button color='#965D2C'  onPress={() => navigation.navigate('home')}   title="Voltar para tela principal" />
     </ImageBackground>
     </>
     
  )
}
const styles = StyleSheet.create({
  logo:{
    padding: 10,
    width: 180, 
    height: 100,
    },
  conteiner:{
    backgroundColor:'#D5BEAA',
    alignItems: 'center',
    flex:1,
  },
  botao:{
   backgroundColor: '#965D2C',
    margin: 5,
    padding: 10,
    borderRadius: 100,
    textTransform: "uppercase",
    justifyContent: 'center',
   },
   descricao:{
    padding: 10,
    margin: 5,
    fontSize: 25,
    textAlign: 'center',
    color: '#8c998c',
    },
  
})
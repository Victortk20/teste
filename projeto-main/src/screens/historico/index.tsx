import * as React from 'react'
import {TextInput, View, Text, Button, ActivityIndicator, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import bg from './../../assets/pictures/bg.png';
import logo3 from './../../assets/pictures/logo3.png';


import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "./../navigations/index";

export interface HistoricoScreenProps {
  route: RouteProp<NavegacaoPrincipalParams, "historico">
}

export function HistoricoScreen (props: HistoricoScreenProps) {

const navigation = useNavigation();



return (
     <>
      <ImageBackground source={{uri:'../../assets/pictures/bg.png'}} style={styles.conteiner}>
      
      </ImageBackground>
     </>
     
    );
}
const styles = StyleSheet.create({
  
  
  logo:{
    justifyContent: 'center',
    padding: 10,
    width: 180, 
    height: 100,
    },
  conteiner:{
    backgroundColor:'#D5BEAA',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    height: '100%',
    padding:'20',
    flex: 1,
  },

  titulo: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    
  },
  produtoconteiner: {
    backgroundColor: '#c7854c',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 50,
   
  },
  descricao: {
    color: '#000000',
    fontSize: 15,
    textAlign: 'center'
  },
  botao:{
   backgroundColor: '#965D2C',
    margin: 5,
    padding: 10,
    borderRadius: 100,
    textTransform: "uppercase",
    justifyContent: 'center',
  },
  
})
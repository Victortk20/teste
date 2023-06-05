import * as React from 'react'
import {TextInput, View, Text, Button, ActivityIndicator, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import bg from './../../assets/pictures/bg.png';
import logo3 from './../../assets/pictures/logo3.png';


import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "./../navigations/index";

export interface CadastroScreenProps {
  route: RouteProp<NavegacaoPrincipalParams, "cadastro">
}

export function CadastroScreen (props: CadastroScreenProps) {

const navigation = useNavigation();

return (
     <>
      <ImageBackground source={{uri:'./scr/assets/bg.png'}} style={styles.conteiner}>
        <Image source={logo3} style={styles.logo}/> 
        <Text style={styles.titulo}>Cadastro</Text>
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Senha" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input}  placeholder="Data de Nascimento" />
        <TextInput style={styles.input}  placeholder="Digite o seu CPF"/>
        

        
         <Button color='#965D2C' style={styles.botao} title="Cadastro" onPress={() => navigation.navigate('login')}/>
     </ImageBackground>
     </>
     
    );
}
const styles = StyleSheet.create({
  titulo: {
    color: '#965D2C',
    fontSize: 30,
    textAlign: 'center'
  },
  input: {
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    marginBottom:10,
    paddingLeft:30,
    padding: 4,
    borderRadius: 20,
    fonteSize:18,
    
  },
  botao:{
   backgroundColor: '#965D2C',
    margin: 5,
    padding: 10,
    borderRadius: 100,
    textTransform: "uppercase",
    justifyContent: 'center',
    

  },
  logo:{
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

  }  
  
})
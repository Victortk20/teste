import { Text, View, StyleSheet, Button,TextInput,ImageBackground,Image,TouchableOpacity} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import logo3 from './../../assets/pictures/logo3.png';

import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "./../navigations/index";



export interface BemvindoScreenProps {
  route: RouteProp<NavegacaoPrincipalParams, "bemvindo">
}
export function BemvindoScreen (props: BemvindoScreenProps) {
  
 const navigation = useNavigation<any>();
  
  return (
    <>
    {/*  */}
      <ImageBackground source={{uri:'./scr/assets/bg.png'}}  style={styles.conteiner}>
        <Image source={logo3} style={styles.logo}/> 
        <Text style={styles.titulo}>Bem Vindo ao Bordados Reciclaveis</Text>
        <Text style={styles.descricao}> Ja possui um cadastro ?</Text>
        <Button color='#965D2C'  title="Login" onPress={() => navigation.navigate('login')} />
        <Text style={styles.descricao}> Ainda não possui cadastro ?</Text>
        <Button color='#965D2C' title="Cadastro" onPress={() => navigation.navigate('cadastro')}/>
        
     </ImageBackground>
     </>
     
  )
}
    
const styles = StyleSheet.create({
  titulo: {
    color: '#965D2C',
    fontSize: 25,
    textAlign: 'center',
    padding: 25,
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
    color: '#8c998c',
    },
  
})
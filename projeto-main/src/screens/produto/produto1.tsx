import * as React from 'react'
import {TextInput, View, Text, Button, ActivityIndicator, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import bg from './../../assets/pictures/bg.png';
import logo3 from './../../assets/pictures/logo3.png';
import bordado1 from './../../assets/pictures/bordado1.png';

import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "./../navigations/index";


import * as ImagePicker from 'expo-image-picker'; 

export interface Produto1ScreenProps {
  route: RouteProp<NavegacaoPrincipalParams, "produto1">
}

export function Produto1Screen (props: Produto1ScreenProps) {

const navigation = useNavigation<any>();

const { produto } = props.route.params;


const [ status, requestPermission ] = ImagePicker.useCameraPermissions();
   const abrirCamera = async () => {
    if (!status?.granted) {
      const resposta = await requestPermission();
      if (!resposta.granted) {
        return; 
      }
 }
  const foto = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1],
      allowsMultipleSelection: false,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    
}

return (
     <>
      <ImageBackground source={{uri:'../../assets/pictures/bg.png'}} style={styles.conteiner}>
        <Image source={logo3} style={styles.logo}/>
        <>
        {/* BR É HTML, nã oexiste em mobile .-. */}
        <Text style={styles.titulo}> {produto.nome}</Text>
        <Image source={produto.imagem} style={styles.imagem}/> 
        <Button color='#965D2C' title="Comprar" onPress={() => navigation.navigate('telafinal')}/>
        <Button color='#965D2C' title="pix" onPress={abrirCamera}  /> 
        <Button color='#965D2C' title="Voltar" onPress={() => navigation.goBack()}  />
        <Text style={styles.descricao}>Preço:{produto.preço} em 12X sem juros.</Text>
        <Text style={styles.descricao}> Descrição do Produto: {produto.descrição} 
        </Text>
        </>
  
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
  imagem: {
    width: 200, 
    height: 200,
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
  logo:{
    padding: 1,
    width: 180, 
    height: 100,
    },
  conteiner:{
    backgroundColor:'#D5BEAA',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%', 
    height: '100%',
    padding:'20',
    flex: 1,
  },

  
})
import * as React from 'react'
import {TextInput, View, Text, Button, ActivityIndicator, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import bg from './../../assets/pictures/bg.png';
import logo3 from './../../assets/pictures/logo3.png';
import bordado1 from './../../assets/pictures/bordado1.png';
import bordado2 from './../../assets/pictures/bordado2.png';
import bordado3 from './../../assets/pictures/bordado3.png';
import bordado4 from './../../assets/pictures/bordado4.png';
import bordado5 from './../../assets/pictures/bordado5.png';


import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from "./../navigations/index";

const produtos =[
      { id: '1' , imagem:require('../../assets/pictures/bordado1.png'), nome:'Bordado Charlotte',preço :'R$ 150.00' ,descrição:'Bordado feito a mao com linha reciclavel charlort colorido ' },

      { id: '2' , imagem:require('../../assets/pictures/bordado2.png'), nome:'Bordado Flores',preço :'R$ 250.00', descrição:'Bordado feito a mao com linha reciclavel flores no jardin colorido ' },

      { id: '3' , imagem:require('../../assets/pictures/bordado3.png'), nome:'Bordado Flores cabeça',preço :'R$ 350.00',descrição:'Bordado feito a mao com linha reciclavel flores na cabeça colorido' },
      
      { id: '4' , imagem:require('../../assets/pictures/bordado4.png'), nome:'Bordados Flores douradas',preço :'R$ 550.00',descrição:'Bordado feito a mao com linha reciclavel flores de ouro colorido' },
      
      { id: '5' , imagem:require('../../assets/pictures/bordado5.png'), nome:'Bordados Keep calm',preço :'R$ 650.00',descrição:'Bordado feito a mao com linha reciclavel keep calm and kiss me' },

];
export function HomeScreen (props: any) {
    
    const navigation = useNavigation<any>();
    return(
        
        <View style={styles.conteiner}>
          <Image source={logo3} style={styles.logo}/>
          <TextInput style={styles.input} placeholder="Buscar Produto" />
          <View style={styles.botaocabecalho}>
          <Button color='#965D2C'  onPress={() => navigation.navigate('login')}   title="Deslogar" />
          <Button color='#965D2C'  onPress={() => navigation.navigate('historico')}   title="Historico " />
          </View>
          <FlatList
              data={produtos}
              renderItem={({item}:any) => (
                <View style={styles.conteiner}>
                  
                  <View style={{flexDirection: 'row' , justifyContent: 'space-around' }}>
                  <View style={{width: 120 , height: 150, }}><Image source={item.imagem} style={styles.produto}/></View>
                  <Text key={item.index} style={styles.titulo}>{item.nome} Preço:{item.preço}</Text>
                  </View>
                  <Button  color='#965D2C'  title="Comprar" onPress={() => navigation.navigate('produto1', {produto: item})}/> 
                  
                </View>
                
              )}
            />
        </View>
    );       
}


const styles = StyleSheet.create({
  conteiner:{
    backgroundColor:'#D5BEAA',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding:20,
    flex: 1
  },
  input: {
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    marginBottom:10,
    padding: 4,
    borderRadius: 20,
    fonteSize:18,
    textAlign: 'center',
    width: "80%",
  },
  
  logo:{
    padding: 10,
    width: 180, 
    height: 100,
  },
  produto:{
    padding: 10,
    width: 140, 
    height: 150,
    
  },
  titulo: {
    color: 'black',
    padding: 30,
    
  },
  botao:{
    backgroundColor: 'black',
    margin: 5,
    padding: 10,
    borderRadius: 100,
  },
  botaoDeslogar:{
    backgroundColor: '#fdd86e',
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 30,
  },
  botaocabecalho: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
})
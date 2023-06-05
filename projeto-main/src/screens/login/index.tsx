import { Text, View, StyleSheet, Button,TextInput,ImageBackground,Image, ToastAndroid} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import logo3 from './../../assets/pictures/logo3.png';
import { useNavigation } from '@react-navigation/native';


export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {
  
  const [ resultado, setResultado ] = useState<null|'logado'|'falhou'>(null);
  const navigation = useNavigation();
  const handleLogin = async ({email, senha}:any) => {
    if (email.trim() == 'teste@teste.com' && senha.trim() == '123456') {
      navigation.navigate('home')
    } else
      setResultado('falhou')
  }
  
  
  return (
    
    <View style={styles.conteiner}>
      <Formik
        initialValues={{email: 'teste@teste.com', senha: '123456'}}
        validationSchema={Yup.object().shape({
          email: Yup.string().required('Informe o email').email('E-mail não válido'),
          senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter 6 caracteres')
        })}
        onSubmit={handleLogin}>
        {({errors, values, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <>
          <ImageBackground source={{uri:'./scr/assets/bg.png'}} style={styles.conteiner}>
          <Image source={logo3} style={styles.logo}/>
          <Text style={styles.titulo}>Login</Text>
          <TextInput style={styles.input} value={values.email} placeholder="Digite seu email" onBlur={handleBlur('email')} onChangeText={handleChange('email')}/>
          <TextInput style={styles.input} value={values.senha} placeholder="Digite sua senha"onBlur={handleBlur('email')} onChangeText={handleChange('senha')} secureTextEntry />
          <Button color='#965D2C' style={styles.botao} title="Logar"onPress={() => handleSubmit()} disabled={isSubmitting} />
          </ImageBackground>
          { resultado == 'logado' && <Text style={styles.success}>Logado com sucesso</Text>}
          { resultado == 'falhou' && <Text style={styles.fail}>Email ou senha incorreto</Text>}
        </>
        )}
      </Formik>
    </View>
  )
}
    
const styles = StyleSheet.create({
  titulo: {
    color: '#965D2C',
    fontSize: 30,
    textAlign: 'center'
  },
  input: {
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    margin: 5,
    padding: 10,
    borderRadius: 100
  },
  botao:{
    backgroundColor: 'black',
    margin: 5,
    padding: 10,
    borderRadius: 100,
    textTransform: "uppercase"
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
  }  
  
})
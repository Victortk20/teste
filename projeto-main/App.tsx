import { Text, View, StyleSheet, Button,TextInput,ImageBackground,Image} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import logo3 from './src/assets/pictures/logo3.png';
import { CadastroScreen } from './src/screens/cadastro';
import { LoginScreen } from './src/screens/login';
import { Produto1Screen } from './src/screens/produto/produto1';
import { NavegacaoPrincipal } from './src/screens/navigations/index';
import { BemvindoScreen } from './src/screens/bem-vindo/index';
import { FimScreen} from './src/screens/compras/index';

import {HistoricoScreen}  from './src/screens/historico/index';

export default function App() {
  return(
    <>
    <NavegacaoPrincipal/>
    </>
  )
}

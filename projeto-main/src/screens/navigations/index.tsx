import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BemvindoScreen } from '../bem-vindo';
import { HomeScreen } from './../home';
import { LoginScreen } from '../login/index';
import { CadastroScreen } from '../cadastro/index';
import { FimScreen } from '../compras/index'

import {HistoricoScreen} from '../historico/index'
import { Produto1Screen } from '../produto/produto1';

export type NavegacaoPrincipalParams = {
    bemvindo: undefined,
    login:undefined,
    cadastro:undefined,
    home: undefined,
    produto1: {produto?:any},
    historico: undefined,
    telafinal: undefined,
}

const Stack = createNativeStackNavigator<NavegacaoPrincipalParams>();

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="bemvindo" component={BemvindoScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="cadastro" component={CadastroScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="produto1" component={Produto1Screen} />
            <Stack.Screen name="historico" component={HistoricoScreen} />
        
            <Stack.Screen name="telafinal" component={FimScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)
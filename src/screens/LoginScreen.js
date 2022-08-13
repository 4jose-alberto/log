import React from 'react'
import { View,Text, Platform,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Background } from '../components/Background';
import { loginStyles } from '../theme/loginTheme';

interface Props extends StackScreenProps<any,any>{}

export const LoginScreen = ({navigation}:Props) => {
    
  return (
    <>
    <Background/>
    <KeyboardAvoidingView 
    style={{flex:1}}
    behavior={ (Platform.OS === 'ios' ? 'padding':'height')}>
        <View style={{flex:1,paddingHorizontal:30,justifyContent:'center',height: 600,marginBottom:50}}>


    <Text style={ loginStyles.title }>!Peluchesaurio¡</Text>
    <Text style={ loginStyles.label }>Correo Electronico</Text>
    <TextInput
        placeholder='ingrese su email'
        keyboardType='email-address'
        underlineColorAndroid='white'

        autoCapitalize='none'
        autoCorrect={false}
        />
    <Text style={ loginStyles.label }>Contraseña</Text>
    <TextInput
        placeholder='*******'
        underlineColorAndroid='white'
        secureTextEntry={true}
        />
        <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
            activeOpacity={0.8}
            style={loginStyles.button}
            onPress={()=> navigation.replace('ProtectedScreen')}>
                    <Text>Login</Text>
            </TouchableOpacity>

        </View>

        
        </View>
    </KeyboardAvoidingView>
        
    
    
    </>
  );
}
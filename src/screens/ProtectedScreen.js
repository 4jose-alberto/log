import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import { loginStyles } from '../theme/loginTheme';
import { Background } from '../components/Background';

interface Props extends StackScreenProps<any,any>{}


export const ProtectedScreen = ({navigation}:Props) => {
  return(
    <>
        <Background/>

        <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
            activeOpacity={0.8}
            style={loginStyles.button}
            onPress={()=> navigation.replace('LoginScreen')}>
                    <Text>Regresar</Text>
            </TouchableOpacity>

        </View>
    </>

  )
}
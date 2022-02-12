import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { View } from 'react-native';
import LongRoundButton from '../../Components/Buttons/LongRoundButton';
import InputWithIcon from '../../Components/Inputs/InputWithIcon';
import SmallText from '../../Components/Links/SmallText';
import BlueLogo from '../../Components/Logos/BlueLogo';
import { AuthContext } from '../../Utilities/AuthContext';
import loginStyles  from './Login.Styles'
export default function Login() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useContext(AuthContext)

  const onPressHandle = async() => {
    try {
      await login( userName, password )
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={loginStyles.container}>
      <StatusBar style="auto" />
      <View style={loginStyles.logoContainer} >
        <BlueLogo/>
      </View>

      <View style={loginStyles.inputContainer}>
      <InputWithIcon
            icon='person'
            placeholder= 'UserName'
            onChangeText={(text)=>setUserName(text)}
        />
        <InputWithIcon
            securityTextEntry={true}
            icon='lock-closed'
            placeholder='Password'
            onChangeText={setPassword}
        />
      </View>

      <View style={loginStyles.buttonContainer}>
        <LongRoundButton title='Sign In' onPress={()=> onPressHandle() }/>
      </View>

      <View style={loginStyles.smallTextContainer}>
        <SmallText title='Forgot Password?' onPress={() => alert("Please contact admin ")}/>
      </View>
    </View>
  );
}

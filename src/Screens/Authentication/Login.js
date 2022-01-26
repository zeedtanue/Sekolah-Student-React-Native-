import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import LongRoundButton from '../../Components/Buttons/LongRoundButton';
import InputWithIcon from '../../Components/Inputs/InputWithIcon';
import SmallText from '../../Components/Links/SmallText';
import BlueLogo from '../../Components/Logos/BlueLogo';
import loginStyles  from './Login.Styles'
export default function Login() {
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
        />
        <InputWithIcon
            securityTextEntry={true}
            icon='lock-closed'
            placeholder='Password'
        />
      </View>

      <View style={loginStyles.buttonContainer}>
        <LongRoundButton title='Sign In'/>
      </View>

      <View style={loginStyles.smallTextContainer}>
        <SmallText title='Forgot Password?'/>
      </View>
    </View>
  );
}

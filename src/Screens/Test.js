import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-web';
import LongRoundButton from '../Components/Buttons/LongRoundButton';
import InputWithIcon from '../Components/Inputs/InputWithIcon';
import SmallText from '../Components/Links/SmallText';
import BlueLogo from '../Components/Logos/BlueLogo'

export default function Login() {
  return (
    <View>
        <BlueLogo/>
        <InputWithIcon
            icon='person'
            placeholder= 'UserName'
        />
        <InputWithIcon
            securityTextEntry={true}
            icon='lock-closed'
            placeholder='Password'
        />
        <LongRoundButton title="Sign In"/>
        <SmallText title='Forgot Password?'/>
    </View>
  );
}

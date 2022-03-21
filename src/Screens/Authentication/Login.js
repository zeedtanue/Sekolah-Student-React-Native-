import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { View } from 'react-native';
import LongRoundButton from '../../Components/Buttons/LongRoundButton';
import InputWithIcon from '../../Components/Inputs/InputWithIcon';
import SmallText from '../../Components/Links/SmallText';
import BlueLogo from '../../Components/Logos/BlueLogo';
import { AuthContext } from '../../Utilities/AuthContext';
import { useToast } from 'native-base';
import loginStyles  from './Login.Styles'
export default function Login() {
  const toast =  useToast()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loadingState, setLoadingState] = useState(false)


  const { login } = useContext(AuthContext)

  const onPressHandle = async() => {
    try {
      setLoadingState(true)
      await login( userName, password )
    } catch (error) {
      setLoadingState(false)
      toast.show({
        title: "Invalid username/password",
        status: "warning",
        description: "Please enter a valid username and password"
      })
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
        <LongRoundButton loading={loadingState} title='Sign In' onPress={()=> onPressHandle() }/>
      </View>

      <View style={loginStyles.smallTextContainer}>
        <SmallText title='Forgot Password?' onPress={() => toast.show({
          description: "Please Contact Admin"
        })}/>
      </View>
    </View>
  );
}

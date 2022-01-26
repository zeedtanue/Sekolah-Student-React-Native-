import { StatusBar } from 'expo-status-bar';
import { Center, NativeBaseProvider } from 'native-base';
import Login from './src/Screens/Authentication/Login'
import Test from './src/Screens/Test'

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  }
}
export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <Center flex={1}>
        <Login/>
        {/* <Test/> */}

      </Center>
    </NativeBaseProvider>
  );
}

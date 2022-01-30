import { StatusBar } from 'expo-status-bar';
import { Center, NativeBaseProvider } from 'native-base';
import AssignmentHome from './src/Screens/Assignments/AssignmentHome';
import Login from './src/Screens/Authentication/Login'
import ClassHome from './src/Screens/Class/ClassHome';
import StudentHome from './src/Screens/Home/StudentHome';
import Profile from './src/Screens/Profile/Profile';
import Test from './src/Screens/Test'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainContainer from './src/navigation/MainContainer';
import MessageHome from './src/Screens/Message/MessageHome';
import BottomTabContainer from './src/navigation/BottomTabContainer'
const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NativeBaseProvider config={config}>

    //   <Center flex={1}>
    //     <MainContainer/> 
    //     {/* <StudentHome/> */}
    //     {/* <ClassHome/> */}
    //     {/* <AssignmentHome/> */}
    //     {/* <Profile/> */}
    //   </Center>
    // </NativeBaseProvider>

    // <NativeBaseProvider config={config}>

    //   <Center flex={1}>
    //   <Login/>
    // </Center>
    // </NativeBaseProvider>
    <NativeBaseProvider config={config}>
      <BottomTabContainer/>

    </NativeBaseProvider>
  );
}

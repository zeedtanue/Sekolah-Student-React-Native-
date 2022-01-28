import { StatusBar } from 'expo-status-bar';
import { Center, NativeBaseProvider } from 'native-base';
import AssignmentHome from './src/Screens/Assignments/AssignmentHome';
import Login from './src/Screens/Authentication/Login'
import ClassHome from './src/Screens/Class/ClassHome';
import StudentHome from './src/Screens/Home/StudentHome';
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
        {/* <Login/> */}
        {/* <StudentHome/> */}
        {/* <ClassHome/> */}
        <AssignmentHome/>
      </Center>
    </NativeBaseProvider>
  );
}

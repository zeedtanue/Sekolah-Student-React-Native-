import React, { useContext, useState } from 'react';
import { Center, NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabContainer from './src/navigation/BottomTabContainer'
import AuthStackNavigation from './src/navigation/AuthStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { useAuth } from './src/Utilities/useAuth';
import { AuthContext } from './src/Utilities/AuthContext';
import { UserContext } from './src/Utilities/UserContext';
import { StatusBar } from 'expo-status-bar';

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  }
}

const RootStack = createNativeStackNavigator();

export default function App() {
  const {auth, state} = useAuth();

  // const { auth, state } = useAuth()

  function renderScreen () {
    // if (state.loading) {
    //   return(
    //     <NativeBaseProvider config={config}>
           
    //      </NativeBaseProvider>
    //    )
    // }
    return state.user ? (
      <RootStack.Screen>
         {() => (
          <UserContext.Provider value={state.user}>
             <StatusBar style="auto"/>
             <BottomTabContainer/>
           </UserContext.Provider>
        )}
       </RootStack.Screen>
    ):
    <RootStack.Screen name={'AuthStack'} component={AuthStackNavigation}/>
  }
  const [ loading, setLoading ] = useState(false)
  const [ user, setUser ] = useState(null)
  return (
    <NativeBaseProvider config={config}>
      <AuthContext.Provider value={auth}> 

      <NavigationContainer>

        {
          loading? (
          <Center flex={1}>
             <ActivityIndicator size="large"/>
           </Center>
          ) : state.user ? (
            <UserContext.Provider value={state.user}>
              <BottomTabContainer/>
            </UserContext.Provider>
          ) : (
            <AuthStackNavigation/>
          )
        }


      </NavigationContainer>
      </AuthContext.Provider>

      {/* <AuthContext.Provider value={auth}>
        <NavigationContainer>
          {renderScreen()}
        </NavigationContainer>
        
      
      <BottomTabContainer/>
      </AuthContext.Provider> */}

    </NativeBaseProvider>
  )
}

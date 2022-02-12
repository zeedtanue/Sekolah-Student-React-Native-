import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Screens/Authentication/Login";
import { NavigationContainer } from "@react-navigation/native";
const { Navigator, Screen } = createNativeStackNavigator()
const AuthStackNavigation = () => {
    
    return (

          <Navigator screenOptions={{
            headerShown: false
          }}>
            <Screen name="Login" component={Login} />
          </Navigator>

    )
}

export default AuthStackNavigation
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentHome from "../Screens/Home/StudentHome";
import AssignmentHome from "../Screens/Assignments/AssignmentHome";
const { Navigator, Screen } = createNativeStackNavigator()
const HomeStackNavigation = () => {
    
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="StudentHome" component={StudentHome}/>
            <Screen name="AssignmentHome" component={AssignmentHome}/>
        </Navigator>
    )
}

export default HomeStackNavigation
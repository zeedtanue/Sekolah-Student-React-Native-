import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentHome from "../Screens/Home/StudentHome";
import AssignmentHome from "../Screens/Assignments/AssignmentHome";
import ClassHome from "../Screens/Class/ClassHome";
const { Navigator, Screen } = createNativeStackNavigator()
const HomeStackNavigation = () => {
    
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="StudentHome" component={StudentHome}/>
            <Screen name="AssignmentHome" component={AssignmentHome}/>
            <Screen name="ClassHome" component={ClassHome}/>
        </Navigator>
    )
}

export default HomeStackNavigation
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentHome from '../Screens/Home/StudentHome';
import Profile from '../Screens/Profile/Profile';
import MessageHome from '../Screens/Message/MessageHome';

import { Feather } from '@expo/vector-icons';

//ScreenName
const homeName = 'Home';
const messageName = 'Message';
const profile = 'Profile';

const Tab = createBottomTabNavigator()

export default function MainContainer () {
    return (
        <NavigationContainer>
            
        </NavigationContainer>        
    )
}
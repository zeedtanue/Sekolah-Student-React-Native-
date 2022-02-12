import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentHome from '../Screens/Home/StudentHome';
import Profile from '../Screens/Profile/Profile';
import MessageHome from '../Screens/Message/MessageHome';

import { Feather } from '@expo/vector-icons';
import HomeStackNavigation from './HomeStackNavigation';

//ScreenName
const homeName = 'Home';
const messageName = 'Message';
const profile = 'Profile';

const Tab = createBottomTabNavigator()

export default function BottomTabContainer () {
    return (
            <Tab.Navigator
              initialRouteName={homeName}
              screenOptions={({route}) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    if( rn === homeName ) {
                        iconName = focused ? 'home' : 'home'
                    } else if ( rn === messageName ) {
                        iconName = focused ? 'mail' : 'mail'
                    } else if( rn === profile ) {
                        iconName = focused ? 'user' : 'user'
                    }

                    return <Feather name={iconName} size={size} color={color}/>
                  },
                  headerShown: false

              })}
            >
              <Tab.Screen name={homeName} component={HomeStackNavigation}/>
              <Tab.Screen name={messageName} component={MessageHome}/>
              <Tab.Screen name={profile} component={Profile}/>
            </Tab.Navigator>
    )
}
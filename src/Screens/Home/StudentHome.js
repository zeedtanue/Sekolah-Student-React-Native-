import React from "react";
import { View, Text} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import TopBlue from "../../Components/Backgrounds/TopBlue";
import WhiteLogo from "../../Components/Logos/WhiteLogo";
import { FontAwesome5 } from '@expo/vector-icons';
import studentHomeStyles from "./StudentHome.Styles";
import LogoWithBell from "../../Components/Headers/LogoWithBell";

const StudentHome = () => {
    return (
      <View style={studentHomeStyles.container}>
        <StatusBar style="auto" />
        <TopBlue>
            <LogoWithBell title="Silver Lining Grammar School"/>
        </TopBlue>
      </View>
      
    )
}

export default StudentHome

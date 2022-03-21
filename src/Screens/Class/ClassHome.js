import React from "react";
import { View, Text, ScrollView} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import TopBlue from "../../Components/Backgrounds/TopBlue";
import classHomeStyles from "./ClassHome.Styles";
import LogoWithBell from "../../Components/Headers/LogoWithBell";
import RectangleButton from "../../Components/Buttons/RectangleButton";

const ClassHome = ({navigation}) => {
    const navigateLiveClass= () => {
      navigation.navigate('LiveClass')
    }
    return (
      <View style={classHomeStyles.container}>
        <StatusBar style="auto" />
        <TopBlue>
            <LogoWithBell title="Silver Lining Grammar School"/>
            <ScrollView style={classHomeStyles.scrollContainer}>
                {/* Notice */}
                <View style={classHomeStyles.buttonContainer}>
                    <RectangleButton
                      background="primary" 
                      icon={require('../../../assets/webinar-icon.png')}
                      title="Live Class"
                      onPress={()=> navigation.navigate('LiveClass')}

                      />
                    <RectangleButton
                      background="secondary" 
                      icon={require('../../../assets/presentation-icon.png')}
                      title="Class Lecture"
                      onPress={() => navigation.navigate('ClassLecture')}
                      />
                    
                </View>
                
            </ScrollView>
        </TopBlue>
      </View>
      
    )
}

export default ClassHome

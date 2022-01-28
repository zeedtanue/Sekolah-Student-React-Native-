import React from "react";
import { View, Text, ScrollView} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import TopBlue from "../../Components/Backgrounds/TopBlue";
import assignmentHomeStyles from "./AssignmentHome.Styles";
import LogoWithBell from "../../Components/Headers/LogoWithBell";
import RectangleButton from "../../Components/Buttons/RectangleButton";

const AssignmentHome = () => {
    return (
      <View style={assignmentHomeStyles.container}>
        <StatusBar style="auto" />
        <TopBlue>
            <LogoWithBell title="Silver Lining Grammar School"/>
            <ScrollView style={assignmentHomeStyles.scrollContainer}>
                {/* Notice */}
                <View style={assignmentHomeStyles.buttonContainer}>
                    <RectangleButton
                      background="primary" 
                      icon={require('../../../assets/task-icon.png')}
                      title="Task"/>
                    <RectangleButton
                      background="secondary" 
                      icon={require('../../../assets/submission-icon.png')}
                      title="Submission"/>
                    
                </View>
                
            </ScrollView>
        </TopBlue>
      </View>
      
    )
}

export default AssignmentHome

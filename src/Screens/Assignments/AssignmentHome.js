import React from "react";
import { View, Text, ScrollView} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import TopBlue from "../../Components/Backgrounds/TopBlue";
import assignmentHomeStyles from "./AssignmentHome.Styles";
import LogoWithBell from "../../Components/Headers/LogoWithBell";
import RectangleButton from "../../Components/Buttons/RectangleButton";

const AssignmentHome = ({ navigation }) => {
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
                      title="Task and Submission"
                      onPress={()=> navigation.navigate('Task')}
                      />
                    
                    
                </View>
                
            </ScrollView>
        </TopBlue>
      </View>
      
    )
}

export default AssignmentHome

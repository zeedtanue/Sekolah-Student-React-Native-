import React from "react";
import { View, Text, ScrollView} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import TopBlue from "../../Components/Backgrounds/TopBlue";
import studentHomeStyles from "./StudentHome.Styles";
import LogoWithBell from "../../Components/Headers/LogoWithBell";
import RectangleButton from "../../Components/Buttons/RectangleButton";

const StudentHome = () => {
    return (
      <View style={studentHomeStyles.container}>
        <StatusBar style="auto" />
        <TopBlue>
            <LogoWithBell title="Silver Lining Grammar School"/>
            <ScrollView style={studentHomeStyles.scrollContainer}>
                {/* Notice */}
                <Text style={studentHomeStyles.notice} >Some Notice from the school</Text>
                <View style={studentHomeStyles.buttonContainer}>
                    <RectangleButton
                      background="primary" 
                      icon={require('../../../assets/class-icon.png')}
                      title="Class"/>
                    <RectangleButton
                      background="secondary" 
                      icon={require('../../../assets/book-icon.png')}
                      title="Syllabus"/>
                    
                </View>
                <View style={studentHomeStyles.buttonContainer}>
                    <RectangleButton
                      background="secondary" 
                      icon={require('../../../assets/clipboard-icon.png')}
                      title="Class Routine"/>
                    <RectangleButton
                      background="primary" 
                      icon={require('../../../assets/timetable-icon.png')}
                      title="Exam Routine"/>
                </View>
                <View style={studentHomeStyles.buttonContainer}>
                    <RectangleButton
                      background="primary" 
                      icon={require('../../../assets/assignmentIcon.png')}
                      title="Assignments"/>
                    <RectangleButton
                      background="secondary" 
                      icon={require('../../../assets/noticeboard-icon.png')}
                      title="Notice"/>
                </View>
                <View style={studentHomeStyles.buttonContainer}>
                    <RectangleButton
                      background="secondary" 
                      icon={require('../../../assets/accounts-icon.png')}
                      title="Accounts"/>
                </View>
            </ScrollView>
        </TopBlue>
      </View>
      
    )
}

export default StudentHome

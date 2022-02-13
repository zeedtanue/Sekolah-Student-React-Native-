import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentHome from "../Screens/Home/StudentHome";
import AssignmentHome from "../Screens/Assignments/AssignmentHome";
import ClassHome from "../Screens/Class/ClassHome";
import LiveClass from "../Screens/Class/LiveClass";
import ClassLecture from "../Screens/Class/ClassLecture";
import LectureDetails from "../Screens/Class/LectureDetails";
import SyllabusHome from "../Screens/Syllabus/SyllabusHome";
import ClassRoutine from "../Screens/Routine/ClassRoutine";
import ExamRoutine from "../Screens/Routine/ExamRoutin";
import Notice from "../Screens/Notice/Notice";
const { Navigator, Screen } = createNativeStackNavigator()
const HomeStackNavigation = () => {
    
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="StudentHome" component={StudentHome}/>
            <Screen name="AssignmentHome" component={AssignmentHome}/>
            <Screen name="ClassHome" component={ClassHome}/>
            <Screen name="LiveClass" component={LiveClass}/>
            <Screen name="ClassLecture" component={ClassLecture}/>
            <Screen name="LectureDetails" component={LectureDetails}/>
            <Screen name="SyllabusHome" component={SyllabusHome}/>
            <Screen name="ClassRoutine" component={ClassRoutine}/>
            <Screen name="ExamRoutine" component={ExamRoutine} />
            <Screen name="Notice" component={Notice}/>

        </Navigator>
    )
}

export default HomeStackNavigation
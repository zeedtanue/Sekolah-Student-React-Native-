import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import TopBlue from "../../Components/Backgrounds/TopBlue";
import studentHomeStyles from "./StudentHome.Styles";
import LogoWithBell from "../../Components/Headers/LogoWithBell";
import RectangleButton from "../../Components/Buttons/RectangleButton";
import axios from "axios";
import { UserContext } from "../../Utilities/UserContext";

const StudentHome = ({ navigation }) => {
    const user = useContext(UserContext)
    const assignmentFunc = () => {
        navigation.navigate('AssignmentHome')
    }
    const classFunc = () => {
        navigation.navigate('ClassHome')
    }
    const syllabusFunc = () => {
      navigation.navigate('SyllabusHome')
    }
    const classRoutineFunc = () => {
      navigation.navigate('ClassRoutine')
    }
    const examRoutine = () => {
      navigation.navigate('ExamRoutine')
    }
    const noticeRoute = () => {
      navigation.navigate('Notice')
    }
    
    const [noticeList, setNoticeList] = useState([])

    const getData = async() => {

      // var config = {
      //   method: 'get',
      //   url: 'http://moonlightkindergarten.com/api/student-noticeboard/93',
      //   headers: { 
      //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTY5YWQ2YTU4MjRhNDMxNzg5Nzg2OTYwZjFiZDU0NGNlNjEzNGRlZDE1ZmFkZmY3MDM0NDI4YzFlY2Q4NDUwNzQwOGQwN2FjOGJhMDMzMTAiLCJpYXQiOjE2NDcyODQ1NTUuODcyNzU2OTU4MDA3ODEyNSwibmJmIjoxNjQ3Mjg0NTU1Ljg3Mjc2MDA1NzQ0OTM0MDgyMDMxMjUsImV4cCI6MTY3ODgyMDU1NS44NzEzNzUwODM5MjMzMzk4NDM3NSwic3ViIjoiMTQiLCJzY29wZXMiOltdfQ.YkGOcFDYxPDeqsjJwfCgBcE_9Ce9xVTBaiUzstulQ1738tkVXn8gzB8H3xL9506VFDQ51Ep_dnb_o2d5TiM4-_LgqjZd8XGdMg8AQ29QzIAGcOOid1VNpommh6lVq7qe6j4JrA8p_1zkEZrAYRpZS-2qDQR6Z6Ca665jJkzSkPj6i5shSglHuB0aBoSgDJnQjudoPfvkJFfvY8tAX4tVFyh3tPw4hwY3Xadl0Xj6YY3_O8FDyWvKEnc-gkdveJ__nhuezhGuCmDJxUC9LJ5wdInx4VMgqAmizzAAYF-4ssil8ZHh8cjRlKqOSDJUPbdFTrBNmf3_LmHwDwXVV7xQsXMi7H-w_asIPZ8ykSSUc-IJYzqdKURPQRHLPQEzkdvVtDPzfg3zBcZOvOn9KYHgMv9WKx4o6qR1rdXTNSWPaEbdjlyAGEwQCY6YV5njgmXHdkBWqdXAkycO7xBUxAyhfrHOq2qRIudLXQHrlHbwtcSwdIbNH9o6sRkeibuDrvKntfLnbaE0E68HDUAZcG3VtcpSkQUsQ4KnAStafAOuXV9tXdaBGOQfGn-7lw3-IsCcl5P4u96LMOxMwttVvuF5QjbC-QM7VFt7V-FmOwlh_-UXCx57L9xUcImNcmihZqvbodHY-BrTfCSWQTrn5BhUo3T29XlEpvStq0HpSHxikI8', 
      //     'Cookie': 'PHPSESSID=2eb4120c885b47dbd2ca6e93f31feaca; XSRF-TOKEN=eyJpdiI6IlliUHlSMU02ZmVTZWR6QTJLMG9ubVE9PSIsInZhbHVlIjoiNGhXSEpVREhjaHlkRW42bzA3Z3o0bTNjWGg0RWJTSEZ5MmFnR0d2NFJyeDQySEhGbDlEWHNzU3h6d1l2WjV2ZmkwMEs5aWhuc1Q4UUg1TC83UkRxSGY5b0xKTFdYSlRLZkcvUnB5YlF4MUhOOFhYYmJUS2dkUkRRRitiZUlmMmIiLCJtYWMiOiI1MzYxYzZmNTA0MTM4YTM4NTQ4YTNkMDExNDliYzhlMmIwZTZkNzUxNGI1NTNiMmUxZTJmYzg3NzI0NGE3MWU2In0%3D; shikkhaapp_session=eyJpdiI6InlkSTZTS25tWFByQyswemJ1UjVGUEE9PSIsInZhbHVlIjoiTGZCV0JoUkZVTSs3ZEtiWGQ0enFOWXdXY052QktBejlQejBRQTRUaU9XZFg4aHZHeTk2Wis3Q1RoaWtzNk12cVZSL2RzSHB5TDJ2Y21CbXdWbFQ0aGlONEZOMEtXeXNVQXJrRHR1RmEzRzl6RG9kSkYvdXBpNzBpdGU0K1daRGIiLCJtYWMiOiI2NzU1YjNkZmQ1M2FkMTg0ZjQzYWZhMzIzOTlkMjE4NGRiYTZkZDdhOTM3ZjMxZDJlODIyOWVkZjlhNDExYzA2In0%3D'
      //   }
      // }

      // axios(config)
      // .then(function (response) {
      // console.log(JSON.stringify(response.data));
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      const config = {
        method: 'get',
        url: `${user.base_url}api/student-noticeboard/${user.studentId}`,
        headers: { 
          'Authorization': user.token
        }
      };
      try {
        const { data } = await axios(config)
        const {allNotices} = data.data
        setNoticeList([...allNotices])
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      getData()
    }, [])
    


    return (
      <View style={studentHomeStyles.container}>
        <StatusBar style="auto" />
        <TopBlue>
            <LogoWithBell/>
            <ScrollView style={studentHomeStyles.scrollContainer}>
                {/* Notice */}
                {noticeList.length !==0 ?
                  <Text style={studentHomeStyles.notice} >{noticeList[0].notice_title}</Text>
                  :
                  <Text style={studentHomeStyles.notice} >No recent notices</Text>
                
                }
                <View style={studentHomeStyles.buttonContainer}>
                    <RectangleButton
                      background="primary" 
                      icon={require('../../../assets/class-icon.png')}
                      title="Class"
                      onPress={classFunc}
                      />
                    <RectangleButton
                      background="secondary" 
                      icon={require('../../../assets/book-icon.png')}
                      title="Syllabus"
                      onPress={syllabusFunc}
                      />
                    
                </View>
                <View style={studentHomeStyles.buttonContainer}>
                    <RectangleButton
                      background="secondary" 
                      icon={require('../../../assets/clipboard-icon.png')}
                      title="Class Routine"
                      onPress={classRoutineFunc}
                      />
                    <RectangleButton
                      background="primary" 
                      icon={require('../../../assets/timetable-icon.png')}
                      title="Exam Routine"
                      onPress={examRoutine}
                      />
                </View>
                <View style={studentHomeStyles.buttonContainer}>
                    <RectangleButton
                      background="primary" 
                      icon={require('../../../assets/assignmentIcon.png')}
                      onPress={assignmentFunc}
                      title="Assignments"/>
                    <RectangleButton
                      background="secondary" 
                      icon={require('../../../assets/noticeboard-icon.png')}
                      title="Notice"
                      onPress={noticeRoute}
                      />
                </View>
                <View style={studentHomeStyles.buttonContainer}>
                    <RectangleButton
                      background="secondary" 
                      icon={require('../../../assets/accounts-icon.png')}
                      title="Accounts"
                      onPress={()=> navigation.navigate('Accounts')}
                      />
                </View>
            </ScrollView>
        </TopBlue>
      </View>
      
    )
}

export default StudentHome

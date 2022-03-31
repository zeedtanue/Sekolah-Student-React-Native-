import React, { useState, useContext, useEffect } from 'react'
import { View , Text, ScrollView, Linking } from 'react-native'
import CardWithButton from '../../Components/Card/CardWithButton'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import liveClassStyles from './LiveClass.Styles'
import { UserContext } from '../../Utilities/UserContext'
import axios from 'axios'
import { Spinner } from 'native-base'
const LiveClass = () => {
  const user = useContext(UserContext)
  const [meetingList, setMeetingList] = useState([])
  const [loading, setLoading] = useState(false)
  const [liveClasses, setLiveClasses] = useState([
    {teacher: 'Atiar Rahman', class: 'Nine', subject: 'Science', date: 'Dec 23, 2022', time: '04:00 PM - 05:00 PM'},
    {teacher: 'Atiar Rahman', class: 'Nine', subject: 'Science', date: 'Dec 23, 2022', time: '04:00 PM - 05:00 PM'},
    {teacher: 'Atiar Rahman', class: 'Nine', subject: 'Science', date: 'Dec 23, 2022', time: '04:00 PM - 05:00 PM'},
    {teacher: 'Atiar Rahman', class: 'Nine', subject: 'Science', date: 'Dec 23, 2022', time: '04:00 PM - 05:00 PM'},
    {teacher: 'Atiar Rahman', class: 'Nine', subject: 'Science', date: 'Dec 23, 2022', time: '04:00 PM - 05:00 PM'},    
  ])
 
  const getData = async() => {
    const config = {
      method: 'get',
      url: `${user.base_url}api/zoom-class-update/${user.classId}/${user.studentId}`,
      headers: { 
        'Authorization': user.token
      }
    };
  try {
    setLoading(true)
    const {data} = await axios(config)
    console.log(data.meetings)
    setMeetingList([...data.meetings])
    // setSchedule([...data.data])
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.log(error)
    
  }
  }

  useEffect(() => {
    getData()
  }, [])



  return (


      <View style={liveClassStyles.container}>
        <View style={liveClassStyles.title}>
          <LogoWithTitle/>
        </View>
        <Text style={liveClassStyles.textTitle}>Live Class </Text>
        <ScrollView>
          {loading? 
            <Spinner style={{ justifyContent:'center', alignSelf:'center' }} size="lg"/>:null  
           }
        { meetingList.map((item) => 
          <View style={liveClassStyles.cardContainer} key={item.id}>
           <CardWithButton 
             title={"Topic: " + item.topic}
             subtitle1={"Details: " + item.description}
             subtitle2={"Meeting Duration: "+ item.meeting_duration}
             footer1={"Date: "+ item.start_time.slice(0,10)}
             footer2={ "Time: "+ item.time_of_meeting }
             icon="eye"
             buttonTitle="Join"
             onPress={()=> Linking.openURL(`https://us04web.zoom.us/j/${item.meeting_id}/${item.password}`)}
             />
          </View>
        )


        }
        </ScrollView>
        
      </View>
  )
}

export default LiveClass
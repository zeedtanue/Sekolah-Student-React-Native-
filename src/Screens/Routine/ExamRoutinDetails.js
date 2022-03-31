import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import examRoutinDetailsStyles from './ExamRoutinDetails.Styles'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import { UserContext } from '../../Utilities/UserContext'
import axios from 'axios'
import { Spinner } from 'native-base'


const ExamRoutinDetails = ({ route }) => {
  const user = useContext(UserContext)
  const item = route.params
  console.log(item)
//   moonlightkindergarten.com/api/exam-schedule/{student_id}/{exam_id}
  const [schedule, setSchedule] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async() => {
    const config = {
      method: 'get',
      url: `${user.base_url}api/exam-schedule/${user.studentId}/${item.exam_id}`,
      headers: { 
        'Authorization': user.token
      }
    };
  try {
    setLoading(true)
    const {data} = await axios(config)
    console.log(data)
    setSchedule([...data.data])
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
    <View style={examRoutinDetailsStyles.container}>
      <View style={examRoutinDetailsStyles.title}>
          <LogoWithTitle/>
        </View>
        <Text style={examRoutinDetailsStyles.textTitle}> 
          {item.exam_name}
        </Text>
        
        <View style={examRoutinDetailsStyles.rowText}>
        <Text style={{ fontSize:12, marginLeft:10, color:'#32C5F5' }}>Time</Text>
        <Text style={{ fontSize:12, marginLeft:45, color:'#32C5F5' }}>Subject</Text>
        <Text style={{ fontSize:12, marginLeft:40, color:'#32C5F5' }}>Room No</Text>
        <Text style={{ fontSize:12, marginLeft:50 ,color:'#32C5F5' }}>Exam</Text>

      </View>
      {loading?
        <Spinner style={{ justifyContent:'center', alignSelf:'center' }} size="lg"/>:null  
      }
      {schedule.length ===0? <Text style={examRoutinDetailsStyles.noscheduletext}>No schedule for the day</Text>: null}
      
      {schedule.map((i) => 
      <View key={i.end_time+i.subject_name} style={examRoutinDetailsStyles.rowText}>
          <View style={{ width: 70 }}>
            <Text style={{ fontSize:9 }}>{i.start_time.slice(0,5)}- {i.end_time.slice(0,5)}</Text>
          </View>
          <View style={{ width:100 }}>
            <Text style={{ fontSize:9, marginLeft:10 }}>{i.subject_name}</Text>
          </View>
          <Text style={{ fontSize:9}}>{i.room_no}</Text>
          <Text style={{ fontSize:9, marginLeft: 40 }}>{i.exam_name}</Text>

      </View>
      )}

    </View>
  )
}

export default ExamRoutinDetails
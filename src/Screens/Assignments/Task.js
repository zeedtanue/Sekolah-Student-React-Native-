import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import taskStyles from './Task.Styles'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import CardWithButton from '../../Components/Card/CardWithButton'
import axios from 'axios'
import { UserContext } from '../../Utilities/UserContext'
import { Spinner } from 'native-base'


export default function Task({navigation}) {
  const user = useContext(UserContext )
  const [loading, setLoading] = useState(false)

  const taskGetFunc = async () => {
    const config = {
      method: 'get',
      url: `${user.base_url}api/student-homework/${user.studentId}`,
      headers: { 
        'Authorization': user.token
      }
    };

    try {
      setLoading(true)
      const homework = await axios(config)
      const {data} = homework.data
      setTasks([...data])
      setLoading(false)
      console.log(data)
    } catch (error) {
      setLoading(false)
    }


  }
  useEffect(() => {
    taskGetFunc()
  }, [])
  

    const [tasks, setTasks] = useState([])
  return (
    <View style={taskStyles.container}>
      <View style={taskStyles.title}>
        <LogoWithTitle/>
      </View>
      <Text style={taskStyles.textTitle}>Task</Text>
      <ScrollView>
      {loading? 
            <Spinner style={{ justifyContent:'center', alignSelf:'center' }} size="lg"/>:null  
           }
      {tasks.length === 0 ? <Text style={taskStyles.emptyArray}>No Assignments/ Homework Yet</Text>: null}
      {tasks.map((item) => 
      <View style={taskStyles.cardContainer} key={item.id}>
        <CardWithButton
          title={"Subject: "+item.subject_name+  " - "+item.created_by}
          subtitle1={"Status: "+item.status+ "  Marks:"+item.marks}
          subtitle2={"Description: " +item.description}
          footer1={"Assignment Date:"+item.homework_date}
          footer2={"    Submission:" +item.submission_date}
          icon="eye"
          buttonTitle="View & submit"
          onPress={()=> navigation.navigate('SubmissionTask', item)}
          />
      </View>
      )}
      </ScrollView>
    </View>
  )
}
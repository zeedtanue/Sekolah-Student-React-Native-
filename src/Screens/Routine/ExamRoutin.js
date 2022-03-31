import React, { useState, useContext, useEffect } from 'react'
import { ScrollView, Text, View, TouchableOpacity} from 'react-native'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import { UserContext } from '../../Utilities/UserContext'
import { Spinner } from 'native-base'
import examRoutineStyles from './ExamRoutin.Styles'
import axios from 'axios'
const ExamRoutine = ({ navigation }) => {
  const user = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [examList, setExamList] = useState([])
  const getData = async() => {
    const config = {
      method: 'get',
      url: `${user.base_url}api/exam-list/${user.studentId}`,
      headers: { 
        'Authorization': user.token
      }
    };
  try {
    setLoading(true)
    const {data} = await axios(config)
    console.log(data)
    setExamList([...data.data])
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
      <View style={examRoutineStyles.container}>
        <View style={examRoutineStyles.title}>
          <LogoWithTitle/>
        </View>

        <Text style={examRoutineStyles.textTitle}> 
          Exam Routine
        </Text>
        <ScrollView >
        <View style={examRoutineStyles.tableContainer}> 
        {loading? 
            <Spinner style={{ justifyContent:'center', alignSelf:'center' }} size="lg"/>:null  
           }
        {examList.map(item=> 
          <TouchableOpacity key={item.exam_id}
            style={examRoutineStyles.buttonList}
            onPress={()=> navigation.navigate('ExamRoutinDetails', item )}
            >
            <Text style={examRoutineStyles.buttonText}>{item.exam_name}</Text>
          </TouchableOpacity>
          )}
          
          {/* <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={tableData.tableHead} style={examRoutineStyles.tableHead} textStyle={examRoutineStyles.tableHeadText}/>
            <Rows data={tableData.tableData} textStyle={examRoutineStyles.rowText}/>
          </Table> */}

        </View>
        </ScrollView>
      </View>
  )
}

export default ExamRoutine
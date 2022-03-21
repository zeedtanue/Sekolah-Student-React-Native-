import React, { useEffect, useState, useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import classRoutineStyles from './ClassRoutin.Styles'
import { UserContext } from '../../Utilities/UserContext'
import axios from 'axios'
const ClassRoutine = ({ navigation }) => {
  const [allRoutine, setAllRoutine] = useState({})
  const user = useContext(UserContext)

      
  const getData = async() => {
    // moonlightkindergarten.com/api/studentSyllabus/{id}
    const config = {
      method: 'get',
      url: `${user.base_url}api/student-class-routine/${user.studentId}`,
      headers: { 
        'Authorization': user.token
      }
    };
    try {
      const response = await axios(config)
      const { data } = response.data
      setAllRoutine({...data})
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    getData()
  }, [])
  







  return (
      <View style={classRoutineStyles.container}>
        <View style={classRoutineStyles.title}>
          <LogoWithTitle/>
        </View>
          <Text style={classRoutineStyles.textTitle}>Class Routine</Text>
          <View style={classRoutineStyles.contentContainer}>
            <TouchableOpacity 
              style={classRoutineStyles.buttonRed}
              onPress={()=> navigation.navigate('ClassRoutineDetails', {title: 'Saturday',routine: allRoutine.Saturday} )}
              >
              <Text style={classRoutineStyles.buttonText}>Saturday</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={classRoutineStyles.buttonGreen}
              onPress={()=> navigation.navigate('ClassRoutineDetails', {title: 'Sunday',routine: allRoutine.Sunday} )}
     
            
            >
              <Text style={classRoutineStyles.buttonText}>Sunday</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={classRoutineStyles.buttonRed}
              onPress={()=> navigation.navigate('ClassRoutineDetails', {title: 'Monday',routine: allRoutine.Monday} )}

              
              >
              <Text style={classRoutineStyles.buttonText}>Monday</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={classRoutineStyles.buttonGreen}
              onPress={()=> navigation.navigate('ClassRoutineDetails', {title: 'Tuesday',routine: allRoutine.Tuesday} )}

              >
              <Text style={classRoutineStyles.buttonText}>Tuesday</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={classRoutineStyles.buttonRed}
              onPress={()=> navigation.navigate('ClassRoutineDetails', {title: 'Wednesday',routine: allRoutine.Wednesday} )}
              >
              <Text style={classRoutineStyles.buttonText}>Wednesday</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={classRoutineStyles.buttonGreen}
              onPress={()=> navigation.navigate('ClassRoutineDetails', {title: 'Thursday',routine: allRoutine.Thursday} )}

              >
              <Text style={classRoutineStyles.buttonText}>Thursday</Text>
            </TouchableOpacity>

          </View>
      </View>
  )
}

export default ClassRoutine
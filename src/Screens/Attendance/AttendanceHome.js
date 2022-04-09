import { View, Text } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import attendanceHomeStyles from './AttendanceHome.Styles'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import { StatusBar } from 'expo-status-bar'
import { Select, Box, CheckIcon, Center, NativeBaseProvider, ScrollView, FlatList, HStack, Spinner } from "native-base";
import moment from 'moment'
import { UserContext } from '../../Utilities/UserContext'
import axios from 'axios'

const AttendanceHome = () => {
  const user = useContext(UserContext)
  
  let nowTime = moment().format('l')
  let year = nowTime.slice(-4)
  let currentMonth = nowTime.slice(0,1)
  let [month, setMonth] = useState(currentMonth);
  let [loading, setLoading] = useState(true);
  let [attendances, setAttendances] = useState([])

//   https://demo.shikkhaapp.com/api/child-attendance/11?month=2&year=2022

const getData = async() => {
    const config = {
      method: 'get',
      url: `${user.base_url}api/child-attendance/${user.studentId}?month=${month}&year=${year}`,
      headers: { 
        'Authorization': user.token
      }
    };
  try {
    setLoading(true)
    const {data} = await axios(config)
    console.log(data)
    setAttendances([...data.data.attendances])
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.log(error)    
  }
  }

  useEffect(() => {
    getData()
  }, [month])


  //data

  const attendancesData = [
    {
        "attendance_type": "L",
        "attendance_date": "2022-02-01"
    },
    {
        "attendance_type": "P",
        "attendance_date": "2022-02-02"
    },
    {
        "attendance_type": "A",
        "attendance_date": "2022-02-03"
    },
    {
        "attendance_type": "L",
        "attendance_date": "2022-02-04"
    },
    {
        "attendance_type": "P",
        "attendance_date": "2022-02-05"
    },
    {
        "attendance_type": "A",
        "attendance_date": "2022-02-06"
    },
    {
        "attendance_type": "L",
        "attendance_date": "2022-02-07"
    },
    {
        "attendance_type": "P",
        "attendance_date": "2022-02-08"
    },
    {
        "attendance_type": "A",
        "attendance_date": "2022-02-09"
    },
    {
        "attendance_type": "L",
        "attendance_date": "2022-02-10"
    },
    {
        "attendance_type": "P",
        "attendance_date": "2022-02-11"
    },
    {
        "attendance_type": "A",
        "attendance_date": "2022-02-12"
    },
    {
        "attendance_type": "L",
        "attendance_date": "2022-02-13"
    },
    {
        "attendance_type": "P",
        "attendance_date": "2022-02-14"
    },
    {
        "attendance_type": "A",
        "attendance_date": "2022-02-15"
    },
    {
        "attendance_type": "L",
        "attendance_date": "2022-02-16"
    },
    {
        "attendance_type": "P",
        "attendance_date": "2022-02-17"
    },
    {
        "attendance_type": "A",
        "attendance_date": "2022-02-18"
    },
    {
        "attendance_type": "L",
        "attendance_date": "2022-02-19"
    },
    {
        "attendance_type": "P",
        "attendance_date": "2022-02-20"
    },
    {
        "attendance_type": "A",
        "attendance_date": "2022-02-21"
    },
    {
        "attendance_type": "L",
        "attendance_date": "2022-02-22"
    },
    {
        "attendance_type": "P",
        "attendance_date": "2022-02-23"
    },
    {
        "attendance_type": "A",
        "attendance_date": "2022-02-24"
    },
    {
        "attendance_type": "L",
        "attendance_date": "2022-02-25"
    },
    {
        "attendance_type": "P",
        "attendance_date": "2022-02-26"
    },
    {
        "attendance_type": "A",
        "attendance_date": "2022-02-27"
    }
  ]


  console.log(moment().format('YYYY-MM-DD'))
  return (
    <View style={attendanceHomeStyles.container}>
      <StatusBar style="auto"/>
      <View style={attendanceHomeStyles.title}>
          <LogoWithTitle/>

      </View>
      <View>
        <Text style={attendanceHomeStyles.textTitle}>Attendance</Text>
      </View>
      <View style={attendanceHomeStyles.monthBox}>
        <Box w="2/4" maxW="300">
          <Select selectedValue={month} minWidth="200" accessibilityLabel="Select A Month" placeholder="Select A Month" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />
           }} mt={1} onValueChange={itemValue => setMonth(itemValue)}>
            <Select.Item label="January" value="1" />
            <Select.Item label="February" value="2" />
            <Select.Item label="March" value="3" />
            <Select.Item label="April" value="4" />
            <Select.Item label="May" value="5" />
            <Select.Item label="June" value="6" />
            <Select.Item label="July" value="7" />
            <Select.Item label="August" value="8" />
            <Select.Item label="September" value="9" />
            <Select.Item label="October" value="10" />
            <Select.Item label="November" value="11" />
            <Select.Item label="December" value="12" />

          </Select>
        </Box>
        <Text style={attendanceHomeStyles.yearText}>/ {year}</Text>
      </View>
      <View>
          <Text style={attendanceHomeStyles.text}>Present: P, Late: L, Absent: A, Holiday: H, Half Day: F</Text>
      </View>
      {/* <ScrollView> */}
      {loading? 
        <Spinner style={{ justifyContent:'center', alignSelf:'center', paddingTop: 100 }} size="lg"/>
        
      :

      <View>
            <Box borderBottomWidth="1" _dark={{
                  borderColor: "gray.600"
                  }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                  <HStack space={3} justifyContent="space-around">
                    <Text style={attendanceHomeStyles.textHead}>Date</Text>
                    <Text style={attendanceHomeStyles.textHead}>Status</Text>


              </HStack>
            </Box>
          <FlatList data={attendancesData} renderItem={({
              item
              }) => 
              <Box borderBottomWidth="1" _dark={{
                  borderColor: "gray.600"
                  }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                  <HStack space={3} justifyContent="space-around">
                      <Text>{item.attendance_date}</Text>
                      <Text>{item.attendance_type}</Text>


                  </HStack>
                </Box>
              
              } keyExtractor ={item => item.attendance_date} />
      </View>
    }
          
      {/* </ScrollView> */}
    </View>
  )
}

export default AttendanceHome
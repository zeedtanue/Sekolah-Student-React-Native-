import { View, Text } from 'react-native'
import React from 'react'
import classRoutineDetailsStyles from './ClassRoutinDetails.Styles'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'

export default function ClassRoutinDetails({ route  }) {
  const item = route.params
  
  console.log(item)
  return (
    <View style={classRoutineDetailsStyles.container}>
      <View style={classRoutineDetailsStyles.title}>
          <LogoWithTitle/>
      </View>
      <Text style={classRoutineDetailsStyles.textTitle}>{item.title}</Text>
      <View style={classRoutineDetailsStyles.rowText}>
        <Text style={{ fontSize:12, marginLeft:10, color:'#32C5F5' }}>Time</Text>
        <Text style={{ fontSize:12, marginLeft:45, color:'#32C5F5' }}>Subject</Text>
        <Text style={{ fontSize:12, marginLeft:40, color:'#32C5F5' }}>Room No</Text>
        <Text style={{ fontSize:12, marginLeft:50 ,color:'#32C5F5' }}>Period</Text>

      </View>
      {item.routine.length ===0? <Text style={classRoutineDetailsStyles.noscheduletext}>No schedule for the day</Text>: null}
      {item.routine.map((i) => 
      <View key={i.end_time+i.subject_name} style={classRoutineDetailsStyles.rowText}>
          <View style={{ width: 70 }}>
            <Text style={{ fontSize:9 }}>{i.start_time.slice(0,5)}- {i.end_time.slice(0,5)}</Text>
          </View>
          <View style={{ width:100 }}>
            <Text style={{ fontSize:9, marginLeft:10 }}>{i.subject_name}</Text>
          </View>
          <Text style={{ fontSize:9}}>{i.room_no}</Text>
          <Text style={{ fontSize:9, marginLeft: 40 }}>{i.period}</Text>

      </View>
      )}
    </View>
  )
}
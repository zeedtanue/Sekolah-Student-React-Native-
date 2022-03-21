import React, { useState } from 'react'
import { View , Text, ScrollView } from 'react-native'
import CardWithButton from '../../Components/Card/CardWithButton'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import liveClassStyles from './LiveClass.Styles'
const LiveClass = () => {
  const [liveClasses, setLiveClasses] = useState([
    {teacher: 'Atiar Rahman', class: 'Nine', subject: 'Science', date: 'Dec 23, 2022', time: '04:00 PM - 05:00 PM'},
    {teacher: 'Atiar Rahman', class: 'Nine', subject: 'Science', date: 'Dec 23, 2022', time: '04:00 PM - 05:00 PM'},
    {teacher: 'Atiar Rahman', class: 'Nine', subject: 'Science', date: 'Dec 23, 2022', time: '04:00 PM - 05:00 PM'},
    {teacher: 'Atiar Rahman', class: 'Nine', subject: 'Science', date: 'Dec 23, 2022', time: '04:00 PM - 05:00 PM'},
    {teacher: 'Atiar Rahman', class: 'Nine', subject: 'Science', date: 'Dec 23, 2022', time: '04:00 PM - 05:00 PM'},    
  ])
  return (


      <View style={liveClassStyles.container}>
        <View style={liveClassStyles.title}>
          <LogoWithTitle/>
        </View>
        <Text style={liveClassStyles.textTitle}>Live Class </Text>
        <ScrollView>
        { liveClasses.map((item) => 
          <View style={liveClassStyles.cardContainer}>
           <CardWithButton 
             title={"Teacher's Name:" + item.teacher}
             subtitle1={"Class:" + item.class}
             subtitle2={"Subject:"+ item.subject}
             footer1={"Date:"+ item.date}
             footer2={ item.time }
             icon="eye"
             buttonTitle="Join"
             />
          </View>
        )


        }
        </ScrollView>
        
      </View>
  )
}

export default LiveClass
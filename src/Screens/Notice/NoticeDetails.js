import { View, Text } from 'react-native'
import React from 'react'
import noticeDetailsStyles from './NoticeDetails.Styles'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'

export default function NoticeDetails({ route }) {
    const item = route.params
    console.log(item)
  return (
    <View style={noticeDetailsStyles.container}>
      <View style={noticeDetailsStyles.title}>
        <LogoWithTitle/>
      </View>
      <Text style={noticeDetailsStyles.textTitle}>Notice</Text>
      <View style={noticeDetailsStyles.detailsContainer}>
        <View style={noticeDetailsStyles.row}>
          <Text style={noticeDetailsStyles.titleText}>Title: {item.notice_title}</Text>
          <Text style={noticeDetailsStyles.text}>Date: {item.notice_date}</Text>

        </View> 
        <View style={noticeDetailsStyles.noticeContainer}>

        </View>
        <Text style={noticeDetailsStyles.text}>Notice for: All</Text>
        <View style={{ marginTop: 30 }}>
          {item.notice_message === ""? 
            <Text style={noticeDetailsStyles.text}>No description found</Text>:
            <Text style={noticeDetailsStyles.text}>{item.notice_message}</Text>

          
        }
        </View>

      </View>
    </View>
  )
}
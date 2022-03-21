import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import CardWithButton from '../../Components/Card/CardWithButton'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import { UserContext } from '../../Utilities/UserContext'
import noticeStyles from './Notice.Styles'

const Notice = ({ navigation }) => {
    
    const user =  useContext(UserContext)
    // const [allNotices, setAllNotices] = useState([])
    const [noticeList, setNoticeList] = useState([])
    const [notices, setNotices] = useState({
        title: 'Notice for school closure',
        date: '22 Jan 2022',
        details: 'Sekolah School and College will remain closed from 14 Nov 2021 to 16 Nov 2021 on account of SSC examination.\n \n \n \nPrincipal : Md. Asif Ali'
    })

    const noticeListFunc = async() => {
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
          


        // const form = {
        //     method: 'GET',
        //     header: {
        //         'Authorization': user.token
        //     },
        //     url: `${BASE_URL}student-noticeboard/${user.studentId}`
        // }
        // try {
          
        //   const {data} = await axios(form)
        //   console.log(data)
        // } catch (error) {
        //     console.log(error)
        //     console.log(form)
        // }
        
    } 

    useEffect(() => {
        // console.log(user.token)
        noticeListFunc()
    //   console.log(user.token)
    }, [])
    console.log(noticeList)
    
  return (
    <View style={noticeStyles.container}>
        <View style={noticeStyles.header}>
            <LogoWithTitle/>
        </View>
        <ScrollView style={noticeStyles.infoContainer}>
          <Text style={noticeStyles.title}>Notice</Text>
          <View style={noticeStyles.cardContainer}>
              {noticeList.map(item => 
              <CardWithButton 
                key={item.id}
                title={item.notice_title}
                subtitle1={item.notice_date}
                buttonTitle="View"
                icon="eye"
                onPress={()=>navigation.navigate('NoticeDetails',item)}
                />
                )}

          </View>
        </ScrollView>
    </View>
    )
}

export default Notice
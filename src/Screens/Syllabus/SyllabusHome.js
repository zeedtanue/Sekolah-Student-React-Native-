import React, { useState, useEffect, useContext } from 'react'
import { Text, View, Share, Linking } from 'react-native'
import CardWithButton from '../../Components/Card/CardWithButton'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import syllabusHomeStyles from './SyllabusHome.Styles'
import { UserContext } from '../../Utilities/UserContext'
import axios from 'axios'






const SyllabusHome = ({ navigation }) => {
  const onShare = async (subject) => {
    try {
      const result = await Share.share({
        
        url: `${user.base_url+subject.upload_file}`
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  
  // moonlightkindergarten.com/api/studentSyllabus/{id}
  const user = useContext(UserContext)
  const [syllabusList, setSyllabusList] = useState([])
  const getData = async() => {
    const config = {
      method: 'get',
      url: `${user.base_url}api/studentSyllabus/${user.studentId}`,
      headers: { 
        'Authorization': user.token
      }
    };
    try {
      const { data } = await axios(config)
      const { uploadContents } = data.data
      setSyllabusList(uploadContents)
      console.log(uploadContents)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getData()
  }, [])
  



  
  return (
    <View style={syllabusHomeStyles.container}>
        <View style={syllabusHomeStyles.title}>
          <LogoWithTitle/>
        </View>
        <Text style={syllabusHomeStyles.textTitle}>Syllabus</Text>
        {syllabusList.length ===0 ? 
         <Text style={syllabusHomeStyles.noDataText}>No data yet</Text>: null
        }
        {syllabusList.map(( item ) =>
        <View key={item.content_title+item.upload_date} style={syllabusHomeStyles.cardContainer}>
          <CardWithButton
            title={"Title: "+item.content_title}
            subtitle1={"Description: "+item.description}
            subtitle2={"Date: "+ item.upload_date}
            icon="eye"
            buttonTitle="View"
            // onPress={()=> navigation.navigate('SyllabusDetails', user.base_url+item.upload_file)}
            onPress={()=> Linking.openURL(user.base_url+item.upload_file)}
          />

        </View>
        )}
        
    </View>
    )
}

export default SyllabusHome
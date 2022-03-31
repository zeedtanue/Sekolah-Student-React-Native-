import React, { useState,useEffect, useContext } from 'react'
import { ScrollView, Text, View } from 'react-native'
import CardWithButton from '../../Components/Card/CardWithButton'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import classLectureStyles from './ClassLecture.Styles'
import { UserContext } from '../../Utilities/UserContext'
import axios from 'axios'
import { Spinner } from 'native-base'

const ClassLecture = ({ navigation }) => {
  const user = useContext(UserContext)
  const [classLecture, setClassLecture] = useState([])
  const [loading, setLoading] = useState(false)
  const getData = async()=>{

    const filterByClass = (content) => {
      return content.classes.class_name === user.className;
    }

    const config = {
      method: 'get',
      url: `${user.base_url}api/content-list/`,
      headers: { 
        'Authorization': user.token
      }
    };
    try {
      setLoading(true)
      const { data } = await axios(config)
      const { uploadContents } = data.data
      const result = uploadContents.filter(filterByClass)
      setClassLecture([...result])
      console.log(data)
      console.log(config)
      setLoading(false)
    } catch (error) {
      console.log(error)
      console.log(config)

      setLoading(false)
      
    }
  }

  useEffect(() => {
    getData()
  }, [])
  



  
  return (
    <View style={classLectureStyles.container}>
      <View style={classLectureStyles.title}>
        <LogoWithTitle/>
      </View>
      <Text style={classLectureStyles.textTitle}>
        Class lecture
      </Text>
      <ScrollView>
      {loading?
        <Spinner style={{ justifyContent:'center', alignSelf:'center' }} size="lg"/>:null  
    }
      {classLecture.map((item)=>
      <View style={classLectureStyles.cardContainer} key={item.id}>
      <CardWithButton 
        title={item.content_title}
        subtitle1={"Description: " +item.description}
        subtitle2={"Class: " +item.classes.class_name}
        footer1={"Section: " +item.sections.section_name}
        footer2={"Date: " +item.upload_date}
        icon="eye"
        buttonTitle="View"
        onPress={()=> navigation.navigate('LectureDetails',item)}
        />
    </View>
      )}
      </ScrollView>
      

    </View>
  )
}

export default ClassLecture
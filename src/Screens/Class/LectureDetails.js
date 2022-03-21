import React,{ useContext, useState } from 'react'
import { Button, Text } from 'react-native'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import lectureDetailsStyles from './LectureDetails.Styles'
import { UserContext } from '../../Utilities/UserContext'
import { useToast } from 'native-base'

const LectureDetails = ({ route, navigation }) => {
  const user= useContext(UserContext)
  const item = route.params
  const toast = useToast()
  const [uploadFile, setUploadFile] = useState( item.source_url!== ''? false : true)
  return (
      <View style={lectureDetailsStyles.container}>
        <View style={lectureDetailsStyles.title} >
          <LogoWithTitle/>
        </View>
        <Text style={lectureDetailsStyles.textTitle}>
        {item.content_title}
        </Text>
        <View style={lectureDetailsStyles.textContainer}>
          <Text style={lectureDetailsStyles.titleText}>Uploaded By: {item.users.full_name}</Text>
          <Text style={lectureDetailsStyles.text}>Class: {item.classes.class_name}</Text>
          <Text style={lectureDetailsStyles.text}>Section: {item.sections.section_name}</Text>
          <View style={lectureDetailsStyles.row}>
            <Text style={lectureDetailsStyles.text}>Title: {item.content_title}</Text>
            <Text style={lectureDetailsStyles.text}>Date: {item.upload_date}</Text>
          </View>
        </View>
        <View style={{ maxWidth: 300, alignSelf: 'center',marginBottom:20 }}>
          <Button 
          
            onPress={()=> {
              item.upload_file === '' ? 
                toast.show({description: 'no file found'}): 
                setUploadFile(uploadFile?false:true)
              item.source_url === '' ?
                toast.show({ description: 'No source video found'}):
                setUploadFile(true)
                
              }
          
          }
            title={uploadFile?'See Source':'Download Uploaded Files'}
          />
        </View>
        {item.source_url !== '' && uploadFile ===false? 
          <WebView style={lectureDetailsStyles.detailsContainer} source={{ uri: item.source_url }} />:
          <WebView style={lectureDetailsStyles.detailsContainer} source={{ uri: user.base_url+item.upload_file }} />

        }

        

      </View>
  )
}

export default LectureDetails
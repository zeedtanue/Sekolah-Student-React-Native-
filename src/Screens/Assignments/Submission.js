import { View, Text, Linking } from 'react-native'
import React, { useState,useContext } from 'react'
import submissionStyles from './Submission.Styles'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import { Button, TextArea,useToast } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { UserContext } from '../../Utilities/UserContext'
import * as DocumentPicker from 'expo-document-picker'

export default function Submission({ route}) {
  const toast = useToast()
  const item = route.params
  const user = useContext(UserContext)
  // console.log(item)
  const [fileName, setFileName] = useState('')
  const [uri, setUri] = useState()
  const [doc, setDoc] = useState()

  const pickFile = async() => {
    let result = await DocumentPicker.getDocumentAsync({})
    setFileName(result.name)
    setUri(result.uri)
    let nameParts = result.name.split('.')
    const fileType= nameParts[nameParts.length -1]
    // console.log()
    const fileToupload = {
      name: result.name,
      size: result.size,
      uri: result.uri,
      type: "application/"+ fileType
    }
    console.log(fileToupload)
    setDoc(fileToupload)
  }

  const postFile = async()=> {
    const url = user.base_url+'/api/student-upload-homework'
    const formData = new FormData()
    formData.append('files', doc)
    formData.append('user_id', user.studentId)
    formData.append('homework_id', item.id)
    // formData.append('files', doc)
    // formData.append('user_id',user.studentId )
    // formData,append('homework_id', item.id)
    // console.log(formData)
    const options = {
      method: 'POST',
      body: formData,
      headers: {

        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': user.token

      },
    }

    fetch(url, options)
      .then((response)=> {
        toast.show({
          title: 'File Uploaded',
          status: 'success',
          description: `Thank you for uploading your homework ${item.subject_name}` 
        })
        setFileName('')
      })
      .catch((error) => {
        toast.show({
          title: 'Upload Fail',
          status: 'error',
          description: `Something went wrong with a message:${error.message}`
        })
      });


  }

  const file= user.base_url+item.file
  const [note, setNote] = useState("")
  return (
    <View style={submissionStyles.container}>
      <View style={submissionStyles.title}>
        <LogoWithTitle/>
      </View>
      <Text style={submissionStyles.textTitle}>Submission</Text>
      {item?
      <View style={submissionStyles.details}>
        <View style={submissionStyles.rowDetails}>
          <Text style={submissionStyles.detailsText}>
            Subject: {item.subject_name}
          </Text>
          <Text style={submissionStyles.detailsText}>
            Teacher: {item.created_by}
          </Text>

        </View>
        <Text style={submissionStyles.detailsText}>
            Description: {item.description}
          </Text>
          <Text style={submissionStyles.detailsText}>
            Marks: {item.marks}
          </Text>
          <View style={submissionStyles.rowDetails}>
            <Text style={submissionStyles.detailsText}>
              Uploaded: {item.homework_date}
            </Text>
            <Text style={submissionStyles.detailsText}>
              Submission Date: {item.submission_name}
            </Text>
          </View>
          <View style={submissionStyles.rowDetails}>
            <Text style={submissionStyles.detailsText}>File: </Text>
            <Button onPress={()=> Linking.openURL(file)}>Click Here To See the file</Button>
          </View>
      </View>: null} 


      <View style={submissionStyles.row}> 
        <Text style={submissionStyles.text}>Submission</Text>
          
        <View >
        <Button
          style={submissionStyles.button}
          size="sm"
          variant="unstyled"
          leftIcon={<AntDesign name='cloudupload' size={20} color="#DADADA"/>}
          onPress={pickFile}
        >
          <Text style={{ color:"#DADADA", marginTop: -5 }}>
              Upload
          </Text>

        </Button>
        </View>
      </View>
      {fileName === ''? 
      <Text style={submissionStyles.warningText}>Upload valid files with .pdf .dox extension!</Text>
      :
      <Text style={submissionStyles.warningText}>{fileName}</Text>
      }
      
      <View style={{ marginRight:10 }}>
      <View style={submissionStyles.buttonRow}>
          <Button w={'20%'} style={{ marginRight: 10, backgroundColor: '#C4C4C4' }} variant="unstyled">
              <Text>Cancel</Text>
          </Button>
          <Button size="xs" w={'20%'} onPress={postFile}>
              <Text style={{ color: 'white' }}>Submit</Text>
          </Button>
      </View>
      </View>
    </View>
  )
}
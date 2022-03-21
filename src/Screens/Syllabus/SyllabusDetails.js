import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { WebView } from 'react-native-webview'
import syllabusDetailsStyles from './SyllabusDetails.Styles'
import { UserContext } from '../../Utilities/UserContext'



const SyllabusDetails = ({ route }) => {
  const user = useContext(UserContext)
  const item = route.params
  console.log(item) 
  return (
    <View style={syllabusDetailsStyles.container}>
      <WebView style={syllabusDetailsStyles.detailsContainer} source={{ uri: user.base_url+item }}/>
    </View>
  )
}

export default SyllabusDetails
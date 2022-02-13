import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import CardWithButton from '../../Components/Card/CardWithButton'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import noticeStyles from './Notice.Styles'

const Notice = () => {
  return (
    <View style={noticeStyles.container}>
        <View style={noticeStyles.header}>
            <LogoWithTitle/>
        </View>
        <ScrollView style={noticeStyles.infoContainer}>
          <Text style={noticeStyles.title}>Notice</Text>
          <View style={noticeStyles.cardContainer}>
              <CardWithButton 
                title="Some notice"
                subtitle1="duration" 
                subtitle2= "text"
                buttonTitle="Button"
                icon="eye"
                />
          </View>
        </ScrollView>
    </View>
    )
}

export default Notice
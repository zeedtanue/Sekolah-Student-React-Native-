import { View, Text } from 'react-native'
import React from 'react'
import accountsDetailsStyles from './AccountsDetails.Styles'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'

export default function AccountsDetails({ route }) {
  const item = route.params
  console.log(item)
  return (
    <View style={accountsDetailsStyles.container}>
      <View style={accountsDetailsStyles.title}>
        <LogoWithTitle/>
      </View>
      <Text style={accountsDetailsStyles.textTitle}>{item.title}</Text>
      <View style={accountsDetailsStyles.infoContainer}>
        <Text>No reciept found</Text>
      </View>
    </View>
  )
}
import { View } from 'native-base'
import React from 'react'
import { Text } from 'react-native'
import SmallButtonWithIcon from '../Buttons/SmallButtonWithIcon'
import cardWithButtonStyles from './CardWithButton.Styles'
import CardWithButtonStyles from './CardWithButton.Styles'

const CardWithButton = ({ onPress, 
    buttonTitle, 
    title, 
    subtitle1, 
    subtitle2, 
    subtitle3, 
    subtitle4, 
    subtitle5, 
    footer1, 
    footer2 ,
    icon
  }) => {
  return (
    <View style={CardWithButtonStyles.container}>  
    <View style={CardWithButtonStyles.row}>
        <View style={CardWithButtonStyles.contentContainer}>
            <Text style={cardWithButtonStyles.title}>{title}</Text>
            <Text style={cardWithButtonStyles.content}>{subtitle1}</Text>
            <Text style={cardWithButtonStyles.content}>{subtitle2}</Text>
        </View>
        <View style={cardWithButtonStyles.button}>
            <SmallButtonWithIcon onPress={ onPress } buttonTitle={buttonTitle} icon={icon} />
        </View>
    </View>
    <View style={cardWithButtonStyles.footer}>
      <Text style={cardWithButtonStyles.content}>{footer1}</Text>
      <Text style={cardWithButtonStyles.content}>{footer2}</Text>
    </View>
    </View>
  )
}

export default CardWithButton
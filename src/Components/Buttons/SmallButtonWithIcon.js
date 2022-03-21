import { Button, View } from 'native-base'
import React from 'react'
import { Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import smallButtonIconStyles from './SmallButtonWithIcon.Styles';

const SmallButtonWithIcon = ({ onPress, buttonTitle, icon }) => {
  return (
    <View>
        <Button 
          variant="solid" 
          leftIcon={ <AntDesign name={icon} size={15} color="white" />}
          onPress={ onPress }
          >
            <Text style={smallButtonIconStyles.text}>
                {buttonTitle}
            </Text>         
        </Button>
    </View>
  )
}

export default SmallButtonWithIcon
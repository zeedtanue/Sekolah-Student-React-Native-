import React from "react";
import { TouchableHighlight, View, Text } from 'react-native'
import smallTextStyles from "./SmallText.Styles";

const SmallText = ({ onPress, title}) => {
    return (
      <View style={smallTextStyles.container}>
          <Text styles={smallTextStyles.text} onPress={onPress}>{title} </Text>
      </View>
      
    )
}

export default SmallText

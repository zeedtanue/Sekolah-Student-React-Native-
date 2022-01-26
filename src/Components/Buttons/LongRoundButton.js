import { Button } from "native-base";
import React from "react";
import { View, Text, TouchableHighlight} from 'react-native'
import longButtonStyles from "./LongRoundButton.Styles";

const LongRoundButton = ({ onPress, title}) => {
    return (
      <View>
          <TouchableHighlight style={longButtonStyles.button} onPress={onPress}> 
              <Text style= {longButtonStyles.text}>{title}</Text>
          </TouchableHighlight>
      </View>
      
    )
}

export default LongRoundButton

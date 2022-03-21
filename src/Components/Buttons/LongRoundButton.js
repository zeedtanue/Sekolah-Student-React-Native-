import React from "react";
import { View, Text, TouchableHighlight} from 'react-native'
import longButtonStyles from "./LongRoundButton.Styles";
import { Spinner, HStack } from "native-base"; 
const LongRoundButton = ({ onPress, title, loading}) => {
    return (
      <View>
          <TouchableHighlight style={longButtonStyles.button} onPress={onPress}> 
            <HStack space={8} justifyContent="center">
              <Text style= {longButtonStyles.text}>{title}</Text>
              {loading? 
              <Spinner color="white" />
             :
             null 
            }
            </HStack>
          </TouchableHighlight>
      </View>
      
    )
}

export default LongRoundButton

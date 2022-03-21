import React from "react";
import { View, Text, TouchableHighlight, Image, TouchableOpacity} from 'react-native'
import rectangleButtonStyles from "./RectangleButton.Styles";

const RectangleButton = ({ onPress, title, icon, background}) => {
    return (
      <View>
          <TouchableOpacity style={rectangleButtonStyles.button} onPress={onPress}> 
            <View style={ background === 'primary' ? rectangleButtonStyles.primary : rectangleButtonStyles.secondary}>
              <Image source={icon} style={rectangleButtonStyles.icon}/>
              <Text style= { rectangleButtonStyles.text}>{title}</Text>
            </View>
          </TouchableOpacity>
      </View>
      
    )
}

export default RectangleButton

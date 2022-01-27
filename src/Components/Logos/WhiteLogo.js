import React from "react";
import whiteLogoStyles from "./WhiteLogo.Styles";
import { View, Image} from 'react-native'

const WhiteLogo = () => {
    return (
      <View style={whiteLogoStyles.logo}>
        <Image source={require('../../../assets/logo-white.png')} style={whiteLogoStyles.image} resizeMode="contain" />
      </View>
      
    )
}

export default WhiteLogo

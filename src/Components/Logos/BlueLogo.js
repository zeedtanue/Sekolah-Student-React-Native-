import React from "react";
import logoStyles from "./BlueLogo.Styles";
import { View, Image} from 'react-native'

const BlueLogo = () => {
    return (
      <View style={logoStyles.logo}>
        <Image source={require('../../../assets/logo-blue.png')} style={logoStyles.image} resizeMode="contain" />
      </View>
      
    )
}

export default BlueLogo

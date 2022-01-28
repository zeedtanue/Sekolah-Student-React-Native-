import React from "react";
import { View, Image} from 'react-native'
import blueSmallStyles from "./BlueSmall.Styles";

const BlueSmallLogo = () => {
    return (
      <View style={blueSmallStyles.logo}>
        <Image source={require('../../../assets/logo-blue.png')} style={blueSmallStyles.image} resizeMode="contain" />
      </View>
      
    )
}

export default BlueSmallLogo

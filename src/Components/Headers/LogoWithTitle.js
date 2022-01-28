import React from "react";
import { View, Text } from 'react-native'
import BlueSmallLogo from "../Logos/BlueSmall";
import logoWithTitleStyles from "./LogoWithTitle.Styles";

const LogoWithTitle = ({ title }) => {
    return (
      <View >
          <View style={ logoWithTitleStyles.header}>
              <View style={ logoWithTitleStyles.top}>
                <View style={logoWithTitleStyles.logo}>
                    <BlueSmallLogo/>
                </View>
                <Text style={logoWithTitleStyles.title}>{ title }</Text>
              </View>
            </View>
            <View>
            </View>
      </View>
      
    )
}

export default LogoWithTitle

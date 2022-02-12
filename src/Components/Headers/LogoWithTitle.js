import React, { useContext } from "react";
import { View, Text } from 'react-native'
import { UserContext } from "../../Utilities/UserContext";
import BlueSmallLogo from "../Logos/BlueSmall";
import logoWithTitleStyles from "./LogoWithTitle.Styles";

const LogoWithTitle = ({ title }) => {
  const user = useContext(UserContext)
    return (
      <View >
          <View style={ logoWithTitleStyles.header}>
              <View style={ logoWithTitleStyles.top}>
                <View style={logoWithTitleStyles.logo}>
                    <BlueSmallLogo/>
                </View>
                <Text style={logoWithTitleStyles.title}>{ user.schoolName }</Text>
              </View>
            </View>
            <View>
            </View>
      </View>
      
    )
}

export default LogoWithTitle

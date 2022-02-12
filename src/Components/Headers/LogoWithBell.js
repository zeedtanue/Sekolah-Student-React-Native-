import React, { useContext } from "react";
import { View, Text } from 'react-native'
import WhiteLogo from "../Logos/WhiteLogo";
import headerWithBellStyles from "./LogoWithBell.Styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { UserContext } from "../../Utilities/UserContext";

const LogoWithBell = ({ title }) => {
  const user = useContext(UserContext)
    return (
      <View >
          <View style={ headerWithBellStyles.header}>
              <View style={ headerWithBellStyles.top}>
                <View style={headerWithBellStyles.logo}>
                    <WhiteLogo/>
                </View>
                <View style={headerWithBellStyles.icon}>
                    <FontAwesome5 name="bell" size={26} color="black" />
                </View>
              </View>
              <Text style={headerWithBellStyles.title}>{ user.schoolName }</Text>
            </View>
            <View>
            </View>
      </View>
      
    )
}

export default LogoWithBell

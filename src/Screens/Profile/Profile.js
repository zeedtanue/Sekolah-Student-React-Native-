import React, { useContext } from "react";
import { View, Text, ScrollView} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import profileStyles from "./Profile.Styles";
import LogoWithTitle from "../../Components/Headers/LogoWithTitle";
import { Avatar } from "native-base";
import { AuthContext } from "../../Utilities/AuthContext";
import { UserContext } from "../../Utilities/UserContext";
const Profile = () => {

    const { logout } = useContext(AuthContext)
    const user = useContext(UserContext)
    return (
      <View style={profileStyles.container}>
      <StatusBar style="auto" />
      <View style={profileStyles.header}>
        <LogoWithTitle title="Silver Line Grammar School"/>
      </View>
      <ScrollView style={profileStyles.infoContainer}>
        <Text style={profileStyles.title}> Profile </Text>
        {user.image !=='' ?
          <Avatar 
            bg="#ffffff" 
            alignSelf="center" 
            size="xl" 
            source={require('../../../assets/avatar-logo.png')}
            style={profileStyles.avatar}>
          </Avatar>:
          <Avatar 
            bg="#ffffff" 
            alignSelf="center" 
            size="xl" 
            source={{uri: user.image}}
            style={profileStyles.avatar}>
          </Avatar>

      }
        
        <View style={profileStyles.divider}></View>
        
        
        <View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Name: </Text>
            <Text style={profileStyles.text}> {user.fullName}</Text>
        </View>
        <View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Roll No: </Text>
            <Text style={profileStyles.text}> {user.rollNo}</Text>
        </View><View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Class: </Text>
            <Text style={profileStyles.text}>{user.className}</Text>
        </View><View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Section: </Text>
            <Text style={profileStyles.text}>{user.sectionName}</Text>
        </View><View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Shift: </Text>
            <Text style={profileStyles.text}>none</Text>
        </View><View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Gurdian Name: </Text>
            <Text style={profileStyles.text}>{user.guardianName}</Text>
        </View><View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Gurdian Mobile No: </Text>
            <Text style={profileStyles.text}>{user.gurdianMobileNumber}</Text>
        </View>
        <View style={profileStyles.list}>
          <Text style={profileStyles.subTitle} onPress={()=> logout()}>Logout</Text>
        </View>

      </ScrollView>
      </View>
      
    )
}

export default Profile

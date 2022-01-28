import React from "react";
import { View, Text} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import profileStyles from "./Profile.Styles";
import LogoWithTitle from "../../Components/Headers/LogoWithTitle";
import { Avatar } from "native-base";

const Profile = () => {

    

    return (
      <View style={profileStyles.container}>
      <StatusBar style="auto" />
      <View style={profileStyles.header}>
        <LogoWithTitle title="Silver Line Grammar School"/>
      </View>
      <View style={profileStyles.infoContainer}>
        <Text style={profileStyles.title}> Profile </Text>
        <Avatar 
          bg="#ffffff" 
          alignSelf="center" 
          size="2xl" 
          source={{
            uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          }}
          style={profileStyles.avatar}>
        </Avatar>
        <View style={profileStyles.divider}></View>
        
        
        <View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Name: </Text>
            <Text style={profileStyles.text}> Cutest Retriever Ever</Text>
        </View>
        <View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Roll No: </Text>
            <Text style={profileStyles.text}> 3078</Text>
        </View><View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Class: </Text>
            <Text style={profileStyles.text}>Nine</Text>
        </View><View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Section: </Text>
            <Text style={profileStyles.text}>A</Text>
        </View><View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Shift: </Text>
            <Text style={profileStyles.text}>Morning</Text>
        </View><View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Gurdian Name: </Text>
            <Text style={profileStyles.text}>Cutest Retriever Ever Sr</Text>
        </View><View style={profileStyles.list}> 
            <Text style={profileStyles.subTitle}>Gurdian Mobile No: </Text>
            <Text style={profileStyles.text}>01961758542</Text>
        </View>
      </View>

      </View>
      
    )
}

export default Profile

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import LogoWithTitle from "../../Components/Headers/LogoWithTitle";
import messageHomeStyles from "./MessageHome.Styles";

const MessageHome = ({ navigation }) => {

    const arrayOfReciever = [
      {
        name: "Admin", value: "AD"
      },
      {
        name: "Teacher", value: "TC"
      },
      {
          name: "Accountant", value: "AC"
      },
      {
          name: "Librarian", value: "LB",
      },
      {  
        name: "Recieptionisht", value: "RP"
      }
    ]

    return (
      <View style={messageHomeStyles.container}>
        <StatusBar style="auto"/>
        <View style={messageHomeStyles.header}>
          <LogoWithTitle title="Silver Linning Grammar School" />
        </View>
        <View>
          <Text style={messageHomeStyles.title}>Message</Text>
          

        </View>
        <View style={messageHomeStyles.infoContainer}>
            <ScrollView>
                <View>
                <Text>Upocoming</Text>

                    {/* <Select 
                      minWidth="200" 
                      placeholder="--Reciever Type*--"
                      _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size={5}/>
                      }} mt="1" >
                        {/* {arrayOfReciever.forEach((item, key) => {
                            <Select.Item label={item.name} value={item.value} key={key}/>
                        })} *
                    </Select> */}
                </View>
            </ScrollView>
        </View>
      </View>
    )
    
}

export default MessageHome
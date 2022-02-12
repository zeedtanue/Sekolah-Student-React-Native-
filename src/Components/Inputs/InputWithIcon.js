import { StatusBar } from 'expo-status-bar';
import { Icon } from 'native-base';
import { View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import inputIconStyles from './InputWithIcon.Styles';


const InputWithIcon = ({ icon, placeholder, onChange, securityTextEntry, value, onChangeText })=> {
  return (
    <View style={inputIconStyles.container}>
      <View style={inputIconStyles.inputSection} >
        <Ionicons style={inputIconStyles.icon} name={icon} size={24} color="black" />
        <TextInput style={inputIconStyles.input}
          onChange={onChange}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#000000'
          secureTextEntry={securityTextEntry}
        />
      </View>
    </View>
    );
  }
export default InputWithIcon
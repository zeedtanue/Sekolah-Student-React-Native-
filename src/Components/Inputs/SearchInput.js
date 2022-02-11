import { View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import inputIconStyles from './InputWithIcon.Styles';
import searchInputStyles from './SearchInput.Styles';


const SearchInput = ({ icon, placeholder, onChange, securityTextEntry, value })=> {
  return (
    <View style={ searchInputStyles.container }>
      <View style={ searchInputStyles.inputSection } >
        <Ionicons style={ searchInputStyles.icon } name="search" size={24} color="black" />
        <TextInput style={ searchInputStyles.input }
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#000000'
          secureTextEntry={securityTextEntry}
        />
      </View>
    </View>
    );
  }
export default SearchInput
import { StatusBar } from 'expo-status-bar';
import { Icon, Input } from 'native-base';
import { Text, View, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles  from './Login.Styles'
export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../../assets/logo-blue.png')} style={styles.image} resizeMode="contain" />
      </View>
      

    
      <TextInput
        variant="underlined"
        placeholder='Username'
        />
      <Text style={styles.text}>Shikkha appsssss</Text>
      <StatusBar style="auto" />
    </View>
  );
}

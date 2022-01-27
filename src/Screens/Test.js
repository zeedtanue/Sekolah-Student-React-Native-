import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import TopBlue from '../Components/Backgrounds/TopBlue'
import WhiteLogo from '../Components/Logos/WhiteLogo';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Login() {
  return (
    <View>
        <TopBlue>
            <View>
                <View>
                    <WhiteLogo/>
                </View>

                <View>
                    <FontAwesome5 name="bell" size={24} color="black" />
                </View>
            </View>
            <WhiteLogo/>
            <WhiteLogo/>
            <Text>Hi</Text>
        </TopBlue>
    </View>
  );
}

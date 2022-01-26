import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer:{
      marginBottom: hp('8%')
    },
    inputContainer:{
      marginBottom: hp('10%')
    },
    buttonContainer: {
      marginBottom: hp('1%')
    },
    smallTextContainer: {
      marginBottom: hp('5%')
    }
    
  });
  export default loginStyles


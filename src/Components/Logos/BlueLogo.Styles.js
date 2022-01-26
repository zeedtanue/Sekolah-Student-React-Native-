import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const logoStyles = StyleSheet.create({
    logo: {
      marginBottom: hp('6%'),
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    image: {
        height: hp('25%'),
        width: wp('45%')
    }
  });
  export default logoStyles


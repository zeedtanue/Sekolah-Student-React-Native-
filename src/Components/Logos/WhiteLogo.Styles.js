import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const WhiteLogoStyles = StyleSheet.create({
    logo: {
      marginBottom: hp('6%'),
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    image: {
        height: hp('10%'),
        width: wp('25%')
    }
  });
  export default WhiteLogoStyles


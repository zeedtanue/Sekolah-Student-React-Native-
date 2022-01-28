import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const blueSmallStyles = StyleSheet.create({
    logo: {
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    image: {
        height: hp('10%'),
        width: wp('15%')
    }
  });
  export default blueSmallStyles


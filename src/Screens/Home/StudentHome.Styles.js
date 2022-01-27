import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const studentHomeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        marginTop: hp('5%'),
        position: 'absolute',
        left: 0,
        top: 0,
    },
    logo: {
        marginLeft: wp('3%')
    },
    icon: {
        marginLeft: wp('60%'),
        marginRight: wp('4%'),
        marginTop: hp('3%')
    }
    
  });
  export default studentHomeStyles


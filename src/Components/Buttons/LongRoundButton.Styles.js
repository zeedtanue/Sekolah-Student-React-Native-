import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const longButtonStyles = StyleSheet.create({
    button: {
        justifyContent:'center',
        alignItems: 'center',
        width: wp('60%'),
        borderRadius: wp('15%'),
        backgroundColor: '#32C5F5',
        height: hp('5%'),
    },
    text: {
        fontSize: hp('2%')
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    }
  });
  export default longButtonStyles


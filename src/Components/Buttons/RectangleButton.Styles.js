import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const rectangleButtonStyles = StyleSheet.create({
    button: {
        justifyContent:'center',
        alignItems: 'center',
        width: hp('20%'),
        height: hp('20%'),
        borderWidth: 1,
        borderRadius: wp('8%'),
        backgroundColor: '#ffffff',
    },
    primary: {
        justifyContent:'center',
        alignItems: 'center',
        width: hp('17%'),
        height: hp('17%'),
        borderRadius: wp('8%'),
        backgroundColor: '#FFDC7B'
    },
    secondary: {
        justifyContent:'center',
        alignItems: 'center',
        width: hp('17%'),
        height: hp('17%'),
        borderRadius: wp('8%'),
        backgroundColor: '#B2FFA6'
    },
    icon: {

    },
    text: {
        paddingTop: hp('2%'),
        fontWeight: 'bold',
        fontSize: hp('2%')
    }
  });
  export default rectangleButtonStyles


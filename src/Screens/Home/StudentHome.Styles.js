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
    },
    notice: {
        fontSize: hp('2.5%'),
        alignSelf: 'center',
        color: '#FF0000',
        paddingLeft: wp('5%'),
        paddingRight: wp('5%')
    },
    scrollContainer: {
        width: wp('100%'),
        height: hp('70%'),
        position: 'absolute',
        top: hp('33%')
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: hp('2%')
    }
    
  });
  export default studentHomeStyles


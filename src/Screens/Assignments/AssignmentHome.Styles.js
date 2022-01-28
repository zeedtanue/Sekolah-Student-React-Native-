import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const assignmentHomeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
        height: hp('66%'),
        position: 'absolute',
        top: hp('33%')
    },
    buttonContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        padding: hp('2%'),
        paddingTop: hp('15%')
    }
    
  });
  export default assignmentHomeStyles


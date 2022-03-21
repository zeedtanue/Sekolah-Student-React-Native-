import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const messageHomeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        marginTop: hp('4%'),
        position: 'absolute',
        top: 0,
        left: 0
    },
    infoContainer: {
        height: hp('80%'),
        width: wp('90%'),
        top: hp('15%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
        alignItems:'center'
    },
    title: {
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: hp('3%'),
        top:hp('9%'),
        right: wp('20%')
    },
    
  });
  export default messageHomeStyles


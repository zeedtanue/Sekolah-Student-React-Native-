import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const noticeStyles = StyleSheet.create({
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
        height: hp('75%'),
        width: wp('95%'),
        top: hp('14%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%')       
    },
    title: {
        position: 'absolute',
        fontWeight: 'bold',
        marginLeft: -wp('3%'),
        fontSize: hp('3%'),
    },
    cardContainer: {
        marginTop: hp('5%'),
        alignSelf: 'center'
    }
    
  });
  export default noticeStyles
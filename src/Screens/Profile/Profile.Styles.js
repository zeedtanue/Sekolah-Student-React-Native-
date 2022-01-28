import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const profileStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        marginTop: hp('8%'),
        position: 'absolute',
        top: 0,
        left: 0
    },
    
    infoContainer: {
        height: hp('80%'),
        width: wp('90%'),
        top: hp('8%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%')       
    },
    title: {
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    avatar: {
        marginTop: hp('12%'),
        paddingBottom: hp('3%')
    },
    divider: {
        paddingTop: hp('7%')
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: hp('4%')

    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: hp('2.3%')
    },
    text: {
        fontSize: hp('2.3%')
    }
    
  });
  export default profileStyles


import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const headerWithBellStyles = StyleSheet.create({
  header: {
    marginTop: -hp('45%'),
    position: 'absolute',
    left: 0,
    top: 0,
    },
  top: {
    flexDirection: 'row'
  },
  logo: {
    marginLeft: wp('3%')
  },
  icon: {
    marginLeft: wp('60%'),
    marginRight: wp('4%'),
    marginTop: hp('3%')
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: hp('3%'),
    marginTop: -hp('4%'),
    paddingLeft: wp('3%'),
    paddingRight: wp('3%')
  }
  });
  export default headerWithBellStyles


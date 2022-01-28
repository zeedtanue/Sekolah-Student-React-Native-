import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const logoWithTitleStyles = StyleSheet.create({
  header: {
    marginTop: -hp('42%'),
    position: 'absolute',
    left: 0,
    top: 0,
    },
  top: {
    flexDirection: 'row'
  },
  logo: {
    marginLeft: wp('4%')
  },
  
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: hp('2.7%'),
    marginTop: -hp('1%'),
    paddingLeft: wp('2%'),
    paddingRight: wp('2%')
  }
  });
  export default logoWithTitleStyles


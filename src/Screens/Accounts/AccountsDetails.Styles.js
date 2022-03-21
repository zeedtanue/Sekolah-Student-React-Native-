import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const accountsDetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      marginTop: hp('5%')
    },
    infoContainer: {
      height: hp('80%'),
      width: wp('90%'),
      top: hp('15%'),
      paddingLeft: wp('5%'),
      paddingRight: wp('5%'),
      alignItems:'center'
  },
    textTitle: {
      fontWeight: 'bold',
      fontSize: hp('3%'),
      marginTop: hp('10%'),
      marginLeft: wp('5%')
    },
    cardContainer: {
      padding: wp('4%')
  },
  text: {
      paddingLeft: wp('5%')
  }
    
  });
  export default accountsDetailsStyles


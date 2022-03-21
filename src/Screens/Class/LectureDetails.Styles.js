import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const lectureDetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      marginTop: hp('5%')
    },
    textTitle: {
      fontWeight: 'bold',
      fontSize: hp('3%'),
      marginTop: hp('10%'),
      marginLeft: wp('5%')
    },
    textContainer: {
      margin: hp('3%'),
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: hp('1.6')    
    },
    text: {
      fontSize: hp('1.6'),
      paddingTop: hp('1.2%')    
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: wp('10%')
    },
    detailsContainer: {
      height: hp('50%'),
      borderWidth: .2,
      marginRight: wp('2%'),
      marginLeft: wp('2%'),
      borderRadius: 10
    }
    
  });
  export default lectureDetailsStyles


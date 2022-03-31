import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const taskStyles = StyleSheet.create({
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
    cardContainer: {
      marginTop: hp('3%'),
      alignSelf: 'center'
  },
  emptyArray: {
    paddingTop:30,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: hp('2%')
  }
    
  });
  export default taskStyles


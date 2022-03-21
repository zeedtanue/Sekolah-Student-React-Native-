import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const classRoutineStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
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
    contentContainer: {
      margin: wp('5%')
    },
    buttonRed: {
      borderWidth: 0.2,
      borderRadius: 10,
      marginTop: 10,
      backgroundColor: '#FFF2F2',
      padding: hp('1.2%'),
    },
    buttonGreen: {
      borderWidth: 0.2,
      borderRadius: 10,
      marginTop: 10,
      backgroundColor: '#EAF9FE',
      padding: hp('1.2%'),
    },
    buttonText: {
      fontSize: hp('1.8%'),
      paddingLeft: wp('5%')
    }
    
  });
export default classRoutineStyles


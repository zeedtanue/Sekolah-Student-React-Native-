import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const classRoutineDetailsStyles = StyleSheet.create({
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
    tableContainer: {
      flex: 1,
      padding: 16, 
      paddingTop: 30, 
      backgroundColor: '#fff'
    },
    rowText: {
      flexDirection: 'row',
      borderWidth: 0.2,
      borderRadius: 10,
      padding:10,
      marginTop:hp('2%'),
      marginLeft: wp('4%'),
      marginRight: wp('4%'),
      height: 40,
      margin: 6,
      fontSize: hp('1%') 
    },
    text:{
        fontSize: hp(1.2)
    },
    noscheduletext:{
      fontSize: hp(2),
      alignSelf: 'center',
      paddingTop: hp('5%')
  }
  });
  export default classRoutineDetailsStyles


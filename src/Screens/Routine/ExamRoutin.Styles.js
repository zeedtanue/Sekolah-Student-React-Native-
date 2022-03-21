import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const examRoutineStyles = StyleSheet.create({
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

    tableHead: {
      height: 40, 
      backgroundColor: '#f1f8ff'
    },
    tableHeadText: {
      color: '#32C5F5',
      margin: 6,
      fontSize: hp('1%'),
      fontWeight: 'bold' 

    },
    rowText: {
      margin: 6,
      fontSize: hp('1%') 
    }
  });
  export default examRoutineStyles


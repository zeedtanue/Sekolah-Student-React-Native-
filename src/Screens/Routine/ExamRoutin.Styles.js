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
    },
    buttonList:{
      borderWidth: 0.2,
      borderRadius: 10,
      marginTop: 10,
      backgroundColor: '#FFF2F2',
      padding: hp('1.2%'),
    },
    buttonText: {
      fontSize: hp('1.8%'),
      paddingLeft: wp('5%')
    }
  });
  export default examRoutineStyles


import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const attendanceHomeStyles = StyleSheet.create({
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
      monthBox: {
          alignSelf:'center',
          flexDirection:'row'
      },
      yearText:{
          fontWeight: 'bold',
          marginLeft: wp('5%'),
          marginTop:hp('1%'),
          fontSize: hp('2.2%')
      },
      text: {
          alignSelf:'center',
          paddingTop:hp('2%'),
          color: '#a5bcb6'
      },
      textHead: {
          fontSize: hp('2%'),
          paddingLeft: wp('10%'),
          fontWeight: 'bold'
      }
    
  });
  export default attendanceHomeStyles


import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const noticeDetailsStyles = StyleSheet.create({
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
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      detailsContainer: {
        height: hp('50%'),
        borderWidth: .2,
        marginTop:hp('4%'),
        marginRight: wp('2%'),
        marginLeft: wp('2%'),
        padding: hp('2%'),
        borderRadius: 10
      },
      noticeContainer:{
          marginTop: hp('2%')
      }
    
  });
  export default noticeDetailsStyles
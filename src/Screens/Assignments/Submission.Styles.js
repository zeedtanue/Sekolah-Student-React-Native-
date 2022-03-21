import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const submissionStyles = StyleSheet.create({
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
    button: {
      borderWidth:.2,
      width: wp('35%'),
      height:hp('4%')

    },
    text: {
        fontWeight: 'bold',
        color: '#32C5F5',
        paddingTop: hp('.8%'),
        fontSize: hp('2%')
    },
    row: {
        flexDirection: 'row',
        marginLeft: wp('5%'),
        marginTop: hp('4%'),
        width: wp('62%'),
        justifyContent: 'space-between'
    },
    warningText: {
        fontSize: hp('1%'),
        color: '#32C5F5',
        marginLeft: wp('30%'),
        marginTop: 5
    },
    noteContainer: {
        flexDirection: 'row',
        marginLeft: wp('18%'),
        marginTop: 20,
        justifyContent: 'space-between',
        width:wp('75%')
    },
    buttonRow: {
        marginTop: wp('4%'),
        
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
    details: {
      display: 'flex',
      borderWidth:.2,
      padding: hp('1%'),
      margin: hp('1%'),
      borderRadius:20
    },
    detailsText:{
      fontSize: hp('1.5%'),
      padding: 10
    },
    rowDetails: {
      flexDirection:'row',
      justifyContent: 'space-between'
    }
    
  });
  export default submissionStyles


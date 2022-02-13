import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const cardWithButtonStyles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderRadius: wp('3%'),
        width:wp('94%'),
        minHeight: hp('10%'),
        padding: wp('3%')
    },
    title: {
        fontSize: hp('2%'),
        fontWeight: 'bold'
    },
    content: {
        fontSize: hp('1.8%'),
        paddingTop: hp('2%')
    },
    contentContainer: {
        width: wp('65%')
    },
    row: {
        flexDirection: 'row'
    },
    button: {
        alignSelf: 'center'
    },
    footer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingRight:wp('15%')
    }
    
  });
  export default cardWithButtonStyles


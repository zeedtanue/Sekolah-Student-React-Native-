import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const smallButtonIconStyles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderRadius: wp('3%'),
        width:wp('94%'),
        minHeight: hp('10%'),
        padding: wp('3%')
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:hp('1.5%'),
        marginLeft: -wp('1.5%')
    }
   
    
  });
  export default smallButtonIconStyles


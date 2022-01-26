import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const inputIconStyles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: hp('8%'),
        width: wp('60%'),

    },
    inputSection: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth:2,
        marginBottom:hp('3%')
    },
    icon: {
        padding: wp('2%'),
    },
    input: {
        backgroundColor: '#fff',
        color: '#424242',
        fontSize: hp('2%'),
        
    }
  });
  export default inputIconStyles


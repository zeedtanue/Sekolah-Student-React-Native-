import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const smallTextStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        maxHeight: hp('2.5%'),
    },
    text: {
        fontSize: hp('1%')
    }
  });
  export default smallTextStyles


import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const topBlueStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: wp('100%'),
        height: hp('30%'),
        justifyContent: "center"
    }
  });
  export default topBlueStyles


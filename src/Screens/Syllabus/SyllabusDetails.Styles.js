import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const syllabusDetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
   
    detailsContainer: {
      height: hp('80%'),
      borderWidth: .2,
    }
    
  });
  export default syllabusDetailsStyles


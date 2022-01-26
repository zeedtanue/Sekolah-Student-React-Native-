import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      marginBottom: hp('20%')
    },
    text: {
      fontSize:hp('2.3%'),
    },
    textInput: {
      width: wp('70%'),
      borderBottomWidth: 1,
      justifyContent: 'center',
      alignSelf:'center',
      borderBottomColor: '#000000'
    },
    searchSection: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
  },
  searchIcon: {
      marginTop: 30,
      marginLeft:60,
      marginRight:-30,
      padding: 10,
  },
  input: {
      flex: 1,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      
  },
  });
  export default styles


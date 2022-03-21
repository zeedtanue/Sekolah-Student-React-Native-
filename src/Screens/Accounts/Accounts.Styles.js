import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const accountstyles = StyleSheet.create({
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
      padding: wp('4%')
  },
  feesContainer:{
    borderWidth: 0.2,
    borderRadius: 10,
    padding: hp('1.5%'),
    marginTop: 10,


  },
  row: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  due: {
    color: 'red',
    minWidth: wp('38%')

  },
  feesTitle: {
    fontSize: hp('1.8%'),
    fontWeight: 'bold'
  },
  column: {
    minWidth: wp('38%')
  },
  
  text: {
      paddingLeft: wp('5%')
  }
    
  });
  export default accountstyles


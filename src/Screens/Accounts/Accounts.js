import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import accountstyles from './Accounts.Styles'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import { UserContext } from '../../Utilities/UserContext'
import axios from 'axios'
import { Spinner } from 'native-base'


export default function Accounts({navigation}) {
  const [loading, setLoading] = useState(true)

  const user = useContext(UserContext)
  const [currency, setCurrency] = useState('')
  const [fees, setFees] = useState([])
  // moonlightkindergarten.com/api/fees-collect-student-wise/{id}
  const getData = async() => {
    const config = {
      method: 'get',
      url: `${user.base_url}api/fees-collect-student-wise/${user.studentId}`,
      headers: { 
        'Authorization': user.token
      }
    };
    try {
      const { data } = await axios(config)
      const { currency_symbol, fees } = data.data
      setCurrency(currency_symbol.currency_symbol)
      setFees( [...fees])
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }  
  useEffect(() => {
    getData()
  }, [])
  
 console.log(fees)

  return (
    <View style={accountstyles.container}>
      <View style={accountstyles.title}>
          <LogoWithTitle/>

      </View>
      <Text style={accountstyles.textTitle}>Accounts</Text>
      <View style={accountstyles.cardContainer}>
      
        {fees.length === 0 ? <Text>No accounts info yet</Text>: null}
        {loading? 
            <Spinner style={{ justifyContent:'center', alignSelf:'center' }} size="lg"/>:null  
           }
        {fees.map(item=>
        <View key={item.dees_type_id+item.due_date} style={accountstyles.feesContainer}>
          <View style={accountstyles.row}>
            <Text style={accountstyles.feesTitle}>{item.fees_name}</Text>
            <Text style={accountstyles.due}> Due date: {item.due_date} </Text>
          </View>
          <View style={accountstyles.row}>
            <View>
              <Text>Amount: {currency}{item.amount}</Text>
              <Text>Paid: {currency}{item.paid}</Text>
            </View>


            <View style={accountstyles.column}>
              <Text>Balance: {currency}{item.balance}</Text>
              <Text style={accountstyles.due}>Fine: {currency}{item.fine}</Text>
            </View>   

          </View>
        </View>
          
          
          )}

      </View>
    </View>
  )
}
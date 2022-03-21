import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import LogoWithTitle from '../../Components/Headers/LogoWithTitle'
import { Table, Row, Rows } from 'react-native-table-component'

import examRoutineStyles from './ExamRoutin.Styles'
const ExamRoutine = () => {
  const [tableData, setTableData] = useState({
    tableHead: ['Class', 'Exam Term', 'Subject', 'Date', 'Time', 'Room\nNo'],
      tableData: [
        ['One', 'Special Exam', 'Physical Education', '2022-01-07', '10:30 AM - 11:30 AM', '114' ],
        ['One', 'Special Exam', 'Physical Education', '2022-01-07', '10:30 AM - 11:30 AM', '114' ],
        ['One', 'Special Exam', 'Physical Education', '2022-01-07', '10:30 AM - 11:30 AM', '114' ],
        ['One', 'Special Exam', 'Physical Education', '2022-01-07', '10:30 AM - 11:30 AM', '114' ],
        ['One', 'Special Exam', 'Physical Education', '2022-01-07', '10:30 AM - 11:30 AM', '114' ],
        ['One', 'Special Exam', 'Physical Education', '2022-01-07', '10:30 AM - 11:30 AM', '114' ],
        ['One', 'Special Exam', 'Physical Education', '2022-01-07', '10:30 AM - 11:30 AM', '114' ],
        ['One', 'Special Exam', 'Physical Education', '2022-01-07', '10:30 AM - 11:30 AM', '114' ],
        ['One', 'Special Exam', 'Physical Education', '2022-01-07', '10:30 AM - 11:30 AM', '114' ]
      ]
  })
  return (
      <View style={examRoutineStyles.container}>
        <View style={examRoutineStyles.title}>
          <LogoWithTitle/>
        </View>

        <Text style={examRoutineStyles.textTitle}> 
          Exam Routine
        </Text>
        <ScrollView >
        <View style={examRoutineStyles.tableContainer}> 
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={tableData.tableHead} style={examRoutineStyles.tableHead} textStyle={examRoutineStyles.tableHeadText}/>
            <Rows data={tableData.tableData} textStyle={examRoutineStyles.rowText}/>
          </Table>

        </View>
        </ScrollView>
      </View>
  )
}

export default ExamRoutine
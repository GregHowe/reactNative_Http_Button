import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import HttpExample  from './http_example.js'

const App = () => {
   return (
      <View style = {styles.container}>
         <View>
            <HttpExample />
         </View>
      <View>
         <TouchableOpacity>
            <Text style = {styles.text}>
               Button
            </Text>
         </TouchableOpacity>
      </View>
   </View>
   )
}
export default App

const styles = StyleSheet.create ({
   container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 600
   },
   text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'red'
   }
})
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
   return (
      <View>
         <Text  style = {styles.myState}>
            {props.myState}
         </Text>
      </View>
   )
}
export default PresentationalComponent

const styles = StyleSheet.create ({
   myState: {
      backgroundColor: 'green',
      marginTop: 180,
      textAlign: 'center',
      color: 'red',
      fontWeight: 'bold',
      fontSize: 70,
      alignItems: 'center',
      justifyContent: 'center',
   }
})
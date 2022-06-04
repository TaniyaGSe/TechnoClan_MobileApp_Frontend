import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';



export default function Expense_Claim({navigation}){

    return(
      <View style={styles.body}>
        <View style={styles.button}>
        <Button onPress={()=>navigation.navigate('Add a new claim')} 
         color="#e63909"
         title="Add a new expense claim"/>
        <Button onPress={()=>navigation.navigate('View previous claims')} 
         color="#e63909"
         title="View previous claims"/>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    body:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#000000',
    },
    text:{
      fontSize:40,
      fontWeight:'bold',
      margin:10,
      color:'#ffffff',
    }
  })


  

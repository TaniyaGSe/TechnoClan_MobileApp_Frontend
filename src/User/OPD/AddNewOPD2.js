
import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
} from 'react-native';

import { useRoute } from '@react-navigation/native';


export default function Add_OPD2(){
  const route= useRoute();
    return(
      <View style={styles.body}>
        <Text style={styles.text}>Description: {route.params.description}</Text>
        <Text style={styles.text}>Receipt No: {route.params.receiptNo}</Text>
        <Text style={styles.text}>Amount: {route.params.amount}</Text>

        <Button style={styles.button}
         title='Submit'
         color="#e63909"
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    body:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    input1:{
      fontSize:20,
    },
    text:{
      fontSize:15,
    }
  })
  
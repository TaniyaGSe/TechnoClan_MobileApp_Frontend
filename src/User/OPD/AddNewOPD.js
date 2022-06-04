import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
} from 'react-native';

const Stack = createStackNavigator();

export default function Add_OPD(){
    return(
      <View style={styles.body}>
      </View>
    )
  }

  const styles = StyleSheet.create({
    body:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    text:{
      fontSize:40,
      fontWeight:'bold',
      margin:10,
    }
  })
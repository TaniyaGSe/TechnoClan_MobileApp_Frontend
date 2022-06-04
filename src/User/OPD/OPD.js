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

export default function OPD({navigation}){
    return(
      <View style={styles.body}>
        <Pressable onPress={()=>navigation.navigate('Claim a new OPD')} style={({pressed})=>({backgroundColor:pressed ? '#a8620d':'#e63909'})}>
           <Text style={styles.text}>
             Add a new expense claim
           </Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('View claimed OPDs')} style={({pressed})=>({backgroundColor:pressed ? '#a8620d':'#e63909'})}>
           <Text style={styles.text}>
             View previous claims
           </Text>
        </Pressable>
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
  
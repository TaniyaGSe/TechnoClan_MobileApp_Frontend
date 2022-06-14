
import * as React from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function NotificationScreen({navigation}) {
  
    const onPressHandler = () => {
      navigation.replace('Screen-B');
    }
   
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Notification</Text>

      </View>
    );
  }

  const styles = StyleSheet.create({
    body : {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    }
    
  
  })




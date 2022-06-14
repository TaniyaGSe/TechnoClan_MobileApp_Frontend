import * as React from 'react';
import { View, Text, StyleSheet,Pressable,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function OPDClaim({navigation}) {
  
    const onPressHandler = () => {
      navigation.replace('Home');
    }
  
    return (
      <View style={styles.body}>
        <Text style={styles.text}>OPD Claim</Text>
        <Pressable
          onPress={onPressHandler}
          style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
        >
          <Text style={styles.text}>
            Go Back
          </Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    body : {
      flex: 1, 
      alignItems: 'center', 
      //justifyContent: 'center',
      backgroundColor: '#352D3A',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      color: '#FA6106'
    },
    view:{
        margin:10,
      },
      input: {
        width: 200,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,   
      },
      
  })
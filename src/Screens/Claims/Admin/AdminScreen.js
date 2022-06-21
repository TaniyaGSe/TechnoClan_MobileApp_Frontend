import * as React from 'react';
import { View, Text, StyleSheet,Pressable,TextInput,Button } from 'react-native';


export default function AdminScreen({navigation}) {
  
    const onPressHandler = () => {
      navigation.replace('Home');
    }
  
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Admin Screen</Text>
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
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      color: '#000'
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
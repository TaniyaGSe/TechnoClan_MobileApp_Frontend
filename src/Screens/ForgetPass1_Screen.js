import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import CustomButton from '../Components/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';

export default function LoginScreen({navigation}) {
  
  const {colors} = useTheme();

  const onPressHandler = () => {
    navigation.navigate('Screen-Login');
  }

  const onPressHandlerSubmit = () => {
      navigation.navigate('Screen-ForgetPass2');
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      
        <View style={styles.header}>
            <Text style={styles.topic}>Reset Password</Text>
        </View>

        <View style={styles.footer}>
        
            <View style={styles.row}>
                <View style={styles.col}>
                    <View style={styles.action2}>
                    <Text>E-mail</Text>
                    </View>

                    <View style={styles.action2}>
                    <Text>Mobile</Text>
                    </View>

                </View>

                <View style={styles.col}>
                    <View style={styles.action2}>
                        <CustomButton onPressFunction={onPressHandlerSubmit} title="Send" />
                    </View>
                    <View style={styles.action2}>
                        <CustomButton onPressFunction={onPressHandlerSubmit} title="Re-Send" />
                    </View>

                    
                </View>

            </View>
        



        <View style={styles.action}>
            <TextInput
                style={[styles.textInput,{
                color: colors.text,
              },
            ]}
            placeholder="Enter Verification Code Here"
            //onChangeText={(password) => this.setState({password}) }
            onChangeText={password => setPassword}
            underlineColorAndroid="transparent"
            secureTextEntry
          />
        </View>

        <View style={styles.action2}>
            <CustomButton onPressFunction={onPressHandlerSubmit} title="Submit" />
        </View>

        <Text>Already Have an account?</Text>
        <View style={styles.action2}>
            <TouchableOpacity onPress={onPressHandler}>
            <Text style={{color: '#009387', marginTop: -10}}>Sign In</Text>
            </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    alignItems: 'center',
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  topic: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    color: '#fff',
    textAlign: 'center',
  },

  col:{
    flex:1,
    flexDirection:'column'
  },

  row:{
    flex:1,
    flexDirection:'row'
  },

  text: {
    color: '#000',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  
  action2: {
    margin:20,
    flexDirection: 'row',


  },
  textInput: {
    
    marginTop: -50,
    paddingLeft: 10,
    color: '#05375a',
    alignItems:'center'
  },

});

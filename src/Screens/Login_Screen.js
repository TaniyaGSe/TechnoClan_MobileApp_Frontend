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

  const onPressHandlerSignUp = () => {
    navigation.navigate('Screen-SignUp');
  };

  const onPressHandlerSignIn = () => {
    navigation.navigate('Screen-Welcome');
  };

  const onPressHandlerForgetPass = () => {
    navigation.navigate('Screen-ForgetPass1');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.topic}>Persistent System Lanka (PVT) LTD</Text>
      </View>

      <View style={styles.footer}>
        
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={30} />

          <TextInput
            placeholder="User Name"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            //onChangeText={(username) => (setName) }
            //onChangeText={(username) => this.setState({username}) }
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="lock" color={colors.text} size={30} />

          <TextInput
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            placeholder="Password"
            //onChangeText={(password) => this.setState({password}) }
            onChangeText={password => setPassword}
            underlineColorAndroid="transparent"
            secureTextEntry
          />
        </View>
        <View style={styles.action2}>
            <CustomButton onPressFunction={onPressHandlerSignIn} title="Sign In" />
        </View>

        <View style={styles.action2}>
            <TouchableOpacity onPress={onPressHandlerForgetPass}>
            <Text style={{color: '#009387', marginTop: 15}}>
                Forgot password?
            </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.action2}>
            <CustomButton onPressFunction={onPressHandlerSignUp} title="Sign Up" />
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

  text_footer: {
    color: '#05375a',
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
    margin:10,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  // errorMsg: {
  //     color: '#FF0000',
  //     fontSize: 14,
  // },
  // button: {
  //     alignItems: 'center',
  //     marginTop: 50
  // },
});

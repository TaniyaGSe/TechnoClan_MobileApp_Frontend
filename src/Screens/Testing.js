import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function LoginScreen({navigation}) {
  let [name, setName] = useState('');
  let [password, setPassword] = useState('');

  useEffect(() => {
    
    SignIn();
  }, []);

// componentDidMount(){ //Run before the render function. This check whether the user already logged in
//     this._loadInitialState().done();
// }

// _loadInitialState = async () => {
//     var value = await AsyncStorage.getItem('user');
//     if(value !== null){
//         this.props.navigation.navigate('Welcome_Screen');
//     }
// }

  const onPressHandlerSignUp = () => {
    navigation.navigate('Screen-SignUp');
  };

  const SignIn = () => {
     //alert('test');
    fetch('http://10.0.2.2:8080/api/getUsers', {
      method: 'POST',
      headers: {
        Accept: 'applicaion/json',
        'Content-Type': 'applicaion/json',
      },
      body: JSON.stringify({
        username: setName, //We send our previously declared username(this.state.username) to JSON format
        password: setPassword,
      }),
    })
    .then((response) => response.JSON() ) //We are gonna handle the response as JSON
    .then((res) => {
        if(res.success === true){ //If the user exist
            AsyncStorage.setItem('user',res.user);
            navigation.navigate('Welcome_Screen');
        }
        else {
            alert(res.message);
        }
    })
  };

  const onPressHandlerForgetPass = () => {
    navigation.navigate('Screen-ForgetPass1');
  };

  return (
    <View style={styles.body}>
      <View style={styles.view}>
        <Text style={styles.topic}>Persistent System Lanka (PVT) LTD</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.text}>Expense Claim Management System</Text>
      </View>

      <View style={styles.view}>
        <TextInput style={styles.input} placeholder="User Name" />
      </View>

      <View style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      {/* 
    <View style={styles.view}>
      <Text>Remember me</Text>
    </View> */}

      <View style={styles.view}>
        <Pressable
          onPress={SignIn}
          style={({pressed}) => ({
            backgroundColor: pressed ? '#ddd' : '#fff',
          })}>
          <Text style={styles.text}>Sign In</Text>
        </Pressable>
      </View>

      <View style={styles.view}>
        <Pressable
          onPress={onPressHandlerForgetPass}
          style={({pressed}) => ({
            backgroundColor: pressed ? '#ddd' : '#fff0',
          })}>
          <Text style={styles.text}>Forgot Password?</Text>
        </Pressable>
      </View>

      <View style={styles.view}>
        <View>
          <Text style={styles.text}>Haven’t signed up yet?</Text>
        </View>

        <View style={styles.view}>
          <Pressable
            onPress={onPressHandlerSignUp}
            style={({pressed}) => ({
              backgroundColor: pressed ? '#ddd' : '#fff',
            })}>
            <Text style={styles.text}>Sign Up</Text>
          </Pressable>
        </View>
      </View>

      {/* <View style={styles.view}>      
            <Pressable
                onPress={onPressHandlerSignUp}
                style={({ pressed }) => ({ 
                    backgroundColor: pressed ? '#ddd' : '#fff' 
                })}
            >
                <Text style={styles.text}>Sign Up</Text>
            </Pressable>
        </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#352D3A',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: '#FA6106',
  },
  topic: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    color: '#FA6106',
  },
  view: {
    margin: 10,
  },

  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },

  btn: {
    //alignSelf : 'stretch',
    backgroundColor: '#124863',
    padding: 20,
    alignItems: 'center',
  },
});

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

    const [data,setData] = useState("");

    const [name,setName] = useState("")
    //const [lastName,setLastName] = useState("")
    const [id,setId] = useState("")
    const [email,setEmail] = useState("")  
    const [phoneN,setPhoneN] = useState("")
    const [password,setPassword] = useState("")

    const onPressHandler = () => {
             
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'http://10.0.2.2:8080/api/getUsers',
        headers: { }
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data);
        })
        
        .catch(function (error) {
        console.log(error);
        });

        
    }

    const onPressHandler2 = () => {
        
      if(isNaN(id)){
            alert(" Id should be a number");
            //this.setState({ email: text })
            return false;
            // Its not a number
          }

          var axios = require('axios');
          var data = JSON.stringify({
                "id":id,
                "name":name,
                "email":email,
                "phoneN":phoneN,
                "password":password
          });

          var config = {
            method: 'post',
            url: 'http://10.0.2.2:8080/api/saveUser',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };

          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });

        //   const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
        //   useValidation({
        //     state: { name, email, id, password, 
        //      confirmPassword 
        //     },
        //   });
      
        // const _onPressButton = () => {
        //   validate({
        //     name: { minlength: 3, maxlength: 7, required: true },
        //     email: { email: true },
        //     id: { numbers: true },
        //     confirmPassword: { equalPassword: Password },
        //   });
        // };
     
    }
  
  const {colors} = useTheme();

  // const onPressHandlerFinish= () => {
  //   navigation.navigate('Screen-Login');
  // };

  const onPressHandlerSignIn = () => {
    navigation.navigate('Screen-Login');
  };



  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.topic}>Sign Up</Text>
      </View>

      <View style={styles.footer}>
        
        <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={30} />
            <TextInput placeholder="Name"
                style={[styles.textInput,{color: colors.text,},]}
                underlineColorAndroid="transparent"
                value={data.name}
                onChangeText={setName}
                
          />
        </View>

        {/* <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={30} />
            <TextInput placeholder="Last Name"
                style={[styles.textInput,{color: colors.text,},]}
                underlineColorAndroid="transparent"   
                value={setLastName}      
            />
        </View> */}

        <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={30} />
            <TextInput placeholder="Employee ID"
                style={[styles.textInput,{color: colors.text,},]}
                underlineColorAndroid="transparent" 
                value={data.id}   
                onChangeText={setId}     
            />
        </View> 

        <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={30} />
            <TextInput placeholder="E-mail"
                style={[styles.textInput,{color: colors.text,},]}
                underlineColorAndroid="transparent"  
                value={data.email}   
                onChangeText={setEmail}    
            />
                {/* {isFieldInError('email') &&
                getErrorsInField('email').map(errorMessage => (
                  <Text>{errorMessage}</Text>
                ))} */}
        </View>

        <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={30} />
            <TextInput placeholder="Phone Number"
                style={[styles.textInput,{color: colors.text,},]}
                underlineColorAndroid="transparent"
                value={data.phoneN}    
                onChangeText={setPhoneN}  
                keyboardType='phone-pad'   
            />
        </View>

        <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={30} />
            <TextInput placeholder="Password"
                style={[styles.textInput,{color: colors.text,},]}
                underlineColorAndroid="transparent" 
                value={data.password}  
                onChangeText={setPassword}    
                secureTextEntry  
            />
        </View>




{/* <TextInput
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
      />
      {isFieldInError('confirmPassword') &&
        getErrorsInField('confirmPassword').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))} */}



        <View style={styles.action2}>
            <CustomButton onPressFunction={onPressHandler2} title="Finish" />
        </View>

        

        <Text>Already Have an account?</Text>
        <View style={styles.action2}>
            <TouchableOpacity onPress={onPressHandlerSignIn}>
            <Text style={{color: '#009387', marginTop: -10}}>Sign In</Text>
            </TouchableOpacity>
        </View>

{/* 
        <TouchableOpacity onPress={onPressHandler2}>
            <Text style={{color: '#009387', marginTop: 15}}>
                Save details
            </Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={onPressHandler}>
            <Text style={{color: '#009387', marginTop: 15}}>
                Get details
            </Text>
        </TouchableOpacity>

      </View>
    </View>
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
    flex: 5,
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

});

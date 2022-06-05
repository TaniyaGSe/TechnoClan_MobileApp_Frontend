import { createStackNavigator } from '@react-navigation/stack';
import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//import { RadioButton } from 'react-native-paper';
import RadioForm from 'react-native-simple-radio-button';
import { PushNotification } from 'react-native-push-notification';

export default function AddNewE_Claim({navigation}){
  const [chosenOption, setChosenOption] = useState('apple'); //will store our current user options
  const options = [
    { label: 'Billable', value: 'Billable' },
    { label: 'Non-billable', value: 'Non-billable' },
    { label: 'Fixed-price', value: 'Fixed-price' },
  ]; 

  const[bu_dept,setBu_Dept] = useState('');


    return(
      <View style={styles.body}>
        <Text style ={styles.text}>
          BU/Dept
        </Text>
        <TextInput style={styles.input} 
        value={bu_dept}
        placeholder='e.g.Accelerite BU'
        maxLength={30}
        onChangeText={(value)=>setBu_Dept(value)}
        />
        <Text style ={styles.text}>
          Project
        </Text>
        <TextInput style={styles.input} 
        placeholder='e.g.Telia 2'
        maxLength={30}
        />
        <Text style ={styles.text}>
          Extension No
        </Text>
        <TextInput style={styles.input} 
        maxLength={30}
        />
        <Text style ={styles.text}>
          Customer
        </Text>
        <TextInput style={styles.input} 
        maxLength={30}
        />
        <Text style ={styles.text}>
          Location
        </Text>
        <TextInput style={styles.input} 
        maxLength={30}
        />
        <Text style ={styles.text}>
          Billability
        </Text>
        
        <RadioForm 
        radio_props={options}
        initial={0} 
        onPress={(value) => {
          setChosenOption(value);
        }} 
        />

        <Button onPress={()=>navigation.navigate('Next')} 
        title="Next"
        color="#e63909"
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    body:{
      flex:1,
    },
    text:{
      color:'#000000',
      fontSize:15,
      fontWeight:'bold',
      margin:10,
    },
    input:{
      height:40,
      width:200,
      borderWidth:1,
      borderColor:'#555',
      borderRadius:5,
      textAlign:'center',
    },
  })
  
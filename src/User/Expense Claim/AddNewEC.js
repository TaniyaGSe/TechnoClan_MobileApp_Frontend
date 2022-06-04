import { createStackNavigator } from '@react-navigation/stack';
import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import RadioForm from 'react-native-simple-radio-button';

export default function AddNewE_Claim({navigation}){

  const [chosenOption, setChosenOption] = useState('apple'); //will store our current user options
  const options = [
    { label: 'Billable', value: 'Billable'},
    { label: 'Non-billable', value: 'Non-billable' },
    { label: 'Fixed-price', value: 'Fixed-price' },
  ]; 
    return(
      <View style={styles.body}>
        <Text style ={styles.text}>
          BU/Dept
        </Text>
        <TextInput style={styles.input} 
        placeholder='e.g.Accelerite BU'
        maxLength={30}
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
        
        <View style={styles.radio}>
        <RadioForm 
        radio_props={options}
        initial={0} 
        />
        </View>

        <Button onPress={()=>navigation.navigate('Next')} 
        title = "Next"
        color="#e63909"
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    body:{
      flex:1,
      backgroundColor:'#ffffff'
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
      borderWidth:5,
      borderColor:'#555',
      borderRadius:5,
      textAlign:'center',
    },
    radio:{
      backgroundColor:'#ffffff',
    }
  })
  
import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function Expense_Claim({navigation}){

  const Tab = createBottomTabNavigator();
    return(
      <View style={styles.body}>
         <TouchableOpacity style={styles.button} 
        onPress={()=>{
          navigation.navigate('Add a new claim');
        }}
        >
          <FontAwesome5 style={styles.plus}
          name={'plus'}
          size={30}
          color={'#ffffff'}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const styles = StyleSheet.create({
    body:{
      flex:1,
    },
    button:{
      width:60,
      height:60,
      borderRadius:30,
      backgroundColor:'#e63909',
      justifyContent:'center',
      position:'absolute',
      bottom:25,
      right:5,
      elevation:5,
    },
    plus:{
      left:15,
    },
    input1:{
      fontSize:20,

    }
  })


  

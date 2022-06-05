import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default function OPD({navigation}){

    return(
      <View style={styles.body}>
         <TouchableOpacity style={styles.button} 
        onPress={()=>{
          navigation.navigate('Claim a new OPD');
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
      justifyContent:'center',
      alignItems:'center',
    },
    text:{
      fontSize:40,
      fontWeight:'bold',
      margin:10,
      color:'#000000',
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
    }
  })


  

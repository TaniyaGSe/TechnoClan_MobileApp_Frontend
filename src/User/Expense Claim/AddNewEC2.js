import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function AddNewE_Claim2(){

  const route= useRoute();

    return(
      <View style={styles.body}>
        <Text style={styles.text}>BU/Dept:{route.params.buDept}</Text>
        <Text style={styles.text}>Project:{route.params.project}</Text>
        <Text style={styles.text}>Extension No:{route.params.extensionNo}</Text>
        <Text style={styles.text}>Extension No:{route.params.extensionNo}</Text>
        <Text style={styles.text}>Customer:{route.params.customer}</Text>
        <Text style={styles.text}>Location:{route.params.location}</Text>
        <Text style={styles.text}>Particulars:{route.params.particulars}</Text>
        <Text style={styles.text}>Amount:{route.params.amount}</Text>
        <Text style={styles.text}>Payment will be made only against valid original bills and receipt</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    body:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    plus:{
      left:15,
    },
    input1:{
      fontSize:20,
    },
    text:{
      fontSize:15,
    }
  })


  

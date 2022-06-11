import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



export default function Add_OPD({navigation}){

  const [description,setDescriptiont] = useState("");
  const [ receiptNo,setReceiptNo]=useState("");
  const [ amount,setAmount]=useState("");

    return(
      <View style={styles.body}>
        <TextInput style={styles.input}
        placeholder='Description'
        value={description}
        onChangeText={(text)=>setDescriptiont(text)}
        />
        <TextInput style={styles.input}
        placeholder='Receipt Not'
        value={receiptNo}
        onChangeText={(text)=>setReceiptNo(text)}
        />
         <TextInput style={styles.input}
        placeholder='Amount'
        value={amount}
        onChangeText={(text)=>setAmount(text)}
        />
        <Button
        title='Submit'
        onPress={()=>navigation.navigate('OPD')}
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    body:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
  })
import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  Text,
  View,
  Button,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; 

export default function AddNewE_Claim(){

  const DissmissKeyboard = ({children}) =>(
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  const [description,setDescriptiont] = useState("");
  const [ receiptNo,setReceiptNo]=useState("");
  const [ amount,setAmount]=useState("");

  const navigation=useNavigation();

  const next = () => {
    navigation.navigate("View the new OPD",{
      description:description,
      receiptNo:receiptNo,
      amount:amount,
    })
  }

    return(
      <DissmissKeyboard>
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
        <Button style={styles.button}
         title='Next'
         onPress={next}
         color="#e63909"
        />
      </View>
      </DissmissKeyboard>
    );
  }

  const styles = StyleSheet.create({
  
    input:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  })
  
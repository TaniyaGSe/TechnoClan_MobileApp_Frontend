
import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; 

export default function Add_OPD2(){
  const [description,setDescriptiont] = useState("");
  const [ receipt_no,setReceiptNo]=useState("");
  const [ opd_amount,setAmount]=useState("");

  const navigation=useNavigation();

  async function updateOPD() {
    if(isNaN(receipt_no)){
      alert(" Not a number");
      //this.setState({ email: text })
      return false;
      // Its not a number
    }

  try {
    fetch('http://10.0.2.2:8080/api/v2/opd/updateOPD', {
   method: 'PUT',
   headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
            },
   body: JSON.stringify({
      description,
      receipt_no,
      opd_amount,
  })

})

     alert('OPD claimed successfully')
        navigation.navigate('OPD' )
      } catch (error) {
           console.error(error);
      }

}


    return(
      <View style={styles.body}>
      <View style={styles.header}>
      <Text style={styles.text}>
      Edit OPD
      </Text>
      </View>
      <View style={styles.container}>

      <TextInput  onChangeText={newText => setDescriptiont(newText)} style={styles.input}
      placeholder='Description'
      value={description}
      />
      <TextInput  onChangeText={newText => setReceiptNo(newText)} style={styles.input}
      placeholder='Receipt No'
      value={receipt_no}
      />
      <TextInput  onChangeText={newText => setAmount(newText)} style={styles.input}
      placeholder='Amount'
      value={opd_amount}
      />
      <TouchableOpacity style={styles.background}
        onPress={updateOPD}>
      <Text style={styles.textB}>
        Submit
      </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  input:{
    height: 40,
    width:200,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    // marginHorizontal:150,
    marginLeft: '25%',
    marginBottom: 10,
    backgroundColor:'#ffffff',
  },
  background:{
    backgroundColor: '#ffffff',
    marginBottom:20,
    marginTop:40,
    // margin:0,
    marginLeft: '25%',
    width:'50%',
    height: '10%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:60,
  },
  textB:{
    fontSize:16,
    marginBottom: 10,
    marginTop: 1,
    marginStart:1,
    // textAlign:'left',
    marginLeft:10,
    color:'#000000',
    fontWeight:'bold',
  },
  body:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor:'#ffffff',
  },
  header:{
    flex:1,
    backgroundColor:'#ffffff',
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    margin:30,
    color:'#000000',
  },
  container:{
    flex:5,
    backgroundColor:'#F89880',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
})

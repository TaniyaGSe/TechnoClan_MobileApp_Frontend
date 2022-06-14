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


export default function AddNew_RAndR(){

  const [extension_no,setExtension_not] = useState("");
  const [customer ,setCustomer]=useState("");
  const [ location,setLocation]=useState("");
  const [ particulars,setParticulars]=useState("");
  const [ amount,setAmount]=useState("");


  const navigation=useNavigation();

  async function claimRAndR() {
    if(isNaN(extension_no),(amount)){
      alert(" Not a number");
      //this.setState({ email: text })
      return false;
      // Its not a number
    }

  try {
    fetch('http://10.0.2.2:8080/api/v3/randr/saveRAndR', {
   method: 'POST',
   headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
            },
   body: JSON.stringify({
      extension_no,
      customer,
      location,
      particulars,
      amount,
  })

})

     alert('R And R claimed successfully')
        navigation.navigate('Reward And Recognition' )
      } catch (error) {
           console.error(error);
      }

}
    return(
      <View style={styles.body}>
        <View style={styles.header}>
        <Text style={styles.text}>
        Add a new R&R
        </Text>
        </View>
        <View style={styles.container}>

        <TextInput  onChangeText={newText => setExtension_not(newText)} style={styles.input}
        placeholder='Extension no'
        value={extension_no}
        />  
        <TextInput  onChangeText={newText => setCustomer(newText)} style={styles.input}
        placeholder='Customer'
        value={customer}
        />
        <TextInput  onChangeText={newText => setLocation(newText)} style={styles.input}
        placeholder='LocationAmount'
        value={location}
        />
        <TextInput  onChangeText={newText => setParticulars(newText)} style={styles.input}
        placeholder='Particulars'
        value={particulars}
        />
        <TextInput  onChangeText={newText => setAmount(newText)} style={styles.input}
        placeholder='Amount'
        value={amount}
        />
        <TouchableOpacity style={styles.background}
          onPress={claimRAndR} >
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
      padding: 10,
      borderRadius:10,
      marginLeft: '25%',
      marginBottom: 10,
      backgroundColor:'#F89880',
    },
    background:{
      backgroundColor: '#F89880',
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
      backgroundColor:'#F89880',
    },
    header:{
      flex:1,
      backgroundColor:'#F89880',
    },
    text:{
      fontSize:30,
      fontWeight:'bold',
      margin:30,
      color:'#000000',
    },
    container:{
      flex:3,
      backgroundColor:'#000000',
      // borderTopLeftRadius: 60,
      // borderTopRightRadius: 60,
    },
  })
  
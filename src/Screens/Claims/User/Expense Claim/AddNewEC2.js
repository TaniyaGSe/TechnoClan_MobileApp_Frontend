import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Picker} from "@react-native-picker/picker";
import { useNavigation } from '@react-navigation/native'; 
import axios from "axios";

export default function AddNewE_Claim2(){
  
  const [emp_id,setEmp_id] = useState("");
  const [bu_dept,setBu_Dept] = useState("");
  const [ project,setProject]=useState("");
  const [ extension_No,setExtension_No]=useState("");
  const [ customer,setCustomer]=useState("");
  const [ location,setLocation]=useState("");
  const [ particulars,setParticulars]=useState("");
  const [ amount,setAmount]=useState("");

  const [Enable , setEnable]  = useState("Billability");

  const navigation=useNavigation();

  async function updateClaim() {
    var axios = require('axios');
  
    var config = {
      method: 'put',
      url: 'http://10.0.2.2:8080/api/v1/expenseclaim/updateExpenseClaim/6',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // emp_id,
        bu_dept,
        project,
        extension_No,
        customer,
        location,
        particulars,
        amount,
      })
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      alert("Updated successfully!")
      navigation.navigate(Expense_Claim)
    
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log('ggggg');
  }
  
    return(
      <View style={styles.body}>
        <View style={styles.header}>
        <Text style={styles.text}>
        Edit Expense claim
        </Text>
        </View>
        <View style={styles.container}>
        {/* <TextInput  onChangeText={newText => setEmp_id(newText)} style={styles.input}
        placeholder='Expense ID'
        value={emp_id}
        /> */}
        <TextInput  onChangeText={newText => setBu_Dept(newText)} style={styles.input}
        placeholder='BU/Dept'
        value={bu_dept}
        />
        <TextInput  onChangeText={newText => setProject(newText)} style={styles.input}
        placeholder='Project'
        value={project}
        />
        <TextInput  onChangeText={newText => setExtension_No(newText)} style={styles.input}
        placeholder='Extension No'
        value={extension_No}
        />
        <TextInput  onChangeText={newText => setCustomer(newText)} style={styles.input}
        placeholder='Customer'
        value={customer}
        />
        <TextInput  onChangeText={newText => setLocation(newText)} style={styles.input}
        placeholder='Location'
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
        {/* <Picker style={styles.picker}
          selectedValue={Enable}
          mode={"dialog"}
          onValueChange={(itemValue) => setEnable(itemValue)}
         >
        <Picker.Item label="Billable" value="Bill" />
        <Picker.Item label="Non-Billable" value="Non" />
        <Picker.Item label="Fixed-Price" value="Fixed" />
        </Picker> */}
      
        <TouchableOpacity style={styles.background}
          onPress={updateClaim}>
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
      borderRadius:10,
      padding: 10,
      // marginHorizontal:150,
      marginLeft: '25%',
      marginBottom: 10,
      backgroundColor:'#F89880',
    },
    background:{
      backgroundColor: '#F89880',
      marginBottom:20,
      marginTop:20,
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
      flex:5,
      backgroundColor:'#000000',
      marginTop:10,
    },
    picker:{
      height:1,
      width:200,
      marginLeft: '25%',
      marginBottom: 10,
      backgroundColor:'#F89880',
    },
  
  })
  
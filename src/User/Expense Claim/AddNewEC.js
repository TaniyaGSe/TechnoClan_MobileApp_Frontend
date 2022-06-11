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
import {Picker} from "@react-native-picker/picker";
import { useNavigation } from '@react-navigation/native'; 

export default function AddNewE_Claim(){

  const DissmissKeyboard = ({children}) =>(
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  const [bu_dept,setBu_Dept] = useState("");
  const [ project,setProject]=useState("");
  const [ extension_No,setExtension_No]=useState("");
  const [ customer,setCustomer]=useState("");
  const [ location,setLocation]=useState("");
  const [ particulars,setParticulars]=useState("");
  const [ amount,setAmount]=useState("");

  const [Enable , setEnable]  = useState("Billability");

  const navigation=useNavigation();

  const submit = () => {
    navigation.navigate("View the new claim",{
      buDept:bu_dept,
      project:project,
      extensionNo:extension_No,
      customer:customer,
      location:location,
      particulars:particulars,
      amount:amount,
    })
  }

    return(
      <DissmissKeyboard>
      <View style={styles.body}>
        <TextInput style={styles.input}
        placeholder='BU/Dept'
        value={bu_dept}
        onChangeText={(text)=>setBu_Dept(text)}
        />
        <TextInput style={styles.input}
        placeholder='Project'
        value={project}
        onChangeText={(text)=>setProject(text)}
        />
        <TextInput style={styles.input}
        placeholder='Extension No'
        value={extension_No}
        onChangeText={(text)=>setExtension_No(text)}
        />
        <TextInput style={styles.input}
        placeholder='Customer'
        value={customer}
        onChangeText={(text)=>setCustomer(text)}
        />
        <TextInput style={styles.input}
        placeholder='Location'
        value={location}
        onChangeText={(text)=>setLocation(text)}
        />
        <TextInput style={styles.input}
        placeholder='Particulars'
        value={particulars}
        onChangeText={(text)=>setParticulars(text)}
        />
        <TextInput style={styles.input}
        placeholder='Amount'
        value={amount}
        onChangeText={(text)=>setAmount(text)}
        />
        <Picker
          selectedValue={Enable}
          style={{ height: 50, width: 200 }}
          mode={"dialog"}
          onValueChange={(itemValue) => setEnable(itemValue)}
         >
        <Picker.Item label="Billable" value="Bill" />
        <Picker.Item label="Non-Billable" value="Non" />
        <Picker.Item label="Fixed-Price" value="Fixed" />
        </Picker>
      
        <Button style={styles.button}
         title='Next'
         onPress={submit}
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
  
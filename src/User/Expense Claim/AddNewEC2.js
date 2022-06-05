import React ,{useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function AddNewE_Claim2({navigation}){

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  
    return(
      <View style={styles.body}>
        <Text style ={styles.text}>
          Date
        </Text>

        <Button title="Show Date Picker" color='#e63909' onPress={showDatePicker} />
       <DateTimePickerModal 
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
       />

        <Text style ={styles.text}>
          Particulars
        </Text>
        <TextInput style={styles.input} 
        maxLength={30}
        />
        <Text style ={styles.text}>
          Amount(Rs..)
        </Text>
        <TextInput style={styles.input} 
        maxLength={30}
        />
        <Text style ={styles.text}>
          Upload Bill
        </Text>
        <TextInput style={styles.input} 
        maxLength={30}
        />
        <Text style ={styles.text}>
        Payment will be made only against valid original bills and receipt
        </Text>
        <Button onPress={()=>navigation.navigate('Back')} 
         color="#e63909"
         title="Back"
        />
        <Button onPress={()=>navigation.navigate('Submit')} 
         color="#e63909"
         title="Submit"
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    body:{
      flex:1,
    },
    text:{
      color:'#000000',
      fontSize:20,
      fontWeight:'bold',
      margin:10,
    },
    input:{
      height:40,
      width:200,
      borderWidth:1,
      borderColor:'#555',
      borderRadius:5,
      textAlign:'center',
    },
  })
  
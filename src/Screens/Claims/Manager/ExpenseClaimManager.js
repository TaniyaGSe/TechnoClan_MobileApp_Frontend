import React , { useEffect, useState } from 'react'; //usestate for hooks
import {
  StyleSheet,
  View,
  TouchableOpacity,
  RefreshControl,
  Keyboard,
  Burron,
  Alert,
  TextInput,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { ActivityIndicator, FlatList, Text,} from 'react-native';


export default function Expense_Claim_Manager({navigation}){

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getExpenseClaims = async  () => {
    var axios = require('axios');
    
     var config = {
     method: 'get',
     url: 'http://10.0.2.2:8080/api/v1/expenseclaim/getExpenseClaims',
     headers: { 
    'Content-Type': 'application/json'
    },
    
   };

    axios(config).then(function (response) {
    console.log(JSON.stringify(response.data));
    setData(response.data);
     // setData(response.data);
  }).catch(function (error) {
  console.log(error);
    });
    }

    Alert.alert(
      'Alert',
      'Do you want to accept the expense claim',
      [
        {text: 'cancel'},
        {text: 'NO'},
        {text: 'Yes'},
    // {text: 'YES', onPress: () =>this.props.navigation.navigate('Expense Claim', {statusec:'Accpeted'})},
      ]
    );
    useEffect(() => {
    getExpenseClaims();
     }, []);

    return(
      
      <View style={styles.body}>
      <View style={styles.header}>
      <Text style={styles.text}>
        Claimed Expenses
      </Text>
      </View>
      <View style={styles.container}>
        <FlatList       
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.row}
              onPress={getExpenseClaims}>
              <FontAwesome5
              name={'money-check-alt'}
              size={30}
              color={'#ffffff'}
            />
            <Text style={styles.rowText}>
            Expense ID:{item.emp_id}
            </Text>
            <Text style={styles.rowText}>
            BU/Dept:{item.bu_dept}
            </Text>
            <Text style={styles.rowText}>
            Project:{item.project}
            </Text>
            <Text style={styles.rowText}>
            Extension No:{item.extension_No},
            </Text>
            <Text style={styles.rowText}>
            Customer:{item.customer}
            </Text>
            <Text style={styles.rowText}>
            Location:{item.location}
            </Text>
            <Text style={styles.rowText}>
            Particulars:{item.particulars}
            </Text>
            <Text style={styles.rowText}>
            Amount:{item.amount}
            </Text>
            {/* <TouchableOpacity style={styles.chooseBox}>
              <Text>
              Accept/Delete
              </Text>
            </TouchableOpacity> */}
            </TouchableOpacity>
          )}
        />
      {/* )} */}
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
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
      margin:35,
      color:'#000000',
    },
    container:{
      flex:5,
      backgroundColor:'#F89880',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    row:{
      marginHorizontal:20,
      marginVertical:10,
      paddingHorizontal:10,
      backgroundColor:'#000000',
      justifyContent:'center',
      borderRadius:10,
      elevation:8,
    },
    rowText:{
      color:'#ffffff',
      fontSize:14,
      margin:1,
    },
    // chooseBox:{
    //   marginHorizontal:10,
    //   marginVertical:10,
    //   paddingHorizontal:10,
    //   backgroundColor:'#ffffff',
    //   justifyContent:'center',
    //   borderRadius:10,
    //   elevation:8,
    //   height:10,
    //   width:10,
    // }
})


  

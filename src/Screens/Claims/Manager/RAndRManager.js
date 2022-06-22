import React , { useEffect, useState } from 'react'; //usestate for hooks
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {FlatList, Text,} from 'react-native';


export default function RAndRManager({navigation}){

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getExpenseClaims = async  () => {
    var axios = require('axios');
    
     var config = {
     method: 'get',
     url: 'http://10.0.2.2:8080/api/v3/randr/getRAndRs',
     headers: { 
    'Content-Type': 'application/json'
    },
   //data : data
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
      'Do you want to accept the R&R',
      [
        {text: 'cancel'},
        {text: 'NO'},
        {text: 'YES'},
        // {text: 'YES', onPress: () => console.warn('YES Pressed')},
      ]
    );

    useEffect(() => {
    getExpenseClaims();
     }, []);

    return(
      <View style={styles.body}>
      <View style={styles.header}>
      <Text style={styles.text}>
        Claimed R&Rs
      </Text>
      </View>
      <View style={styles.container}>
      {/* {isLoading ? <ActivityIndicator/> : ( */}
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.row} onPress={getExpenseClaims}>
            <FontAwesome5 
             name={'star'}
             size={30}
             color={'#F89880'}
            />
            <Text style={styles.rowText}>
            R and R ID:{item.randrid}
            </Text>
            <Text style={styles.rowText}>
            Extension No:{item.extension_no}
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
            </TouchableOpacity>
          )}
        />
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
    }
  })


  

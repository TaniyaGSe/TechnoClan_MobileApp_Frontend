import React , { useEffect, useState } from 'react'; //usestate for hooks
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { ActivityIndicator, FlatList, Text,} from 'react-native';

export default function Expense_Claim({navigation}){

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getExpenseClaims = async () => {
     try {
      const response = await fetch('http://10.0.2.2:8080/api/v1/user/getUsers');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

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
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.row}>
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
            Location:{item.Location}
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
      )}

         <TouchableOpacity style={styles.button} 
          onPress={()=>{
          navigation.navigate('Add a new claim');
        }}
        >
          <FontAwesome5 style={styles.plus}
          name={'plus'}
          size={30}
          color={'#F89880'}
          />
        </TouchableOpacity>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    button:{
      width:60,
      height:60,
      borderRadius:30,
      backgroundColor:'#ffffff',
      justifyContent:'center',
      position:'absolute',
      bottom:25,
      right:5,
      elevation:5,
    },
    plus:{
      left:15,
    },
    // input1:{
    //   fontSize:20,
    // },
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
      backgroundColor:'#ffffff',
      justifyContent:'center',
      borderRadius:10,
      elevation:8,
    },
    rowText:{
      color:'#000000',
      fontSize:14,
      margin:1,
    }
  })


  

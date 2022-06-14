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

  const getMovies = async () => {
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
    getMovies();
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
            <Text>
            BU/Dept:{item.bu_dept}, 
            Project:{item.project},
            Extension No:{item.extension_No},
            Customer:{item.customer},
            Location:{item.Location},
            Particulars:{item.particulars},
            Amount:{item.amount},
            </Text>
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
      borderTopLeftRadius: 60,
      borderTopRightRadius: 60,
    }
  })


  

import React, {useEffect, useState} from 'react'; //usestate for hooks
import {StyleSheet, View, TouchableOpacity, ScrollView,ActivityIndicator, FlatList, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../../Components/Button';


export default function AddRandR({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [id, setId] = useState([]);

  
  const persons = [
    {
    id: "1",
    name: "Earnest Green",
    },
    {
    id: "2",
    name: "Winston Orn",
    },
    {
    id: "3",
    name: "Carlton Collins",
    },
    {
    id: "4",
    name: "Malcolm Labadie",
    },
    {
    id: "5",
    name: "Michelle Dare",
    },
    {
    id: "6",
    name: "Carlton Zieme",
    },
    {
    id: "7",
    name: "Jessie Dickinson",
    },
    {
    id: "8",
    name: "Julian Gulgowski",
    },
    {
    id: "9",
    name: "Ellen Veum",
    },
    {
    id: "10",
    name: "Lorena Rice",
    },
  
    {
    id: "11",
    name: "Carlton Zieme",
    },
    {
    id: "12",
    name: "Jessie Dickinson",
    },
    {
    id: "13",
    name: "Julian Gulgowski",
    },
    {
    id: "14",
    name: "Ellen Veum",
    },
    {
    id: "15",
    name: "Lorena Rice",
    },
  ];

  const getGivenRAndRs = async () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://10.0.2.2:8080/reward/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data);
        console.log('************************************')
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //   Alert.alert(
  //   'Alert',
  //   'Edit or Delete?',
  //   [
  //     {text: 'cancel'},
  //     {text: 'Edit',  onPress: () => navigation.navigate('Edit EC')},
  //     {text: 'Delete',onPress:(deleteClaim)},
  //     // {text: 'Delete',onPress: () => alert('Do you want to delete the claim?')},
  //   ]
  // );


  // useEffect(() => {
  //   getGivenRAndRs();
  // }, []);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Reward & Recognition</Text>
      </View>

      <View style={styles.footer}>
        {/* {isLoading ? <ActivityIndicator/> : (  */}

        {/* <TextInput
            placeholder="Enter Employee ID"
            style={[styles.textInput, {color: colors.text}]}
            underlineColorAndroid="transparent"
            value={data.id}
            onChangeText={setId}
            secureTextEntry
          />

        <CustomButton
          onPressFunction={}
          title="Search"
        /> */}

<FlatList
 data={persons}
 renderItem={({item}) => <Text>{item.name}</Text>}
/>
<CustomButton
          onPressFunction={() => {
            navigation.navigate('Give new R And R');
          }}
          title="Add Reward"
        />

<FlatList
 data={data}
 renderItem={({item}) => <Text>{JSON.stringify(item.amount)}</Text>}
/>
      

        

        

        <CustomButton
          onPressFunction={getGivenRAndRs}
          title="Show Details"
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 35,
    color: '#000000',
  },
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    alignItems: 'center',
    flex: 3,
    height: '70%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  separator:{
    height : 10,
    width : '100%',
    backgroundColor : '#009387'
  },rowText: {
    color: '#ffffff',
    fontSize: 14,
    margin: 1,
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
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  rowText:{
    color:'#F89880',
    fontSize:14,
    margin:1,
  }
});

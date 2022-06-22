import React, {useEffect, useState} from 'react'; //usestate for hooks
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../../Components/Button';

import {ActivityIndicator, FlatList, Text} from 'react-native';

export default function Add({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getGivenRAndRs = async () => {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: 'http://10.0.2.2:8080/opdamount/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getGivenRAndRs();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>OPD</Text>
      </View>

      <View style={styles.footer}>
        {/* {isLoading ? <ActivityIndicator/> : (  */}

        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.row}>
              <FontAwesome5 name={'star'} size={30} color={'#F89880'} />
              <Text style={styles.rowText}>
                R and R ID:{item.randrgiving_id}
              </Text>
              <Text style={styles.rowText}>Employee ID:{item.employee_id}</Text>
              <Text style={styles.rowText}>
                R and R amount:{item.randramount}
              </Text>
            </TouchableOpacity>
          )}
        />

        <CustomButton
          onPressFunction={() => {
            navigation.navigate('GiveOPDAmount');
          }}
          title="Add OPD Amount"
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
});

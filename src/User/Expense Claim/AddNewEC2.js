import React , {useState,useEffect,} from 'react'; //usestate for hooks
import {
  StyleSheet,
  Button,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function AddNewE_Claim2(){

  // 
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


    // return(
      // <View style={styles.body}>
        {/* <Text style={styles.text}>BU/Dept:{route.params.buDept}</Text>
        <Text style={styles.text}>Project:{route.params.project}</Text>
        <Text style={styles.text}>Extension No:{route.params.extensionNo}</Text>
        <Text style={styles.text}>Extension No:{route.params.extensionNo}</Text>
        <Text style={styles.text}>Customer:{route.params.customer}</Text>
        <Text style={styles.text}>Location:{route.params.location}</Text>
        <Text style={styles.text}>Particulars:{route.params.particulars}</Text>
        <Text style={styles.text}>Amount:{route.params.amount}</Text> */}

        {/* <Text style={styles.text}>Payment will be made only against valid original bills and receipt</Text> */}
      






  //       <Button style={styles.button}
  //        title='Submit'
  //        color="#e63909"
  //       />
  //     </View>
  //   )
  // }
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>BU/Dept:{item.bu_dept}, Customer:{item.customer}</Text>
          )}
        />
      )}
    </View>
  );
};

  const styles = StyleSheet.create({
    body:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    input1:{
      fontSize:20,
    },
    text:{
      fontSize:15,
    }
  })


  

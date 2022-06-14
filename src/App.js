import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React , {useState} from 'react'; //usestate for hooks
import Expense_Claim from './User/Expense Claim/ExpenseClaim';
import OPD from './User/OPD/OPD';
import RAndR from './User/R&R/R&R';
import AddNewE_Claim from './User/Expense Claim/AddNewEC';
import Add_OPD2 from './User/OPD/AddNewOPD2';
import Add_OPD from './User/OPD/AddNewOPD';
import ViewP_RAndR from './User/R&R/PreviousR&R';
import Add_RAndR from './User/R&R/NewR&R';
import AddNewE_Claim2 from './User/Expense Claim/AddNewEC2';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SelectingPage({navigation}){

const onPressHandler1= () =>{
 navigation.navigate('Expense Claim');
}
const onPressHandler2= () =>{
  navigation.navigate('OPD');
}
const onPressHandler3= () =>{
  navigation.navigate('Reward And Recognition');
}

  return(
    <View style={styles.body}>
      <View style={styles.header}>
      <Text style={styles.text}>
        Select claim type
      </Text>
      </View>
      <View style={styles.container}>
      {/* <View style={styles.button}> */}
      {/* <Button
      onPress={onPressHandler1}
      color="#000000"
      title="Expense Claim"
      /> */}

      <TouchableOpacity style={styles.background}
      onPress={onPressHandler1}>
        <Text style={styles.textB}>
          Expense Claim
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.background}
      onPress={onPressHandler2}>
        <Text style={styles.textB}>
          OPD
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.background}
      onPress={onPressHandler3}>
        <Text style={styles.textB}>
          Reward and Recognition
        </Text>
      </TouchableOpacity>
      </View>
      </View>
    // </View>
  )
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#F89880 '
        },
        headerShown: false,
        headerTintColor:'#000000'
      }}>
        <Stack.Screen
        name="Welcome"
        component={SelectingPage}
        />
         <Stack.Screen
        name="Expense Claim"
        component={Expense_Claim}
        />
         <Stack.Screen
        name="OPD"
        component={OPD}
        />
         <Stack.Screen
        name="Reward And Recognition"
        component={RAndR}
        />
         <Stack.Screen
        name="Add a new claim"
        component={AddNewE_Claim}
        />
         <Stack.Screen
        name="View the new claim"
        component={AddNewE_Claim2}
        />
        <Stack.Screen
        name="Claim a new OPD"
        component={Add_OPD}
        />
        <Stack.Screen
        name="View the new OPD"
        component={Add_OPD2}
        />
        {/* <Stack.Screen
        name="Claim a new R&R"
        component={Add_RAndR}
        /> */}
        <Stack.Screen
        name="View claimed R&Rs"
        component={ViewP_RAndR}
        />
         <Stack.Screen
        name="Next"
        component={AddNewE_Claim2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
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
    fontSize:35,
    fontWeight:'bold',
    margin:40,
    color:'#000000',
  },
  background:{
    backgroundColor: '#ffffff',
    marginBottom:20,
    marginTop:40,
    // margin:0,
    marginLeft: '15%',
    width:'70%',
    height: '15%',
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
  container:{
    flex:4,
    backgroundColor:'#F89880',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  }
  
})

export default App;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React , {useState} from 'react'; //usestate for hooks
import Expense_Claim from './User/Expense Claim/ExpenseClaim';
import OPD from './User/OPD/OPD';
import RAndR from './User/R&R/R&R';
import AddNewE_Claim from './User/Expense Claim/AddNewEC';
import ViewPE_claims from './User/Expense Claim/PreviousEC';
import ViewP_OPD from './User/OPD/PreviousOPD';
import Add_OPD from './User/OPD/AddNewOPD';
import ViewP_RAndR from './User/R&R/PreviousR&R';
import Add_RAndR from './User/R&R/NewR&R';
import AddNewE_Claim2 from './User/Expense Claim/AddNewEC2';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

const Stack = createStackNavigator();

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
      <Text style={styles.text}>
        Persistent System
      </Text>
      <View style={styles.button}>
      <Button
      onPress={onPressHandler1}
      color="#e63909"
      title="Expense Claim"
      />
      <Button
      onPress={onPressHandler1}
      color="#e63909"
      title="OPD"
      />

      <Button 
      onPress={onPressHandler1}
      color="#e63909"
      title="Reward and Recognition"
      />
      </View>
    </View>
  )
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
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
        name="View previous claims"
        component={ViewPE_claims}
        />
        <Stack.Screen
        name="View claimed OPDs"
        component={ViewP_OPD}
        />
        <Stack.Screen
        name="Claim a new OPD"
        component={Add_OPD}
        />
        <Stack.Screen
        name="Claim a new R&R"
        component={Add_RAndR}
        />
        <Stack.Screen
        name="View claimed R&Rs"
        component={ViewP_RAndR}
        />
         <Stack.Screen
        name="Next"
        component={AddNewE_Claim2}
        />
        <Stack.Screen
        name="PreviousClaims"
        component={ViewPE_claims}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000000',
  },
  text:{
    fontSize:40,
    fontWeight:'bold',
    margin:10,
    color:'#ffffff',
  },
  button:{
    margin:10,
    marginVertical: 8,
  },
  
})

export default App;
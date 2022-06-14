import * as React from 'react';
import { View, Text, StyleSheet,Pressable,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home_Screen';
import ExpenseClaim from './Claims/Expense';
import OPDClaim from './Claims/OPD';
import RandRClaim from './Claims/RandR';
import LoginScreen from './Login_Screen';


const Stack = createNativeStackNavigator();

export default function WelcomeScreen({navigation}) {
    return (
        <NavigationContainer independent={true}>
  
        <Stack.Navigator
        screenOptions = {{
          header: () => null
        }}
        >
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
            />
  
            <Stack.Screen 
                name="Screen-Exp" 
                component={ExpenseClaim} 
            />
  
            <Stack.Screen 
                name="Screen-OPD" 
                component={OPDClaim} 
            />
  
            <Stack.Screen 
                name="Screen-RandR" 
                component={RandRClaim} 
            />

            {/* <Stack.Screen 
              name="Screen-Login" 
              component={LoginScreen} 
            /> */}
  
        </Stack.Navigator>
  
      </NavigationContainer>
    );
    
}




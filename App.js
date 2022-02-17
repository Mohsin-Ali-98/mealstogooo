/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



import ResturantInfo from './screens/App/resturant_signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import ResturantService from './services/resturants/resturant.service';
import ResturantContextProvider from "../mealstogooo/services/resturants/resturant.context"
import ResturantSignup from './screens/App/resturant_signup';
import ResturantList from './screens/App/resturantlist';
import { Theme  } from './utils/theme/theme';
import ResturantDetails from './screens/App/resturantdetails';


const Stack = createStackNavigator();

const App = () => {
  

  return (
     <SafeAreaView>
         <View style = {styles.mainveiw}> 
         <NavigationContainer>
         <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: '#4287f5',
        headerStyle: { backgroundColor: Theme.colors.bg.secondary },
      }}
    >
      <Stack.Screen
        name="Home"
        component={ResturantSignup}
        options={{
          title: 'Enter Resturant Info',
        }}
      />
      <Stack.Screen
        name="List"
        component={ResturantList}
        options={{
          title: 'Resturant Lists',
        }}
      />
      <Stack.Screen
        name="Details"
        component={ResturantDetails}
        options={{
          title: 'Resturant Details',
        }}
      />
    </Stack.Navigator>
         </NavigationContainer>

      </View>
     </SafeAreaView>
   
    );
};

const styles = StyleSheet.create({
 mainveiw:{
   height:"100%",
   width:"100%",
   backgroundColor:"black"
 },
 

});

export default App;

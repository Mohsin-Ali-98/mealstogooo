/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import ResturantInfo from './screens/App/resturant_info';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Home = () => {
  return <Text> hELLO  FROM Home</Text>
}
const setting = () =>{
  return<Text>setting</Text>
}


const Tab = createBottomTabNavigator();

const App = () => {
  

  return (
     
      <View style = {styles.mainveiw}> 
            <NavigationContainer>
              <Tab.Navigator
              
              screenOptions={({route})=>({
                tabBarIcon: ({focused, color , size}) =>{
                  let IconName;
                  if(route.name ==='HOME'){
                    IconName = focused ? 
                    "home" :
                    "home-outline"
                  }else if (route.name === 'settings') {
                    IconName = focused ?
                     "settings" :
                    "settings-outline"
                  }
                  return (   <Ionicons name={IconName} size={size} color={color} /> )
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'grey',
              })}
              
              >
                <Tab.Screen name = "HOME" component={Home}/>
                <Tab.Screen name = "settings" component = {setting}/>
              </Tab.Navigator>
            </NavigationContainer>

      </View>
   
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

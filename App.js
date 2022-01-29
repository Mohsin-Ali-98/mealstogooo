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


import ResturantService from './services/resturants/resturant.service';
import ResturantContextProvider from "../mealstogooo/services/resturants/resturant.context"



const Map = () => {
  return <Text> hELLO  FROM MAP</Text>
}
const setting = () =>{
  return<Text>setting</Text>
}


const Tab = createBottomTabNavigator();

const App = () => {
  

  return (
     <SafeAreaView>
         <View style = {styles.mainveiw}> 
         {/* <ResturantContextProvider> */}
         <NavigationContainer>
              <Tab.Navigator
              
              screenOptions={({route})=>({
                tabBarIcon: ({focused, color , size}) =>{
                  let IconName;
                  if(route.name ==='Resturant'){
                    IconName = focused ? 
                    "fast-food" :
                    "fast-food-outline"
                  }
                  else if (route.name === 'settings') {
                    IconName = focused ?
                     "settings" :
                    "settings-outline"
                  }
                  else if (route.name ==='Map'){
                    IconName = focused ? 
                    "md-map":
                    "md-map-sharp"
                  }
                  
                  return (   <Ionicons name={IconName} size={size} color={color} /> )
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'grey',
              })}
              
              >
                <Tab.Screen name = "Resturant" component={ResturantInfo}/>
                <Tab.Screen name = "MAP" component={Map}/>
                <Tab.Screen name = "settings" component = {setting}/>
              </Tab.Navigator>
            </NavigationContainer>
         {/* </ResturantContextProvider> */}

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

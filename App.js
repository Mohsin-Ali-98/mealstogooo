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





const App = () => {
  

  return (
     
      <View style = {styles.mainveiw}>
        <ResturantInfo/>
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

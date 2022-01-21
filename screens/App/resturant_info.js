import React , {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList
} from 'react-native';
import ResturantCard from '../../components/minorcomponents/resturant_card/resturant_card';
import SearchBar from '../../components/minorcomponents/searchbar/searchbar';
import { Theme  } from '../../utils/theme/theme';


const ResturantInfo = () => {
 
  const DATA = [1,2,3,4,5]


  const CardRender = () =>{
    return (<ResturantCard/>)
  }

 return (
     
        <View style = {styles.mainveiw}>
          <View style={styles.searchveiw}>
            <SearchBar/>
          </View>
          <View style= {styles.Infoveiw}>
            {/* <ResturantCard/> */}
            <FlatList
            data={DATA}
            renderItem={CardRender}
            keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      
     
      );
  };
  
  const styles = StyleSheet.create({
   mainveiw:{
     height:"100%",
     width:"100%",
     backgroundColor:Theme.colors.bg.primary,
     alignItems:"center",
     justifyContent:"center"
   },
   searchveiw:{
    height:"10%",
    width:"100%",
    backgroundColor:Theme.colors.bg.primary,
    alignItems:"center"
  },
  Infoveiw:{
      height:"100%",
      width:"100%",
      backgroundColor:Theme.colors.bg.primary,
      alignItems:"center",
  }
  
})  


   
export default ResturantInfo;
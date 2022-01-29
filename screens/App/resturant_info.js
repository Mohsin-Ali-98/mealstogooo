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
 
  const DATA = [ {
    name : "Mcdonalds",
    address:"123 street",
    photos:[
        "https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg"
       ],
    isOpen:false, 
    rating:4,
},
{
  name : "KFC",
  address:"ABC street",
  photos:[
      "https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg"
     ],
  isOpen:false, 
  rating:4,
},{
  name :"Pizza hut",
  address:"Xyz street",
  photos:[
      "https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg"
     ],
  isOpen:false, 
  rating:4,
},{
  name : "Shinwari",
  address:"789 street",
  photos:[
      "https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg"
     ],
  isOpen:false, 
  rating:4,
},
]


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
              // , item.address,item.photos,item.isOpen,item.rating}
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
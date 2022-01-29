import React , {useState,useContext} from 'react';
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
import {ResturantContext} from '../../services/resturants/resturant.context'



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


  // const DATA = [1]

  const CardRender = () =>{
    return (<ResturantCard/>)
  }

//  ResturantContext= useContext(ResturantContext)

 return (
     
        <View style = {styles.mainveiw}>
            <SearchBar/>
          <View style={styles.searchveiw}>
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
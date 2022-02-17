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
  FlatList,
  TouchableOpacity
} from 'react-native';
import ResturantCard from '../../components/minorcomponents/resturant_card/resturant_card';





const ResturantList = ({route,navigation}) =>{

  const { resturants } = route.params;


const Details = (item)=>{
  navigation.navigate('Details',{
    name:item.name,
   address:item.address,
   photos:item.photos,
   isOpen:item.isOpen,
   rating:item.rating
  })
}

    const CardRender = ({item}) =>{
        return (
          <TouchableOpacity   onPress={()=>Details(item)}>
            <ResturantCard
               name={item.name}
               address={item.address}
               photos={item.photos}
               isOpen={item.isOpen}
               rating={item.rating}
          />
          </TouchableOpacity>
        )
    
      }

    
    return(
        <View style = {style.mainview}>
            <FlatList
            data={resturants}
            renderItem={ CardRender}
            keyExtractor={(item) => item.name}  
            style={style.cardview}          
            />
        </View>
    )
}

const style= StyleSheet.create({

    mainview:{
        height:"100%",
        width:"100%",
        // alignSelf:"center",
        alignItems:"center",
        marginLeft:10
      
    },
    cardview:{
      height:"20%",
      width:"80%",
    }
})

export default ResturantList
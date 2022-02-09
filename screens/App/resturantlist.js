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





const ResturantList = (route) =>{

const {resturants, } = route.params

    const CardRender = (resturants, {item}) =>{
        return (<ResturantCard
          name={resturants.item.name}
          address={resturants.item.address}
          photos={resturants.item.photos}
          isOpen={resturants.item.isOpen}
          rating={resturants.item.rating}
    
        />)
    
      }

    
    return(
        <View style = {style.mainview}>
            <FlatList
            data={resturants}
            renderItem={ CardRender}
            keyExtractor={(item) => item.name}
            />
        </View>
    )
}

const style= StyleSheet.create({

    mainview:{
        height:"100%",
        width:"100%"
    }
})

export default ResturantList
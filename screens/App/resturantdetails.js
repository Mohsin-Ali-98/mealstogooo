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
    Image,
    FlatList,
    TouchableOpacity
  } from 'react-native';
import Svg, { SvgXml } from 'react-native-svg';
import open from '../../assets/icons/open';
import closed from '../../assets/icons/closed';
import star from '../../assets/icons/star';
import { Theme } from '../../utils/theme/theme';

  const ResturantDetails = ({route}) =>{
      
    const {name} = route.params
    const {address} = route.params
    const {photos} = route.params
    const {isOpen} = route.params
    const {rating} = route.params
    
    const RatingStars = Array.from(Array(Math.ceil(rating)))

    return (
       <SafeAreaView style ={style.mainview}>
            <View style={style.photos}>
                    <Image source = {{uri:photos}}  style={{height:"100%", width:"100%",borderRadius:10}}
                     />
            </View>
            <View style={style.details}>
                <View style={style.name}>
                    <Text style ={style.text}> Name :</Text>
                    <Text style ={style.text}> {name}</Text>
                </View>
                
                <View style={style.address}>
                <Text style ={style.text}> Address:</Text>
                    <Text style ={style.text}> {address}</Text>
                </View>
               
               
                <View style={style.status}>
                    { isOpen ? 
                            <View style={style.open}>
                                <Text style ={style.text} > Status :  Resturant is Open</Text>
                                <SvgXml xml={open} height={40} width={40}/>
                            </View>:
                            
                            <View style={style.close}>
                                <Text style ={style.text}  >Status : Resturant is closed</Text>
                                <SvgXml xml={closed} height={35}width={35}/>
                            </View>

                    }



                </View>
                
                <View style={style.rating}>
                    <Text style ={style.text} > Overall Rating:</Text>
                     {
                         RatingStars.map(
                             ()=>(<SvgXml xml={star} height={30}width={30}/> )
                         )
                     }
                </View>
            </View>
       </SafeAreaView>
      )
  }

  const style = StyleSheet.create({
      mainview:{
          height:"100%",
          width:"100%",
          alignItems:"center",
          justifyContent:"space-around"
      },
      photos:{
          height:"30%",
          width:"80%",
        //   backgroundColor:"red"
      },
      details:{
        height:"50%",
        width:"90%",
        backgroundColor:Theme.colors.bg.secondary,
        justifyContent:"space-evenly",
        marginTop:-50
      },
      name:{
          height:"20%",
          width:"100%",
          backgroundColor: "#e0dede",
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-evenly",
          borderRadius:10
      },
      address:{
        height:"20%",
          width:"100%",
          backgroundColor: "#e0dede",
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-evenly",
          borderRadius:10
    },
    rating:{
        height:"20%",
        width:"100%",
        backgroundColor: "#e0dede",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        borderRadius:10
    },
    status:{
        height:"20%",
        width:"100%",
        backgroundColor: "#e0dede",
        borderRadius:10

    },
    open:{
        flexDirection:"row",
        height:"100%",
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center",
        
    },
    close:{
        flexDirection:"row",
        height:"100%",
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center", 
    },
    text:{
        fontSize:18,
        color:"black"
    }
  })

  export default ResturantDetails;

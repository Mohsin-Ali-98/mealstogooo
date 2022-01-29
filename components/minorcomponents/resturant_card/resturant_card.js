
import React , {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Dimensions
} from 'react-native';
import { Theme } from '../../../utils/theme/theme';
import { SvgXml } from "react-native-svg";
import star from '../../../assets/icons/star';
import open from '../../../assets/icons/open';
import closed from '../../../assets/icons/closed';
const windowHeight = Dimensions.get('window').height;
const ResturantCard = (props) => {
  
    // const {
    //     name = "Mcdonalds",
    //     address="123 street",
    //     photos=[
    //         "https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg"
    //        ],
    //     isOpen=false, 
    //     rating=4,
    //      isClosed=false
    // } = resturantinfo


    // const ArrayRating = Array.from(rating)
    const ArrayRating = Array.from( Array(Math.ceil(props.rating)))


    return(
        <View style = {styles.cardview}>

            <View style= {styles.imgview}>

            <Image source={{uri: props.photos[0]}}
                style={{height:"100%", width:"100%",borderRadius:20}}
            />
                 
            </View>   
            <Text style = {styles.name}>{props.name}</Text>
                    <View style ={styles.rating}>
                
                        <View style={styles.stars}>{
                                ArrayRating.map( ()=>(
                            <SvgXml xml={star} height={20} width={20} />
                        ))}
                        </View>
                                    <View style={styles.isOpen}>
                                       { props.isOpen ?
                                     
                                     <View style = {styles.open}>
                                      <Text>RESTURANT IS OPEN</Text>
                                       <SvgXml xml={open} height={20} width={20}/>
                                      </View>
                                      
                                       : 
                                       <View style = {styles.closed}>
                                         <Text >RESTURANT IS COSED</Text>
                                         <SvgXml xml={closed} height={20} width={20}/>
                                       </View>
                                      
                                        
                                       }
                                    </View>

               </View>
            <Text style = {styles.address}>{props.address}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    cardview:{
        height:windowHeight/3,
        width:"95%",
        marginTop:10,
        backgroundColor:Theme.colors.bg.secondary,
        justifyContent:"space-around",
        borderRadius:20,
        marginBottom:50
        
    },

    imgview:{
        height:"60%",
        width:"80%",
        marginTop:5,
        marginLeft:30,
    },
    name:{
        color:Theme.colors.text.primary,
        fontSize:20,
        marginLeft:20,
        marginTop:10
        
    },
   
   rating:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between"
   },
   stars:{
    flexDirection:"row",
    marginLeft:10,
    // backgroundColor:"red",
   },
   isOpen:{
    backgroundColor:"black",
    width:"70%",
   },
   open:{
    flexDirection:"row",
    color:"red",
    alignItems:"center",
    justifyContent:"space-around"
   },
   closed:{
    flexDirection:"row",
    color:"red",
    alignItems:"center",
    justifyContent:"space-around",
    color:Theme.colors.text.success,
   },
    address:{
        color:Theme.colors.text.primary,
        // fontFamily:Theme.fonts.body,
        // fontSize:Theme.fontSizes.body,
        marginLeft:20
    }
})

export default ResturantCard;


























// import React , {useState} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Image,
//   TextInput
// } from 'react-native';
// import { Theme } from '../../../utils/theme/theme';
// import { SvgXml } from "react-native-svg";
// import star from '../../../assets/icons/star';
// import open from '../../../assets/icons/open';
// import closed from '../../../assets/icons/closed';

// const ResturantCard = ({resturantinfo = {} }) => {
  
//     const {
//         name = "Mcdonalds",
//         address="123 street",
//         photos=[
//             "https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg"
//            ],
//         isOpen=false,
//         rating=4,
//     } = resturantinfo


//     // const ArrayRating = Array.from(rating)
//     const ArrayRating = Array.from(new Array(Math.floor(rating)))


//     return(
//         <View style = {styles.cardview}>

//             <View style= {styles.imgview}>

//             <Image source={{uri: photos[0]}}
//                 style={{height:"100%", width:"100%",borderRadius:20}}
//             />
                 
//             </View>   
//             <Text style = {styles.name}>{name}</Text>
//                     <View style ={styles.rating}>
                
//                         <View style={styles.stars}>{
//                                 ArrayRating.map( ()=>(
//                             <SvgXml xml={star} height={20} width={20} />
//                         ))}
//                         </View>
//                                     <View style={styles.isOpen}>
//                                        { isOpen ?
                                     
//                                      <View style = {styles.open}>
//                                       <Text>RESTURANT IS OPEN</Text>
//                                        <SvgXml xml={open} height={20} width={20}/>
//                                       </View>
                                      
//                                        : 
//                                        <View style = {styles.closed}>
//                                          <Text >RESTURANT IS COSED</Text>
//                                          <SvgXml xml={closed} height={20} width={20}/>
//                                        </View>
                                      
                                        
//                                        }
//                                     </View>

//                </View>
//             <Text style = {styles.address}>{address}</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({

//     cardview:{
//         height:"40%",
//         width:"95%",
//         marginTop:10,
//         backgroundColor:Theme.colors.bg.secondary,
//         justifyContent:"space-around",
//         borderRadius:20,
        
//     },

//     imgview:{
//         height:"60%",
//         width:"80%",
//         marginTop:5,
//         marginLeft:30,
//     },
//     name:{
//         color:Theme.colors.text.primary,
//         fontSize:20,
//         marginLeft:20,
//         marginTop:10
        
//     },
   
//    rating:{
//     flexDirection:"row",
//     width:"100%",
//     justifyContent:"space-between"
//    },
//    stars:{
//     flexDirection:"row",
//     marginLeft:10,
//     // backgroundColor:"red",
//    },
//    isOpen:{
//     backgroundColor:"black",
//     width:"70%",
//    },
//    open:{
//     flexDirection:"row",
//     color:"red",
//     alignItems:"center",
//     justifyContent:"space-around"
//    },
//    closed:{
//     flexDirection:"row",
//     color:"red",
//     alignItems:"center",
//     justifyContent:"space-around",
//     color:Theme.colors.text.success,
//    },
//     address:{
//         color:Theme.colors.text.primary,
//         // fontFamily:Theme.fonts.body,
//         // fontSize:Theme.fontSizes.body,
//         marginLeft:20
//     }
// })

// export default ResturantCard;
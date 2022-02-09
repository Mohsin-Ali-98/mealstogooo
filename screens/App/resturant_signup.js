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
  FlatList,
  TouchableOpacity
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

import ResturantCard from '../../components/minorcomponents/resturant_card/resturant_card';
import SearchBar from '../../components/minorcomponents/searchbar/searchbar';
import { Theme  } from '../../utils/theme/theme';


const DATA = [ {
  name : "Mcdonalds",
  address:"123 street",
  photos:
    "https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg"
   ,
  isOpen:true, 
  rating:4,
},
{
name : "KFC",
address:"ABC street",
photos:
    "https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg"
   ,
isOpen:true, 
rating:4,
},{
name :"Pizza hut",
address:"Xyz street",
photos:
    "https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg"
   ,
isOpen:false, 
rating:4,
},{
name : "Shinwari",
address:"789 street",
photos:
    "https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg"
   ,
isOpen:false, 
rating:4,
},
]

const ResturantSignup = () => {
 
  
const [name,setname]=useState('')
const[address,setaddress]=useState('')
const[rating,setrating] = useState(0)
const[status,setstatus]=useState(null)
const[resturants,setresturants]=useState(DATA)



// const updatename = (n) =>{
//       setname(n)
// }
// const updateaddress = (a) =>{
//   setaddress(a)
// }
// const updaterating = (r) =>{
//   setrating(r)
// }

const UpdateText = (i, j) =>{
  if(i)
  setname(i)
  if(j)
  setaddress(j)
}


const UpdateRating = (a) =>{
  setrating(a)
}



const Open = () =>{
  setstatus(true)
}

const Closed = () =>{
  setstatus(false)
}


const RegisterResturant = () =>{
  if(name!="" && address!= "" && rating!=0){
   
   
    DATA.push(
      {
        
        name:name,
        address:address,
        photos:"https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg",
        isOpen:status, 
        rating:rating,
        
      }
     
    )


    console.log(DATA)

    setresturants(DATA)
    setname('')
    setaddress('')
    setrating(0)
    setstatus(null)
    alert("Resturant Registerd")

  }
  else{
    alert("Fields empty")
  }
}

const ResturantDetails = ({navigation}) =>{
  navigation.navigate(Details,{
    resturants  
  })
  
}
//  ResturantContext= useContext(ResturantContext)

 return (
     <SafeAreaView>
         <View style = {styles.mainveiw}>
          <View style={styles.Inputveiw}>

            <SearchBar
            stateupdate={UpdateText}
            name={name}
            rate={rating}
            address={address}
            rating={rating}
            PickRating={UpdateRating}
            status={status}
            Openstatus={Open}
            ClosedStatus={Closed}
            /> 

          </View>
        
          <View style={styles.btns}>
          <View style={styles.registerbtn}>
               <TouchableOpacity onPress={()=>RegisterResturant()}>
                   <Text>Register</Text>
                </TouchableOpacity>
            </View>
           
            <View style={styles.registerbtn}>
               <TouchableOpacity onPress={()=>ResturantDetails()}>
                   <Text>Details</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
     </SafeAreaView>
      
     
      );
  };
  
  const styles = StyleSheet.create({
   mainveiw:{
     height:"100%",
     width:"100%",
     backgroundColor:Theme.colors.bg.primary,
     alignItems:"center",
     justifyContent:"center",
   },
   Inputveiw:{
    height:"60%",
    width:"100%",
    backgroundColor:Theme.colors.bg.primary,
    alignItems:"center",
    justifyContent:"space-around",
  },
  btns:{
    height:"30%",
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around"
  },
  registerbtn:{
    height:"30%",
    width:"20%",
    backgroundColor:"#4287f5",
    borderRadius:20,
    marginTop:10,
    alignItems:"center",
    justifyContent:"center",
  },

  textview:{
    color:"black"
  },

  Infoveiw:{
      height:"40%",
      width:"100%",
      backgroundColor:Theme.colors.bg.primary,
      alignItems:"center",
      // alignSelf:"center",
      marginLeft:20
      
  }
  
})  


   
export default ResturantSignup;
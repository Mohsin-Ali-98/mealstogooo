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
  "https://www.newfoodmagazine.com/wp-content/uploads/mcdonalds.jpg"  
  ,
  isOpen:true, 
  rating:4,
},
{
name : "KFC",
address:"ABC street",
photos:
    "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2ZjfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    ,
isOpen:true, 
rating:3,
},{
name :"Pizza hut",
address:"Xyz street",
photos:
"https://www.foodbusinessnews.net/ext/resources/2020/2/PizzaHutBoxMeal_Lead.jpg?t=1581088713&width=1080"   
,
isOpen:false, 
rating:2,
},{
name : "Shinwari",
address:"789 street",
photos:
"https://i.ytimg.com/vi/G_ayWIsNZIg/maxresdefault.jpg"    
,
isOpen:false, 
rating:1,
},
]

const ResturantSignup = ({navigation}) => {
 
  
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
        photos:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/800px-Hyderabadi_Chicken_Biryani.jpg",
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

const ResturantList = () =>{
  navigation.navigate('List',{
    // details: {resturants}
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
               <TouchableOpacity onPress={()=>ResturantList()}>
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

 

  
})  


   
export default ResturantSignup;
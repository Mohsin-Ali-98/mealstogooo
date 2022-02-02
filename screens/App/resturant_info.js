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
import ResturantCard from '../../components/minorcomponents/resturant_card/resturant_card';
import SearchBar from '../../components/minorcomponents/searchbar/searchbar';
import { Theme  } from '../../utils/theme/theme';
import {ResturantContext} from '../../services/resturants/resturant.context'
import { DrawerActions } from '@react-navigation/native';



const ResturantInfo = () => {
 
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

const [name,setname]=useState('')
const[address,setaddress]=useState('')
const[rating,setrating] = useState(0)
const[resturants,setresturants]=useState([DATA])



const updatename = (n) =>{
      setname(n)
}
const updateaddress = (a) =>{
  setaddress(a)
}
const updaterating = (r) =>{
  setrating(r)
}


const RegisterResturant = () =>{
  if(name!="" && address!= "" && rating!=0){
   
   
    DATA.push(
      {
        
        name:name,
        address:address,
        photos:"https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg",
        isOpen:true, 
        rating:rating,
        
      }
     
    )


    // setresturants([...DATA,{
    //   name:name,
    //   address:address,
    //   rating:rating,
    //   photos:"https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Fast-food-combo-meal.jpg",
    //   isOpen:true, 
    // }])
    setresturants(DATA)
    setname('')
    setaddress('')
    setrating(0)
    console.log(resturants)

  }
}


  const CardRender = ({item}) =>{
    return (<ResturantCard
      name={item.name}
      address={item.address}
      photos={item.photos}
      isOpen={item.isOpen}
      rating={item.rating}

    />)

  }

//  ResturantContext= useContext(ResturantContext)

 return (
     <SafeAreaView>
         <View style = {styles.mainveiw}>
          <View style={styles.Inputveiw}>
              <TextInput
              placeholder='Enter resturant name'
              placeholderTextColor={"black"}
              style={styles.inputfield}
              onChangeText={(e)=>updatename(e)}
              />
           
           
            
              <TextInput
             placeholder='Enter resturant address'
             placeholderTextColor={"black"}
             style={styles.inputfield}
             onChangeText={(f)=>updateaddress(f)}
              />
           

              
           
              <TextInput
              placeholder='Enter rating '
              placeholderTextColor={"black"}
              style={styles.inputfield}
              keyboardType='numeric'
              onChangeText={(g)=>updaterating(g)}
              />
            

            {/* <SearchBar
            name={name} setname={setname}
            address={address} setaddress={setaddress}
            rating={rating} setrating={setrating}
            /> */}


            <View style={styles.registerbtn}>
            
            <TouchableOpacity
            onPress={()=>RegisterResturant()}
            >
              <Text>Register</Text>
            </TouchableOpacity>
            </View>

          </View>
          <View style= {styles.Infoveiw}>
            <FlatList
            data={DATA}
            renderItem={ CardRender}
            keyExtractor={(item) => item.name}
            />
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
    height:"50%",
    width:"100%",
    backgroundColor:Theme.colors.bg.primary,
    alignItems:"center",
    justifyContent:"space-evenly",
  },

  inputfield:{
    height: "20%",
    width: "100%",
    backgroundColor: Theme.colors.bg.secondary,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop:0,
    color:"black",
  },
  registerbtn:{
    height:"10%",
    width:"20%",
    backgroundColor:"blue",
    borderRadius:20,
    marginTop:10,
    alignItems:"center",
    justifyContent:"center"
  },

  textview:{
    color:"black"
  },

  Infoveiw:{
      height:"50%",
      width:"100%",
      backgroundColor:Theme.colors.bg.primary,
      alignItems:"center",
      // alignSelf:"center",
      marginLeft:20
      
  }
  
})  


   
export default ResturantInfo;
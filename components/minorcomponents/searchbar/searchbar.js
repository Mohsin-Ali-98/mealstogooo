
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
// import { Icon } from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import { Theme } from '../../../utils/theme/theme';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

const SearchBar = (props) => {


  var radio_props =[
    {label:"Open" , value:true},
    {label:"Closed" , value:false}
  ]


  return (
    <SafeAreaView style={style.mainveiw} >
      {/* <View style={style.mainveiw}> */}
      <TextInput
              value={props.name}
              placeholder='Enter resturant name'
              placeholderTextColor={"black"}
              style={style.inputfield}
              onChangeText={(a)=>props.stateupdate(a)}
              />
           
           
            
              <TextInput
             value={props.address}
             placeholder='Enter resturant address'
             placeholderTextColor={"black"}
             style={style.inputfield}
             onChangeText={(b)=>props.stateupdate(false,b)}
              />
           

              
           <View style={style.ratingview}>
              <Text style ={style.text}>Rating :</Text>
              <Picker
                style={style.picker}
                selectedValue={props.rating}
                onValueChange={ (itemValue) => props.PickRating(itemValue) }
                >
                <Picker.Item label='select rating' value=""/>
                  <Picker.Item label='1' value={1}/>
                  <Picker.Item label='2' value={2}/>
                  <Picker.Item label='3' value={3}/>
                  <Picker.Item label='4' value={4}/>

                </Picker>
           </View>

           <View style={style.radioview}>
            <Text style={style.text}>Status :</Text>
            {/* <RadioForm
              radio_props={radio_props}
              initial={props.status}
              onPress={(value)=>{props.StatusPicker(value)}}
              style={style.radiobtn}
              /> */}
                <TouchableOpacity
                  status={props.status}
                  // style={style.radiobtn}
                  style = {[props.status == null ? style.radiobtn : props.status === true ? style.radiobtnselected : style.radiobtn ]}
                  onPress={(value)=> {props.Openstatus(value)}}
                  >
                  </TouchableOpacity>
                  <Text style={style.btntext}>Open</Text>


              <TouchableOpacity
              status={props.status}
              // style={style.radiobtnselected}
              style = {[props.status == null ? style.radiobtn : props.status === false ? style.radiobtnselected : style.radiobtn ]}
              onPress={(value)=> {props.ClosedStatus(value)}}
              >
              </TouchableOpacity>
              <Text style={style.btntext}>Closed</Text>

             

                 
          
           </View>
            


    {/* </View> */}
</SafeAreaView>
  )
}

const style = StyleSheet.create({
  mainveiw: {
    height: "80%",
    width: "90%",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },

  inputfield:{
    height: "20%",
    width: "100%",
    backgroundColor: Theme.colors.bg.secondary,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems:"center",
    color:"black",
  },
  ratingview:{
    height: "20%",
    width: "100%",
    backgroundColor: Theme.colors.bg.secondary,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
    color:"black",
  },

  picker:{
    height: "90%",
    width: "60%",
    backgroundColor: Theme.colors.bg.secondary,
    borderRadius: 20,
     color:"black",

  },
 text:{
   color:"black",
   fontSize:16,

 },

 radioview:{
  height:"20%",
  width:"100%",
  flexDirection:"row",
  borderRadius: 20,
  backgroundColor: Theme.colors.bg.secondary,
  justifyContent:"space-evenly",
  alignItems:"center"
 },
 radiobtn:{
  height:"50%",
  width:"10%",
  borderRadius: 40,
  justifyContent:"space-around",
  alignItems:"center",
  borderWidth:3,
  borderColor:"red"

},
radiobtnselected:{
  height:"50%",
  width:"10%",
  flexDirection:"row",
  borderRadius: 40,
  backgroundColor: "blue",
  borderWidth:3,
  borderColor:"red"
},
btntext:{
  color:"black",
   fontSize:12,
}
})


export default SearchBar;






























// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   TextInput
// } from 'react-native';
// // import { Icon } from 'react-native-vector-icons/EvilIcons';
// import Icon from 'react-native-vector-icons/AntDesign';
// import { Theme } from '../../../utils/theme/theme';

// const SearchBar = ({namestate , addstate , ratingstate}) => {

//   return (
//     <SafeAreaView>
//       <View style={style.mainveiw}>
//       <TextInput
//               placeholder='Enter resturant name'
//               placeholderTextColor={"black"}
//               style={style.inputfield}
//               onChangeText={(a)=>namestate(a)}
//               />
           
           
            
//               <TextInput
//              placeholder='Enter resturant address'
//              placeholderTextColor={"black"}
//              style={style.inputfield}
//              onChangeText={(b)=>addstate(b)}
//               />
           

              
           
//               <TextInput
//               placeholder='Enter rating '
//               placeholderTextColor={"black"}
//               style={style.inputfield}
//               keyboardType='numeric'
//               onChangeText={(c)=>ratingstate(c)}
//               />
//     </View>
//     </SafeAreaView>
//   )
// }

// const style = StyleSheet.create({
//   mainveiw: {
//     height: "90%",
//     width: "100%",
//     backgroundColor: Theme.colors.bg.secondary,
//     marginTop: 2,
//     borderRadius: 20,
//     justifyContent: "space-evenly",
//     alignItems: "flex-start",
//   },

//   inputfield:{
//     height: "20%",
//     width: "100%",
//     backgroundColor: Theme.colors.bg.secondary,
//     borderRadius: 20,
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems:"center",
//     color:"black",
//   },
//   icon: {
//     marginLeft: 10
//   },
//   input: {
//     marginLeft: 10,
//     width: "100%"
//   }
// })


// export default SearchBar;
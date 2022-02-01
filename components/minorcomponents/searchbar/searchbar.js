import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';
// import { Icon } from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import { Theme } from '../../../utils/theme/theme';

const SearchBar = () => {


  const [name,setname]=useState('')
  const[address,setaddress]=useState('')
  const[rating,setrating] = useState(0)


  
const updatename = (n) =>{
  setname(n)
}
const updateaddress = (a) =>{
setaddress(a)
}
const updaterating = (r) =>{
setrating(r)
}



  return (
    <SafeAreaView>
      <View style={style.mainveiw}>
      <TextInput
              placeholder='Enter resturant name'
              placeholderTextColor={"black"}
              style={style.inputfield}
              onChangeText={(e)=>updatename(e)}
              />
           
           
            
              <TextInput
             placeholder='Enter resturant address'
             placeholderTextColor={"black"}
             style={style.inputfield}
             onChangeText={(f)=>updateaddress(f)}
              />
           

              
           
              <TextInput
              placeholder='Enter rating '
              placeholderTextColor={"black"}
              style={style.inputfield}
              keyboardType='numeric'
              onChangeText={(g)=>updaterating(g)}
              />
    </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  mainveiw: {
    height: "100%",
    width: "100%",
    backgroundColor: Theme.colors.bg.secondary,
    marginTop: 2,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
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
  icon: {
    marginLeft: 10
  },
  input: {
    marginLeft: 10,
    width: "100%"
  }
})


export default SearchBar;
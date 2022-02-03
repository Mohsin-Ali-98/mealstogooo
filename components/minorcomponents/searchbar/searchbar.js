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

const SearchBar = (props) => {


// PROPS TOU CHANGE NHI HOTI CHILD ME UNLESS IN ARRAT OR SET IN A NEW STATE

  return (
    <SafeAreaView>
      <View style={style.mainveiw}>
      <TextInput
              placeholder='Enter resturant name'
              placeholderTextColor={"black"}
              style={style.inputfield}
              onChangeText={(a)=>props.stateupdate(a)}
              />
           
           
            
              <TextInput
             placeholder='Enter resturant address'
             placeholderTextColor={"black"}
             style={style.inputfield}
             onChangeText={(b)=>props.stateupdate(b)}
              />
           

              
           
              <TextInput
              placeholder='Enter rating '
              placeholderTextColor={"black"}
              style={style.inputfield}
              keyboardType='numeric'
              onChangeText={(c)=>props.stateupdate(c)}
              />
    </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  mainveiw: {
    height: "90%",
    width: "100%",
    backgroundColor: Theme.colors.bg.secondary,
    marginTop: 2,
    borderRadius: 20,
    justifyContent: "space-evenly",
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
  icon: {
    marginLeft: 10
  },
  input: {
    marginLeft: 10,
    width: "100%"
  }
})


export default SearchBar;
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

  const [text, settext] = ("")


  return (
    <SafeAreaView>
      <View style={style.mainveiw}>
      <View style={style.icon}>
        <Icon icon="search" size={40} color="grey" />
      </View>
      <View style={style.input}>
        <TextInput color={Theme.colors.text.primary}
          placeholder='Enter name of resturant'
          placeholderTextColor="black"
        />
      </View>
      <Text>
        {text}
      </Text>
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
  icon: {
    marginLeft: 10
  },
  input: {
    marginLeft: 10,
    width: "100%"
  }
})


export default SearchBar;
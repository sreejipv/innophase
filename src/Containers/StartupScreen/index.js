// import * as React from 'react';
import React, {useEffect} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';


function StartupScreen({navigation}) {
  useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate('Home')
    }, 2000);
  })  

  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
        <View style={[styles.bgBlue,styles.fullHeight]}>
        <Image
          source={require('../../assets/images/download.png')}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    bgBlue: {
      backgroundColor: '#1960A8'
    },
    fullHeight: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

export default StartupScreen
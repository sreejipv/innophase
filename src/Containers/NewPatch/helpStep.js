import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Header from '../../components/Header'


function HelpStep({navigation}) {

  return (
    <>
      <View style={styles.screen}>
          <Image 
                style={{width: '100%', height: 380, marginTop: 20}} 
                source={require('../../assets/images/patchback.png')}
                resizeMode="contain"/>   
            <View style={{marginTop:10}}></View>         
            <Text style={{color: '#1960A8', fontSize: 18, paddingLeft: 10}}>Patch should start blinking the green led</Text>
         
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: '#ffffff',
        padding: 20

    }
});

export default HelpStep
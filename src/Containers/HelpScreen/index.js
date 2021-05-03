import * as React from 'react';
import {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import Header from '../../components/Header';

function HelpScreen({navigation}) {
  return (
    <>
      <Header pagetitle="Help" navigation={navigation} />
      <View style={styles.screen}>
        <Image
          style={{width: '100%', height: 380, marginTop: 60}}
          source={require('../../assets/images/patchback.png')}
          resizeMode="contain"
        />
        <Text
          style={{
            color: '#1960A8',
            fontSize: 18,
            marginTop: -63,
            paddingLeft: 10,
          }}>
          Patch Name and password
        </Text>

        <View></View>
        <TouchableHighlight underlayColor="#1960A8" style={styles.button}>
          <Text style={styles.buttonText}>Ok</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#ffffff',
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#1960A8',
    borderRadius: 30,
    width: 300,
    padding: 10,
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default HelpScreen;

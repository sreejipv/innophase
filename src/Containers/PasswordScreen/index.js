import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import Header from '../../components/Header'


function PasswordScreen({ route, navigation }) {
  const { name } = route.params;
  const [password, setPassword] = useState('');
  return (
    <>
      <Header pagetitle=" " navigation={navigation} subTitle=""/>
      <View style={styles.screen}>
        <View style={styles.flexRow}>
          <Text style={styles.bodyCopy}>You have selected </Text>
          <Text style={styles.bodyCopyBold}>{name}</Text>
        </View>
        <View style={styles.spaceVertical_100}></View>
        <Text style={styles.boldTitle}>Enter Patch Password</Text>
        <TextInput secureTextEntry={true} style={styles.textField}
          value={password} 
          onChangeText={(text) => setPassword(text)}/>
          <View style={styles.spaceVertical_50}></View>
          <TouchableHighlight style={styles.button} onPress={() => {navigation.navigate('Dashboard' , {
            name: name
          });}}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableHighlight>
          <View style={styles.spaceVertical_30}></View>

          <TouchableHighlight >
            <Text style={[styles.textCenter, styles.bodyCopy]} onPress={()=>navigation.navigate('Help')}>I don't Know my patchpassword</Text>
          </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  spaceVertical_100:{
    marginTop: 100
  },
  spaceVertical_50:{
    marginTop: 50
  },
  spaceVertical_30:{
    marginTop: 30
  },
  bodyCopy: {
    color: '#1960A8',
    fontSize: 18
  },
  bodyCopyBold: {
    color: '#1960A8',
    fontWeight: 'bold',
    fontSize: 18
  },
  textCenter: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#1960A8',
    borderRadius: 30,
    width: 100,
    padding: 10,
  },
  flexRow: {
    flexDirection: 'row'
  },
  boldTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1960A8'
  },
  screen:{
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30
  },
  textField: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
   
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#1960A8',
    shadowOffset: { width: 10, height: 12 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 10,
  }
});

export default PasswordScreen
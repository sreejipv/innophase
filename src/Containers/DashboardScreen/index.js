import * as React from 'react';
import {  View, Text,Image, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import Header from '../../components/Header'
import EcgGraph from "../../components/EcgGraph";
import RespirationGraph from "../../components/RespirationGraph";

function DashboardScreen({navigation, route}) {
  console.log(route);
  const { name } = route.params;

  return (
   <>
        <Header pagetitle="Dashboard" navigation={navigation} subTitle={name} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, flexDirection: 'column', backgroundColor: 'white'}}>
        
        <View style={styles.screenMenu}>
          <TouchableHighlight>
              <Image 
                style={{width: 50, height: 50}} 
                source={require('../../assets/images/bell.png')}
                resizeMode="contain"/> 
          </TouchableHighlight>
          <TouchableHighlight>
              <Image 
                style={{width: 50, height: 50}} 
                source={require('../../assets/images/settings.png')}
                resizeMode="contain"/> 
          </TouchableHighlight>
          <TouchableHighlight>
              <Image 
                style={{width: 50, height: 50}} 
                source={require('../../assets/images/battery.png')}
                resizeMode="contain"/> 
          </TouchableHighlight>

        </View>
        <View style={styles.listItem}>
          <Text style={styles.itemText}>Posture </Text>
        </View>
        <View style={[styles.listItem, styles.listRow]}>
          <Text style={styles.itemText}>Temperature </Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', width: 100}}>
            <Image 
                  style={{width: 30, height: 30}} 
                  source={require('../../assets/images/temp.png')}
                  resizeMode="contain"/> 
            <Text style={styles.itemText}>36.1°C </Text>
          </View>
        </View>

        <View style={[styles.listItem, styles.listRow]}>
          <Text style={styles.itemText}>Heart Rate </Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', width: 110}}>
            <Image 
                  style={{width: 30, height: 30}} 
                  source={require('../../assets/images/heart.png')}
                  resizeMode="contain"/> 
            <Text style={styles.itemText}>72 BPM </Text>
          </View>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.itemText}>ECG</Text>
          <EcgGraph />
        </View>
        <View style={styles.listItem}>
          <Text style={styles.itemText}>Respiration Rate </Text>
          <RespirationGraph />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText}>Play</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText}>Record</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText}>Live</Text>
          </TouchableHighlight>
        </View>
        <View style={{marginBottom: 100}}></View>
        </ScrollView>
      </>
  );
}

const styles = StyleSheet.create({
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  screenMenu:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20
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
    borderRadius: 10,
    width: 100,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },
  listItem: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  itemText: {
    color: '#1960A8',
    fontSize: 16
  },
  listContainer: {
    margin: 10
  }
});

export default DashboardScreen
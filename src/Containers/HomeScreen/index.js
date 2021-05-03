import React, {useEffect, useContext} from 'react'
import { View, Text, StyleSheet, SafeAreaView,ScrollView, TouchableHighlight } from 'react-native';
import Header from '../../components/Header'
import PatchButton from "../../components/PatchButton";
// import { useNavigation } from '@react-navigation/native';

const data = ["T2-ADK Patch 852","T2-ADK Patch 852","T2-ADK Patch 852","T2-ADK Patch 852"]

function HomeScreen({ route, navigation}) {
  // const navigation = useNavigation();



  return (


    <>
      <View style={{flex: 1}}>
        <Header pagetitle="Home"/>
      </View>
   
      <View style={{flex: 3, backgroundColor: '#ffffff'}}>      
        <ScrollView contentContainerStyle={{  flexGrow: 1, flexDirection: 'column',
              justifyContent: 'space-between'}}>
            <Text style={styles.boldTitle}>Select your patch</Text>
            
            <View style={styles.listContainer}>
              {data && data.map((patch, index) => (
                  <PatchButton key={index} index={index+1} patchname={patch} navigation={navigation}/>
                ))
              }
            </View>

            <View >
              <Text style={styles.buttonTopText}>Your Patch is not listed ?</Text>
              <TouchableHighlight underlayColor="#1960A8" style={styles.button} onPress={() => {navigation.navigate('NewPatch')}}>
                    <Text style={styles.buttonText}>Add a New Patch</Text>
              </TouchableHighlight>
            </View> 
        </ScrollView>
      </View>

    </>

  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  boldTitle:{
    marginLeft: 30,
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1960A8'
  },
  buttonTopText: {
    color: '#1960A8',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,

  },
  listItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
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
    width: 200,
    marginBottom: 60,
    padding: 10,
  
  },
  listContainer: {
    margin: 10
  }
});

export default HomeScreen
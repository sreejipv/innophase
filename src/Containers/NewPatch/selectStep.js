import React, {useEffect, useContext} from 'react'
import { View, Text, StyleSheet, SafeAreaView,ScrollView, TouchableHighlight } from 'react-native';
import PatchContext from "../../Context/patchContext";


const data = ["T2-ADK Patch 852"]

function SelectStep({ currentStep, handleStepSelect, route, navigation}) {

    const {patchName, setPatchName} = useContext(PatchContext)
    console.log(patchName);

    function handlePatch(patch) {
      setPatchName(patch);
      handleStepSelect(currentStep+1); 
    }

  return (
    <>
   
      <View style={{ backgroundColor: '#ffffff',minHeight: '57%'}}>      
        <ScrollView contentContainerStyle={{  flexGrow: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
        <View>
            <Text style={styles.boldTitle}>Select your patch</Text> 
            <View style={{marginTop: 30}}></View>        
            <View style={styles.listContainer}>
                {data && data.map((patch, index) => (
                    <TouchableHighlight key={index} underlayColor="white" onPress={()=>handlePatch(patch)} >
                        <View style={styles.listItem}>
                          <Text style={styles.itemText}>{index+1} . </Text>
                          <Text style={styles.itemText}>{patch}</Text>
                        </View>
                    </TouchableHighlight>
                ))
                }
            </View>
        </View>

            <View >
              <Text style={styles.buttonTopText}>Your Patch is not listed ?</Text>
            </View> 

        </ScrollView>
            <View style={{marginTop: 30}}></View>        

      </View>

    </>

  );
}

const styles = StyleSheet.create({
  itemText: {
    color: '#1960A8',
    fontSize: 16
  },
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

  listContainer: {
    margin: 10
  }
});

export default SelectStep
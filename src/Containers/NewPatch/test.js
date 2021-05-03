import React, { useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';
import PatchHeader from '../../components/PatchHeader';
import HelpStep from './helpStep';
import SelectStep from './selectStep';
import AuthStep from "./authStep";
import AuthFinal from './authFinal';
import PatchContext from "../../Context/patchContext";

const data = [
  'T2-ADK Patch 852',
  'T2-ADK Patch 852',
  'T2-ADK Patch 852',
  'T2-ADK Patch 852',
];

function NewPatch({route, navigation}) {
  const {patchName} = useContext(PatchContext)

  const [currentStep, setCurrentStep ] = useState(1);
  const selectedStep = currentStep;
  
  const handleBackPress = (index) => { 
    setCurrentStep(index)
  };
  const handleStepSelect = (index) =>{
    setCurrentStep(index)
  }

  return (
    <>
 
 <KeyboardAvoidingView behavior='position' style = {{backgroundColor: 'white', flex: 1}}>

        <PatchHeader pagetitle="New Patch Setup" currentStep={currentStep} navigation={navigation} handleBackPress={handleBackPress}/>
        <View>
          {(() => {
            switch (selectedStep) {
                case 1:
                    return <HelpStep />
                case 2:
                    return <SelectStep currentStep={currentStep} handleStepSelect={handleStepSelect}/>
                case 3:
                    return <AuthStep currentStep={currentStep} handleStepSelect={handleStepSelect}/>
                case 4:
                    return <AuthFinal />
                    
                default:
                    return (
                        <Text style={styles.buttonText}>
                        You are a yyyy
                        </Text>
                    )
            }

      })()} 
        </View>
        <View style={{flexDirection: 'column'}}>

            <View style={styles.dotContainer}>
                <View style={currentStep === 1 ? styles.dotFilled : styles.dot}></View>
                <View style={currentStep === 2 ? styles.dotFilled : styles.dot}></View>
                <View style={currentStep === 3 ? styles.dotFilled : styles.dot}></View>
                <View style={currentStep === 4 ? styles.dotFilled : styles.dot}></View>
            </View>

{(() => {
    switch (selectedStep) {
        case 1:
            return (
              <TouchableHighlight style={styles.button} underlayColor="#1960A8"
              onPress={()=>setCurrentStep(currentStep+1)}>
                <Text style={styles.buttonText}>
                Next
                </Text>
              </TouchableHighlight>

            )
        case 2:
            return (
              <TouchableHighlight style={styles.button} underlayColor="#1960A8">
                <Text style={styles.buttonText}>
                  Scan Again
                </Text>
              </TouchableHighlight>
            )
        case 3:
            return (
              <View style={{marginTop: 30}}>

              </View>
            )
        case 4:
            return (
            <TouchableHighlight style={styles.button} underlayColor="#1960A8" onPress={()=>navigation.navigate('Dashboard',{
              name: patchName
            })}>
              <Text style={styles.buttonText}>
                Done
              </Text>
            </TouchableHighlight>
            )
        default:
            return (
                <Text style={styles.buttonText}>
                You are a yyyy
                </Text>
            )
    }

})()}        
  
</View>
 </KeyboardAvoidingView>
       
    </>
  );
}

const styles = StyleSheet.create({
    dotContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 20
    },
    dot: {
        height: 15,
        width:15,
        marginRight: 5,
        marginLeft: 5,
        borderColor: '#1960A8',
        borderWidth: 1,
        borderRadius: 30
    },
    dotFilled: {
        height: 15,
        width:15,
        marginRight: 5,
        marginLeft: 5,
        borderColor: '#1960A8',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#1960A8'
    },
    showButton:{ 
        position:'absolute', 
        right: 35, 
        top: 30,
        padding: 5
    },
  textField: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingBottom: 15,
    paddingTop: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#1960A8',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 5,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    },
  itemText: {
    color: '#1960A8',
    fontSize: 16,
  },
  listContainer: {
    margin: 10,
  },
  scrollViewContent: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  thinTitle: {
    marginLeft: 30,
    marginTop: 30,
    fontSize: 20,
    color: '#1960A8',
  },
  buttonTopText: {
    color: '#1960A8',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#1960A8',
    borderRadius: 30,
    width: 200,
    padding: 10,
  },
  listContainer: {
    margin: 10,
  },
});

export default NewPatch;

import * as React from 'react';
import { useState } from 'react';
import {   
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight, 
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';


function AuthFinal({navigation}) {
  const [pickerValue, setPickerValue] = useState('InnoPHase_wifi');
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <>

      <View style={{ backgroundColor: '#ffffff', minHeight: '57%'}}>
      <View style={{marginTop: 50, marginBottom: 50}}></View>

        <View
          contentContainerStyle={{flexGrow: 1, flexDirection: 'column'}}>
          <Text style={styles.thinTitle}>Select your Wi-Fi</Text>

          <TouchableHighlight underlayColor="white">
            <RNPickerSelect
              onValueChange={(value) => setPickerValue(value)}
              items={[
                {label: 'InnoPHase_wifi', value: 'innophase_wifi'},
                {label: 'InnoPHase_guests', value: 'InnoPHase_guests'},
                {label: 'InnoPHase_emp', value: 'InnoPHase_emp'},
              ]}>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>{pickerValue}</Text>
                <Image
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                  source={require('../../assets/images/downarrow.png')}
                />
              </View>
            </RNPickerSelect>
          </TouchableHighlight>


          <Text style={styles.thinTitle}>Password</Text>
         <View style={styles.textField}>
         
    
         <TextInput secureTextEntry={!passwordShow} 
          value={password} 
          underlineColorAndroid="transparent"
          onChangeText={(text) => setPassword(text)}/> 
          <TouchableHighlight underlayColor="white" style={styles.showButton} onPress={()=>setPasswordShow(!passwordShow)}>
          {passwordShow ? <Text style={styles.buttonText}>Hide</Text> :  <Text style={styles.buttonText}>Show</Text> }
         
          </TouchableHighlight>
      
                         
          </View>     
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  showButton:{ 
    position:'absolute', 
    right: 35, 
    top: 15,
    fontWeight: 'bold',
    padding: 5,
    color: '#1960A8'
  },
  buttonText: {
    color: '#1960A8',
    fontSize: 16
  },
  textField: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingBottom: 8,
    paddingTop: 8,
    borderWidth: 1,
    borderColor: '#ddd',
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
  listItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderColor: '#ddd',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#1960A8',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 5,
  },
  itemText: {
    color: '#1960A8',
    fontSize: 16,
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


  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#1960A8',
    borderRadius: 30,
    width: 200,
    padding: 10,
  },

});

export default AuthFinal
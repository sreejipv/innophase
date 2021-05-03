/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { ApplicationNavigator } from './Navigators'
import PatchContext from "./Context/patchContext";
import { SafeAreaView } from "react-native";
import GlobalStyles from '../src/GlobalStyles';
import 'react-native-gesture-handler'

function App() {
  const [patchName, setPatchName] = useState("");
  const patchValue = { patchName, setPatchName };
  return(
    <PatchContext.Provider value={ patchValue }>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
          <ApplicationNavigator />     
      </SafeAreaView>
    </PatchContext.Provider>
  )
}



export default App;

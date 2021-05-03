import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../Containers'
import { StartupScreen } from '../Containers'
import { PasswordScreen } from '../Containers'
import { DashboardScreen } from '../Containers'
import { HelpScreen } from '../Containers'
import { NewPatchScreen } from '../Containers'
import { NavigationContainer } from '@react-navigation/native'
// import { AppearanceProvider } from 'react-native-appearance'

const Stack = createStackNavigator()

let MainNavigator

// @refresh reset
const ApplicationNavigator = () => {
//   const { Layout, darkMode, NavigationTheme } = useTheme()
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)



  return (
  
        <NavigationContainer>
          {/* <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} /> */}
          <Stack.Navigator headerMode={'none'}>
            {/* <Stack.Screen name="Startup" component={IndexStartupContainer} /> */}
            <Stack.Screen name="Startup" component={StartupScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Password" component={PasswordScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Help" component={HelpScreen} />
            <Stack.Screen name="NewPatch" component={NewPatchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
  )
}

export default ApplicationNavigator
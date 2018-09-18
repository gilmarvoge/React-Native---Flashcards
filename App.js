import React from 'react'
import { View, Platform, StatusBar } from 'react-native'

import AppStatusBar from './src/components/appStatusBar'

import { purple, white } from './src/utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { setLocalNotification } from './src/utils/helpers'
import MainNavigator from './src/rotas/rotas'
//import setInitialStorage from './utils/api'

export default class App extends React.Component {
  
  componentDidMount() {
   // setInitialStorage()
   setLocalNotification()

  }

  render() {
    return (
      
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
     
    )
  }
}
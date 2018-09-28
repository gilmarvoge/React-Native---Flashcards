import React from 'react'
import { View, Text, Platform, StatusBar } from 'react-native'

import AppStatusBar from './src/components/appStatusBar'

import { purple, white } from './src/utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { setInitialDataStorage } from './src/storage/storageApi'
import { setLocalNotification } from './src/utils/helpers'
import MainNavigator from './src/rotas/rotas'
//import setInitialStorage from './utils/api'

export default class App extends React.Component {

  componentDidMount() {
    setInitialDataStorage()
    setLocalNotification()

  }

  render() {
    return (

      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={purple} barStyle="light-content" />
        <MainNavigator />
      </View>

    )
  }
}
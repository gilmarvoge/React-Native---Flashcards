import React from 'react'
import { View, } from 'react-native'
import AppStatusBar from './src/components/appStatusBar'
import { purple } from './src/utils/colors'
import { setInitialDataStorage } from './src/storage/storageApi'
import { setLocalNotification } from './src/utils/helpers'
import MainNavigator from './src/rotas/rotas'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/store/reducers'

export default class App extends React.Component {

  componentDidMount() {
    setInitialDataStorage()
    setLocalNotification()

  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
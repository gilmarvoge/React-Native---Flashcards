import React from 'react'
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { purple, white } from './src/utils/colors'
import { Provider } from 'react-redux'
import store from './src/store/store'
import { Constants } from 'expo'
import {MainNavigator} from './src/rotas/rotas'



function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
    
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
     
    );
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
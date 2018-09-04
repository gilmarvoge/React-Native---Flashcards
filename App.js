import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { purple, white } from './src/utils/colors'
import { Provider } from 'react-redux'
import store from './src/store/store'
import { Constants } from 'expo'
import routes from './src/routes/routes'


function StatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
       <View style={{flex: 1}}>
           <StatusBar backgroundColor={purple} barStyle="light-content" />
      </View>
       </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

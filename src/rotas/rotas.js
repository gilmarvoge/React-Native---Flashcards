import React from 'react'
import { Platform} from 'react-native'
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import { purple, white } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import AddDeck from '../views/AddDeck'
import Deck from '../views/Deck'
import Decks from '../views/Decks'

const Tabs = createMaterialTopTabNavigator({
    Home: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
      },
    },
        }, {
    navigationOptions: {
      header: null
    },
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })
  
export default MainNavigator = createStackNavigator({
    Home: {
      screen: Tabs,
    },
    Deck: {
        screen: Deck,
        navigationOptions: {
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: purple
          }
        }
      },
    /*EntryDetail: {
      screen: EntryDetail,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
      }
    }*/
  })
  
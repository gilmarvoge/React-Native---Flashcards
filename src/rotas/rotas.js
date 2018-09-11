import React from 'react'
import { View, Platform, StatusBar } from 'react-native'


import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import { purple, white } from '../utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'

import Home from '../views/Home'
import AddDeck from '../views/AddDeck'

//import { setLocalNotification } from './utils/helpers'

export const Tabs = createMaterialTopTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
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
            title: 'Home',
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


export const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
    },
    /* EntryDetail: {
       screen: EntryDetail,
       navigationOptions: {
         headerTintColor: white,
         headerStyle: {
           backgroundColor: purple,
         }
       }
     }*/
})


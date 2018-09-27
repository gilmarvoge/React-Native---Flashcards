import React, { Component } from 'react';


import { View, Button, Text, StyleSheet, ScrollView, Platform, TouchableOpacity, FlatList } from 'react-native'
import { purple, white, gray, blue, black } from '../utils/colors'


export default class Deck extends Component {


  render() {

    const { title, questions } = this.props.navigation.state.params;


    return (

      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.countQuestions}> {questions.length === 1 ? questions.length + ' Card' : questions.length + ' Cards'}</Text>
        <View style={styles.containerButtons}>
      <Text style={styles.buttons}>Add Card</Text>
      <Text style={styles.buttons}>Start Quiz</Text>
      </View>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 30,
    textAlign: 'center',
    color: black,
  },
  countQuestions: {
    textAlign: 'center',
    color: gray,
    fontSize: 20,
  },
  containerButtons: {
    margin:50,
   },
  buttons: {
    backgroundColor: purple,
    color: white,
    fontSize: 22,
    padding: 10,
    borderRadius: 7,
    height: 45,
    minWidth: "70%",
    margin:10,
    textAlign: 'center', 
   },

})




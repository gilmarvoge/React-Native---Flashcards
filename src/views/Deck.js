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
      <Button style={styles.addCardBtn}  title="Add Card"/>
      <Button style={styles.openQuizButton} title="Start Quiz"/>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  addCardBtn: {
    color: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 50,
   margin:10,
  },
  openQuizButton: {
    backgroundColor: black,
    padding: 20,
    minWidth: '90%',
    alignItems: 'center',
    margin: 5,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
})




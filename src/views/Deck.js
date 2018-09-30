import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import { purple, white, gray, black } from '../utils/colors'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: navigation.state.params.title };
  };

  render() {
    const { title } = this.props.navigation.state.params;
    const questions = this.props.decks[title] && this.props.decks[title].questions;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.countQuestions}> {questions.length === 1 ? questions.length + ' Card' : questions.length + ' Cards'}</Text>
        <View style={styles.containerButtons}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('AddCard', {
                title,
                questions
              })
            }>
            <Text style={styles.buttons}>Add Card</Text>
          </TouchableOpacity>
          {questions.length > 0 ? (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Quiz', {
                  title,
                  questions
                })
              }>
              <Text style={styles.buttons}>Start Quiz</Text>
            </TouchableOpacity>
          ) : (
              <Text style={styles.txtButton}>
                Add new cards before play...
              </Text>)}
        </View >
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  decks: state
})

export default connect(mapStateToProps)(Deck);

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
    margin: 50,
  },
  buttons: {
    backgroundColor: purple,
    color: white,
    fontSize: 22,
    padding: 10,
    borderRadius: 7,
    height: 55,
    minWidth: "120%",
    margin: 10,
    textAlign: 'center',
  },
  txtButton: {
    fontSize: 24,
    textAlign: 'center',
  },
})





import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { purple, white, black } from '../utils/colors'
import { addCardToDeck } from '../storage/storageApi'
import { addCard } from '../store/actions/index'
import { connect } from 'react-redux';

class AddDeck extends Component {
  state = {
    question: '', answer: ''
  };

  static navigationOptions = ({ navigation }) => {
    return { title: navigation.state.params.title };
  };

  addNewCard = () => {
    const { question, answer } = this.state;
    const { title, questions } = this.props.navigation.state.params;

    if (question === '') {
      Alert.alert('Question cannot be empty');
      return;
    }
    if (answer === '') {
      Alert.alert('Answer cannot be empty');
      return;
    }

    const card = { title, questions, question, answer };
    this.props.dispatch(addCard(card))
    addCardToDeck({
      card: { question, answer },
      deckTitle: title
    })
    this.props.navigation.goBack()
  }

  cancelNewCard = () => this.props.navigation.goBack();

  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Insert a question
         </Text>
        <View style={styles.nameDeckInputContainer}>
          <TextInput style={styles.nameDeckInput}
            value={question}
            onChangeText={question => this.setState({ question })} />
        </View>
        <Text style={styles.text}>
          Insert a answer
         </Text>
        <View style={styles.nameDeckInputContainer}>
          <TextInput style={styles.nameDeckInput}
            value={answer}
            onChangeText={answer => this.setState({ answer })} />
        </View>
        <View style={styles.touchableOpacityContainer}>
          <TouchableOpacity
            onPress={this.addNewCard}
          >
            <Text style={styles.buttons}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.cancelNewCard}
          >
            <Text style={styles.buttons}>Cancel</Text>
          </TouchableOpacity>
        </View >
      </View >
    );
  }
}

export default connect()(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  touchableOpacity: {
    paddingVertical: 15
  },
  text: {
    padding: 10,
    textAlign: 'center',
    color: black,
    paddingHorizontal: 10,
    fontSize: 25,
  },
  nameDeckInputContainer: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 50
  },
  nameDeckInput: {
    height: 70,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    width: 330,
    fontSize: 20,
  },
  touchableOpacityContainer: {
    margin: 30
  },
  buttons: {
    backgroundColor: purple,
    color: white,
    fontSize: 22,
    padding: 10,
    borderRadius: 7,
    height: 55,
    minWidth: "100%",
    margin: 10,
    textAlign: 'center',
  },
})



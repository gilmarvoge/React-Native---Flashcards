import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { purple, white, black } from '../utils/colors'
import { saveDeckTitle } from '../storage/storageApi'
import { addDeck } from '../store/actions/index'

class AddDeck extends Component {
  componentWillMount() {
    this.setState({
      deck: ''
    })
  }

  addDeck = () => {
    const title = this.state
    if (!title.deck) {
      Alert.alert('Deck Name cannot be empty')
    } else {
      const newDeck = { [title.deck]: { title: title.deck, questions: [] } };
      this.props.dispatch(addDeck(newDeck))
      saveDeckTitle(newDeck)
      this.setState({ deck: '' })
      this.props.navigation.goBack()
    }
  }

  cancelNewDeck = () => this.props.navigation.goBack();

  render() {
    const { deck } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          What is the title of your new deck?
         </Text>
        <View style={styles.nameDeckInputContainer}>
          <TextInput style={styles.nameDeckInput}
            value={deck}
            onChangeText={deck => this.setState({ deck })}
          />
        </View>
        <View style={styles.touchableOpacityContainer}>
          <TouchableOpacity  //key={index}
            onPress={this.addDeck}>
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity  //key={index}
            onPress={this.cancelNewDeck}>
            <Text style={styles.submit}>Cancel</Text>
          </TouchableOpacity>
        </View >
      </View >
    );
  }
}

export default connect()(AddDeck)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  touchableOpacity: {
    paddingVertical: 15
  },
  title: {
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
    width: 250,
    fontSize: 20,

  },
  touchableOpacityContainer: {
    margin: 70
  },
  submit: {
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

})



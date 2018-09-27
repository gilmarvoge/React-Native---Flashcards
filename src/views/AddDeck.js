import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { purple, white, gray, blue, black } from '../utils/colors'

class AddDeck extends Component {
  state = { deckname: '' };


  handleChange = event => {
    this.setState({ deckname: event });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          What is the title of your new deck?
         </Text>
        <View style={styles.nameDeckInputContainer}>
          <TextInput style={styles.nameDeckInput}
            value={this.state.name}
            onChangeText={this.handleChange}
          />
        </View>

            <TouchableOpacity style={styles.touchableOpacity} //key={index}
                                onPress={() =>
                                    this.props.navigation.navigate('Deck', {
                                        
                                    })
                                }>
                                <Text style={styles.submit}>Save</Text>
                               
                            </TouchableOpacity>
      </View >
    );
  }
}

export default AddDeck;


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
  touchableOpacity: {
    paddingVertical: 15
},
  submit: {
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



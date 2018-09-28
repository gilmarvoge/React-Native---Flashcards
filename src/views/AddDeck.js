import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { purple, white, gray, blue, black } from '../utils/colors'
import { saveDeckTitle } from '../storage/storageApi'



class AddDeck extends Component {
 
   state = { deckname: '' }
  

   updateDecks  () {
    //console.log("T I T LE PRA SALVAR" + this.state.deckname)
     this.props.onUpdateDecks(this.state.deckName.trim())
      .then(() => {
        this.props.navigation.goBack()
        //this.props.navigation.state.params.onGoBack(this.state.deckName.trim())
      
       // this.setState({ deckname: '' })
      })  
  }

  cancelNewDeck = () => this.props.navigation.goBack();

  handleChange = (target) => {
    this.setState({deckname: target  });
}

shouldComponentUpdate(nextProps, nextState) {
  const currentTouched = this.state.touched;
  const nextTouched = nextState.touched;

  // Re-render when the user has focused or unfocused the text field
  return (currentTouched !== nextTouched);
}


  render() {
    const {deckname} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          What is the title of your new deck?
         </Text>
        <View style={styles.nameDeckInputContainer}>
          <TextInput style={styles.nameDeckInput}
            defaultValue={deckname}
            onChangeText={this.handleChange}
           // onChangeText={(deckname) => this.setState({ deckname })}
          />
        </View>
        <View style={styles.touchableOpacityContainer}>
          <TouchableOpacity  //key={index}
            onPress={() => { this.updateDecks() }}>
            <Text style={styles.submit}>Submit</Text>

          </TouchableOpacity>
          <TouchableOpacity  //key={index}
            onPress={() => { this.cancelNewDeck() }}>
            <Text style={styles.submit}>Cancel</Text>
          </TouchableOpacity>
        </View >
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
  touchableOpacityContainer: {
    margin: 70
  },
  submit: {
    backgroundColor: purple,
    color: white,
    fontSize: 22,
    padding: 10,
    borderRadius: 7,
    height: 45,
    minWidth: "100%",
    margin: 10,
    textAlign: 'center',
  },

})



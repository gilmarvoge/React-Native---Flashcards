import React, { Component } from 'react';
import { Alert, View, Text } from 'react-native';

class AddDeck extends Component {


  render() {
    return (
      <View>
        <Text  maxLength={50}>
         "What is the title of your new deck?"
        
         
         </Text>
        
      </View>
    );
  }
}

export default AddDeck;

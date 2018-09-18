import React, { Component } from 'react';
import { getDecks } from '../utils/api'
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity, FlatList } from 'react-native'
import { purple, white, blue, black } from '../utils/colors'


export default class Decks extends Component {
    state = {
        decksList: {
            React: {
                title: 'React',
                quizLength: 2,
                questions: [
                    {
                        question: 'What is React?',
                        answer: 'A library for managing user interfaces',
                    },
                    {
                        question: 'Where do you make Ajax requests in React?',
                        answer: 'The componentDidMount lifecycle event',
                    },
                ],
            },
            JavaScript: {
                title: 'JavaScript',
                quizLength: 1,
                questions: [
                    {
                        question: 'What is a closure?',
                        answer:
                            'The combination of a function and the lexical environment within which that function was declared.',
                    },
                ],
            },
        }
    }
    //this.getDecksStorage = this.getDecksStorage.bind(this)

    /* 
       componentDidMount = () => {
             this.getDecksStorage()
       }
   
       getDecksStorage = () =>{
           getDecks().then((decks) => {
               if (decks) {
                   this.setState({ decksList: Object.values(decks) })
               }
           })
       }
          /* fetchDecks().then(decks => {
               this.setState({ decksList: Object.values(decks) });
           });*/


    /*openDeck = title =>
        this.props.navigation.navigate('ViewDeck', {
            title,
            getDecksStorage: this.getDecksStorage
        });
*/

    renderDecks = list =>
        list.map((deck) => {
            return (
                <TouchableOpacity 
                    onPress={() =>
                        this.props.navigation.navigate('Deck', {
                            title,
                            questions,
                        })
                    }>
                    <Text style={styles.titleDeck}>{deck.title}</Text>
                    <Text style={styles.countQuestions}>{deck.questions.length} cards</Text>
                   
                </TouchableOpacity>
            );
        });
    render() {

        console.log("D A T A" + Object.values(this.state.decksList))
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Bem vindo ao FlashCards</Text>
                <Text style={styles.title}>Seus Decks</Text>
                {this.renderDecks(Object.values(this.state.decksList))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
    },
    title: {
        padding: 10,
        margin: 10,
        fontSize: 30,
    },
    titleDeck: {
        alignItems: 'center',
        color: black,
        fontSize: 30,
    },
    countQuestions: {
        textAlign: 'center',
        color: black,
        fontSize: 15,
    },

    addDeckBtn: {
        backgroundColor: '#66bb66',
        padding: 20,
        //minWidth ,
        alignItems: 'center',
        margin: 5,
    },
    openDeckBtn: {
        backgroundColor: purple,
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
    titleDeck: {
        color: 'black',
        fontSize: 20,
    },
})









/*

*/
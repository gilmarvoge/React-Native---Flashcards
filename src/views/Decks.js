import React, { Component } from 'react';
//import { getDecks } from '../utils/api'
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity, FlatList } from 'react-native'
import { purple, white, gray, blue, black } from '../utils/colors'
import { AppLoading } from 'expo'
import { getDecks } from '../storage/storage'



export default class Decks extends Component {
    state = {
        decks: {},
        loading: false
    }

    componentDidMount() {
        getDecks()
            .then((decks) => { this.setState({ decks, loading: true }) })
    }

    render() {
        const { loading, decks } = this.state

        if (!loading) {
            return <AppLoading />
        }

        return (
            <View style={styles.container}>
                <ScrollView >
                    {Object.keys(decks).map((index) => {
                        const { title, questions } = decks[index]
                        return (
                            <TouchableOpacity style={styles.touchableOpacity} //key={index}
                                onPress={() =>
                                    this.props.navigation.navigate('Deck', {
                                        title,
                                        questions,
                                    })
                                }>
                                <Text style={styles.title}>{title}</Text>
                                <Text style={styles.countQuestions}>{questions.length} cards</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    touchableOpacity: {
        paddingVertical: 15
    },
    title: {
        textAlign: 'center',
        color: black,
        paddingHorizontal: 15,
        fontSize: 30,
    },
    countQuestions: {
        textAlign: 'center',
        color: gray,
        fontSize: 15,
        paddingHorizontal: 15,
    },
})




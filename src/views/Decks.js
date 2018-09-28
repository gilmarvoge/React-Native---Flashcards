import React, { Component } from 'react';
//import { getDecks } from '../utils/api'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { gray, black } from '../utils/colors'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import { getDecks } from '../storage/storageApi'

class Decks extends Component {
    state = {
        decks: {},
        loading: false
    }

    componentDidMount() {
       this.fetchDecks();
    }

    updateDecks = (title) => {
        saveDeckTitle(this.state.deckname.trim(title)).then(this.fetchDecks)
    }

    fetchDecks() {
       // this.props.dispatch(editFileName(this.props.fileSelected.toString(), this.state.filename))
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
    contentContainer: {
        flex: 1,
        paddingVertical: 20
    }
})


function mapStateToProps (decks) {
    return { decks }
  }

export default connect(mapStateToProps)(Decks)

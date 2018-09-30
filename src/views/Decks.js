import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../store/actions/index';
import { fetchDecks } from '../storage/storageApi';
import { gray, black, white } from '../utils/colors'

class Decks extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props;
        fetchDecks().then(decks => dispatch(getDecks(decks)))
            .then(() => this.setState(() => ({ ready: true })));
    }

    render() {
        const { decks } = this.props
        return (
            <View style={styles.container}>
                <ScrollView >
                    {Object.keys(decks).map((index) => {
                        const { title, questions } = decks[index]
                        return (
                            <TouchableOpacity style={styles.touchableOpacity} key={index}
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
        );
    }
}

const mapStateToProps = (state) => ({
    decks: state
})

export default connect(mapStateToProps)(Decks);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    touchableOpacity: {
        paddingVertical: 15,
        backgroundColor: white,
        margin: 5,
        minWidth: "100%",
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
        fontSize: 20,
        paddingHorizontal: 15,
    },
    contentContainer: {
        flex: 1,
        paddingVertical: 20
    }
})
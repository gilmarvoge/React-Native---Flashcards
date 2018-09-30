import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native'
import { clearLocalNotifications, setLocalNotification } from '../utils/helpers';
import { purple, white, gray, green, red, black } from '../utils/colors'

export default class App extends React.Component {
    state = {
        questions: [],
        cardsCount: 0,
        countCorrects: 0,
        index: 0,
        showQuestion: true
    };

    static navigationOptions = ({ navigation }) => {
        return { title: navigation.state.params.title };
    };

    componentDidMount = () => {
        this.updateDeck();
    };

    updateDeck = () => {
        this.setState({
            questions: this.props.navigation.state.params.questions,
            cardsCount: this.props.navigation.state.params.questions.length
        })
    }

    onPressButtons = (correctIncorrect) => {
        if (correctIncorrect === 'correctPress')
            this.setState({
                showQuestion: true, countCorrects: this.state.countCorrects + 1, index: this.state.index + 1
            })
        else if (correctIncorrect === 'incorrectPress') {
            this.setState({ showQuestion: true, index: this.state.index + 1 })
        }
    }

    newGame = () => {
        this.setState({
            questions: [],
            cardsCount: 0,
            countCorrects: 0,
            index: 0,
            showQuestion: true
        });
        this.updateDeck();
    };

    renderQuestion = () => (
        <View style={styles.views}>
            <Text style={styles.questionText}>
                {this.state.questions.length <= this.state.index
                    ? '...'
                    : this.state.questions[this.state.index].question}
            </Text>
            <TouchableOpacity style={styles.questionBtn} onPress={() => this.setState({ showQuestion: false })}>
                <Text style={styles.answerButton}>Answer</Text>
            </TouchableOpacity>
        </View>
    );
    renderAnwser = () => (
        <View style={styles.views}>
            <Text style={styles.questionText}>
                {this.state.questions.length <= this.state.index
                    ? '...'
                    : this.state.questions[this.state.index].question}
            </Text>
            <Text style={styles.anwserText}>
                {this.state.questions.length <= this.state.index
                    ? '...'
                    : this.state.questions[this.state.index].answer}
            </Text>
            <TouchableOpacity style={styles.correctButton} onPress={() => this.onPressButtons('correctPress')}>
                <Text style={styles.txtButtonChoose}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrongButton} onPress={() => this.onPressButtons('incorrectPress')}>
                <Text style={styles.txtButtonChoose}>Incorrect</Text>
            </TouchableOpacity>
        </View>
    );

    showResult = () => {
        if (this.state.cardsCount > 0) {
            clearLocalNotifications()
                .then(setLocalNotification)
                .catch(err => console.error(err));
            const correctPercent = Math.round(
                this.state.countCorrects / this.state.cardsCount * 100
            );
            return (
                <View style={styles.views}>
                    <Text style={styles.txtButton}>End game!</Text>
                    <Text style={styles.txtButton}>View your result:</Text>
                    <Text style={styles.txtButton}>{correctPercent}% right. </Text>
                    <Text style={styles.txtButton}>
                        {correctPercent > 70 ? 'Congratulations' : 'Try Again!'}
                    </Text>
                    <TouchableOpacity style={styles.correctButton} onPress={this.newGame}>
                        <Text style={styles.txtButtonChoose}>New game</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backButton} onPress={this.newGame}>
                        <Text style={styles.txtButtonChoose}>Back</Text>
                    </TouchableOpacity>
                </View>
            );
        } else
            return (
                <Text style={styles.txtButton}>
                    Add new cards before play...
                </Text>
            );
    };

    render = () => {
        const { title, questions } = this.props.navigation.state.params;
        return (
            <ScrollView style={{ flex: 1 }} >
                <View style={styles.views}>
                    <Text style={styles.title}>{title}</Text>

                    <Text style={styles.cardsCount}>
                        Score:{' '}{this.state.countCorrects}
                    </Text>
                    {this.state.questions.length > this.state.index && (
                        <Text style={styles.cardsCount}>
                            Question {this.state.index + 1} of {this.state.cardsCount}
                        </Text>
                    )}
                    {this.state.questions.length <= this.state.index
                        ? this.showResult()
                        : this.state.showQuestion
                            ? this.renderQuestion()
                            : this.renderAnwser()}
                </View>
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    views: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        padding: 10,
        margin: 10,
        fontSize: 30,
    },
    cardsCount: {
        fontSize: 18,
        color: gray,
        paddingBottom: 20,
    },
    answerButton: {
        fontSize: 25,
        color: green,
        paddingBottom: 20,
    },
    questionBtn: {
        padding: 20,
        minWidth: '90%',
        alignItems: 'center',
        margin: 5,
    },
    correctButton: {
        backgroundColor: green,
        padding: 10,
        borderRadius: 7,
        height: 55,
        minWidth: "70%",
        margin: 10,
        alignItems: 'center',
    },
    wrongButton: {
        backgroundColor: red,
        padding: 10,
        borderRadius: 7,
        height: 55,
        minWidth: "70%",
        margin: 10,
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 55,
        minWidth: "70%",
        margin: 10,
        alignItems: 'center',
    },
    txtButton: {
        fontSize: 24,
    },
    txtButtonChoose: {
        fontSize: 24,
        color: white,
    },
    questionText: {
        color: black,
        fontSize: 24,
        margin: 5,
        textAlign: 'center'
    },
    anwserText: {
        color: purple,
        fontSize: 24,
        margin: 5,
        textAlign: 'center'
    },
})

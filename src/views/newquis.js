import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native'
import { clearLocalNotifications, setLocalNotification } from '../utils/helpers';
import { purple, white, gray, green, red, black } from '../utils/colors'

export default class App extends React.Component {
    state = {
        questions: [],
        cardsCount: 0,
        countCorrects:0,
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
        else if (correctIncorrect === 'incorrectPress')
            this.setState({
                showQuestion: true, countCorrects: this.state.countCorrects - 1, index: this.state.index + 1
            })
    }

    newGame = () => {
        this.setState({
            questions: [],
            cardsCount: 0,
            countCorrects:0,
            index: 0,
            showQuestion: true
        });
        this.updateDeck();
    };

    renderQuestion = question => (
        <View style={styles.views}>
            <TouchableOpacity style={styles.questionBtn} onPress={() => this.setState({ showQuestion: false })}>
                <Text style={styles.questionText}>
                    {this.state.questions.length <= this.state.index
                        ? '...'
                        : this.state.questions[this.state.index].question}
                </Text>
                {this.state.index === 0 && (
                    <Text style={styles.cardsCount}>(Touch the question to see the answer)</Text>
                )}
            </TouchableOpacity>
        </View>
    );
    renderAnwser = anwser => (
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
            <TouchableOpacity style={styles.correctButton} onPress={()=> this.onPressButtons('correctPress')}>   
                <Text style={styles.txtButtonChoose}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrongButton} onPress={()=> this.onPressButtons('incorrectPress')}>
                <Text style={styles.txtButtonChoose}>Incorrect</Text>
            </TouchableOpacity>
        </View>
    );

    showResult = () => {
        if (this.state.cardsCount > 0) {
            //usuario completou um jogo, apaga o alerta de hoje e cria novamente para amanhã
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
                    <Text style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                        <Text>Back</Text>
                    </Text>
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
                        {this.state.countCorrects}{' '}
                        {this.state.countCorrects === 1 ? 'correct' : 'correct'} e{' '}
                        {this.state.countCorrects} {this.state.countCorrects === 1 ? 'error' : 'errors'}
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
        padding: 10,//10 20 0,  style={styles.questionBtn}
        margin: 10,//10 20 0,
        fontSize: 30, //30,
    },
    cardsCount: {
        fontSize: 18,
        color: gray,
        paddingBottom: 20,
    },
    questionBtn: {
        //backgroundColor: white,
        color: black,
        padding: 20,
        minWidth: '90%',
        alignItems: 'center',
        margin: 5,
    },
    correctButton: {
        //color: white,           //style={styles.correctButton}
        // backgroundColor: green,
        // padding: 20,
        // textAlign: 'center',
        // alignItems: 'center',
        // margin: 5,
        // borderRadius: 10,
        // height: 70,
        // minWidth: "70%",
        backgroundColor: green,
        color: white,
        fontSize: 22,
        padding: 10,
        borderRadius: 7,
        height: 50,
        minWidth: "60%",
        margin: 10,
        textAlign: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    wrongButton: {
        // color: white,       //style={styles.wrongButton}
        backgroundColor: red,
        color: white,
        fontSize: 22,
        padding: 10,
        borderRadius: 7,
        height: 50,
        minWidth: "60%",
        margin: 10,
        textAlign: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: purple,
        color: white,
        fontSize: 22,
        padding: 10,
        borderRadius: 7,
        height: 50,
        minWidth: "60%",
        margin: 10,
        textAlign: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    txtButton: {
        // color: white,          //style={styles.txtButton}
        fontSize: 24,
    },
    txtButtonChoose: {
        fontSize: 24,
        color: white,
    },
    questionText: {           //style={styles.anwserText}
        color: black,
        fontSize: 24,
        margin: 5,
        textAlign: 'center'
    },
    anwserText: {           //style={styles.anwserText}
        color: purple,
        fontSize: 24,
        margin: 5,
        textAlign: 'center'
    }, cancelBtn: {           //style={styles.cancelBtn}
        backgroundColor: gray,
        padding: 20,
        minWidth: '90%',
        alignItems: 'center',
        margin: 5,
    },
})

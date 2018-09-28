import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native'
import { clearLocalNotifications, setLocalNotification } from '../utils/helpers';
import { purple, white, gray, green, red } from '../utils/colors'

const DEFAULT_STATE = {
    questions: [],
    cardsCount: 0,
    corrects: 0,
    wrongs: 0,
    currentIndex: 0,
    showQuestion: true
};
export default class App extends React.Component {
    state = { ...DEFAULT_STATE };

    static navigationOptions = ({ navigation }) => {
        return { title: navigation.state.params.title };
    };

    componentDidMount = () => {
        this.refresh();
    };

    refresh = () => {
        this.setState({
            questions: this.props.navigation.state.params.questions,
            cardsCount: this.props.navigation.state.params.questions.length
        })

    }
    onCorrectPress = () =>
        this.setState({
            showQuestion: true,
            corrects: this.state.corrects + 1,
            currentIndex: this.state.currentIndex + 1
        });
    onWrongPress = () =>
        this.setState({
            showQuestion: true,
            wrongs: this.state.wrongs + 1,
            currentIndex: this.state.currentIndex + 1
        });
    onRePlay = () => {
        this.setState({ ...DEFAULT_STATE });
        this.refresh();
    };

    renderQuestion = question => (
        <View style={styles.views}>
            <TouchableOpacity style={styles.questionBtn} onPress={() => this.setState({ showQuestion: false })}>
                <Text style={styles.txtButton}>
                    {this.state.questions.length <= this.state.currentIndex
                        ? '...'
                        : this.state.questions[this.state.currentIndex].pergunta}
                </Text>
                {this.state.currentIndex === 0 && (
                    <Text style={styles.cardsCount}>(Touch the question to see the answer)</Text>
                )}
            </TouchableOpacity>
        </View>
    );
    renderAnwser = anwser => (
        <View style={styles.views}>
            <Text style={styles.txtButton}>
                {this.state.questions.length <= this.state.currentIndex
                    ? '...'
                    : this.state.questions[this.state.currentIndex].pergunta}
            </Text>
            <Text style={styles.anwserText}>
                {this.state.questions.length <= this.state.currentIndex
                    ? '...'
                    : this.state.questions[this.state.currentIndex].resposta}
            </Text>
            <TouchableOpacity style={styles.correctButton} onPress={this.onCorrectPress}>
                <Text style={styles.txtButton}>You are right!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrongButton} onPress={this.onWrongPress}>
                <Text style={styles.txtButton}>You are wrong...</Text>
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
                this.state.corrects / this.state.cardsCount * 100
            );
            return (
                <View style={styles.views}>
                    <Text style={styles.txtButton}>End game!</Text>
                    <Text style={styles.txtButton}>View your result:</Text>
                    <Text style={styles.txtButton}>{correctPercent}% right. </Text>
                    <Text style={styles.txtButton}>
                        {correctPercent > 70 ? 'PARABÉNS' : 'Tente de novo, você consegue!'}
                    </Text>
                    <TouchableOpacity style={styles.correctButton} onPress={this.onRePlay}>
                        <Text style={styles.txtButton}>New game</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtButton} onPress={() => this.props.navigation.goBack()}>
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
                        {this.state.corrects}{' '}
                        {this.state.corrects === 1 ? 'correct' : 'correct'} e{' '}
                        {this.state.wrongs} {this.state.wrongs === 1 ? 'error' : 'errors'}
                    </Text>
                    {this.state.questions.length > this.state.currentIndex && (
                        <Text style={styles.cardsCount}>
                            Question {this.state.currentIndex + 1} of {this.state.cardsCount}
                        </Text>
                    )}
                    {this.state.questions.length <= this.state.currentIndex
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
        backgroundColor: white,
        padding: 20,
        minWidth: '90%',
        alignItems: 'center',
        margin: 5,
    },
    correctButton: {           //style={styles.correctButton}
        backgroundColor: green,
        padding: 20,
        minWidth: '90%',
        alignItems: 'center',
        margin: 5,
    },
    wrongButton: {           //style={styles.wrongButton}
        backgroundColor: red,
        padding: 20,
        minWidth: '90%',
        alignItems: 'center',
        margin: 5,
    },
    txtButton: {           //style={styles.txtButton}
        color: white,
        fontSize: 24,
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

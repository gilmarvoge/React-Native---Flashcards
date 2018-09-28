import { AsyncStorage } from 'react-native';
const FLASHCARDS_STORAGE = 'FLASHCARDS_STORAGE';


const initialDeckData = {
    React: {
        title: 'React',
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
        questions: [
            {
                question: 'What is a closure?',
                answer:
                    'The combination of a function and the lexical environment within which that function was declared.',
            },
        ],
    },
};

export const setInitialDataStorage = () => {
    return AsyncStorage.setItem(FLASHCARDS_STORAGE, JSON.stringify(initialDeckData))
        .then(() => {
            console.log('It was saved successfully')
        }).then(() => {
            return getDecks()
        }
        )
        //.then(decks => JSON.parse(decks))
        .catch(() => {
            console.log('There was an error saving initial Data')
        })
}
//retorna todos os baralhos com seus títulos, perguntas, e respostas.
export const getDecks = () => {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE)
        .then(decks => JSON.parse(decks))
        .catch((e) => {
            console.log('There was an error: ' + e)
        })
}
//dado um único argumento id, ele retorna o baralho associado àquele id.
export const getDeck = id =>
    AsyncStorage.getItem(STORAGE_NAME)
        .then(item => JSON.parse(item)[id])
        .catch(ex => console.error(ex));

//dado um único argumento title, ele adiciona-o aos baralhos.
export const saveDeckTitle = title => {
    console.log("ENTROU PARA SALVA"+title)
    return getDecks()
        .then(decks => {
            const addDeck = { ...decks, [title]: { title, questions: [] } };
            return AsyncStorage.setItem(FLASHCARDS_STORAGE, JSON.stringify(addDeck));
        })
        .catch(ex => console.error(ex));
};

//dado dois argumentos, title e card, ele adiciona o cartão à lista de perguntas ao baralho com o título associado.
export const addCardToDeck = (title, card) => {
    return getDecks()
        .then(decks => {
            if (decks && decks[title]) {
                decks[title].questions.push(card);
                AsyncStorage.setItem(FLASHCARDS_STORAGE, JSON.stringify(decks));
            }
        })
        .catch(ex => console.error(ex));
};

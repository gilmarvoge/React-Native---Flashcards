import { AsyncStorage } from 'react-native';
import { initialDeckData } from './InitialData'

const FLASHCARDS_STORAGE = 'storageflashcards';

export const setInitialDataStorage = () => {
    return AsyncStorage.setItem(FLASHCARDS_STORAGE, JSON.stringify(initialDeckData))
}

export const fetchDecks = () => {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE).then(decks => {
        return decks === null ? setInitialDataStorage() : JSON.parse(decks)
    });
}

export const getDeck = id =>
    AsyncStorage.getItem(FLASHCARDS_STORAGE)
        .then(item => JSON.parse(item)[id])
        .catch(ex => console.error(ex));

export const saveDeckTitle = title => {
    AsyncStorage.mergeItem(FLASHCARDS_STORAGE, JSON.stringify(title))
    return title
}

export const addCardToDeck = ({ card, deckTitle }) => {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE, (err, result) => {
        let decks = JSON.parse(result);
        let newQuestions = JSON.parse(JSON.stringify(decks[deckTitle].questions));
        newQuestions[newQuestions.length] = card;
        const value = JSON.stringify({
            [deckTitle]: { title: deckTitle, questions: newQuestions },
        });
        AsyncStorage.mergeItem(FLASHCARDS_STORAGE, value);
    })
}


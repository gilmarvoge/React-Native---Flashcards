import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE = 'FLASHCARDS_STORAGE'

const initialDecksData = {
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


export const setInitialStorage = () => {
  AsyncStorage.setItem(FLASHCARDS_STORAGE, JSON.parse(initialDecksData));
}

export const getDecks = () => {
  AsyncStorage.getItem(FLASHCARDS_STORAGE)
    .then(decks => JSON.parse(decks))
}


export const getDeck = id =>
  AsyncStorage.getItem(FLASHCARDS_STORAGE)
    .then(deck => JSON.parse(deck)[id])

    /*

export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry (key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
    })
}

Para manusear a base de dados AsyncStorage, você certamente irá querer criar quatro métodos auxiliares diferentes.

getDecks: retorna todos os baralhos com seus títulos, perguntas, e respostas. 
getDeck: dado um único argumento id, ele retorna o baralho associado àquele id. 
saveDeckTitle: dado um único argumento title, ele adiciona-o aos baralhos. 
addCardToDeck: dado dois argumentos, title e card, ele adiciona o cartão à lista de perguntas ao baralho com o título associado. 
*/
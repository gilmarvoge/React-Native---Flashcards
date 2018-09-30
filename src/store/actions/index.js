import { ADD_DECK, GET_DECKS,ADD_CARD } from '../types/index'

export const getDecks = decks => ({
    type: GET_DECKS,
    decks,
})

export const addDeck = (deck) => ({
    type: ADD_DECK,
    deck
})

export const addCard = (card) => ({
    type: ADD_CARD,
    card,
})



import { GET_DECKS, ADD_DECK, ADD_CARD } from '../types';

function decks(state = {}, action) {
	const decks = action.decks
	const deck = action.deck
	switch (action.type) {
		case GET_DECKS:
			return { ...state, ...decks }
		case ADD_DECK:
			return { ...state, ...deck };
		case ADD_CARD:
			const { title, questions, question, answer } = action.card;
			const newCard = JSON.parse(JSON.stringify(questions)).concat([{ question, answer }]);
			return {
				...state,
				[title]: { ...state[title], questions: newCard },
			};
		default:
			return state
	}
}

export default decks

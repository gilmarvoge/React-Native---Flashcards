
import CORRECT_ANSWER from '../constants/constants'


const quiz = (state = initialState, action) => {
  switch (action.type) {
    case CORRECT_ANSWER:
      return {
        ...state,

      }
    default:
      return state
  }
}

const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export default quiz;
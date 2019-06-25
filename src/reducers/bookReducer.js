import { FETCH_BOOKS, DELETE_BOOK, UPDATE_BOOK } from '../actions/types';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        items: action.payload
      };
    case DELETE_BOOK:
      return {
        ...state,
        items: state.items.filter((book) => {
          return book.id !== action.payload
        })
      };
    case UPDATE_BOOK:
      return {
        ...state,
        items: state.items.map((book) => { 
          return (book.id === action.payload.id) ?
            {...book, title: action.payload.title, author: action.payload.author}
            :
            book
        })
      };
    default:
      return state;
  }
}

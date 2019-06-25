import { FETCH_BOOKS, UPDATE_BOOK, DELETE_BOOK } from './types';

export const fetchBooks = () => dispatch => {
  fetch(`${process.env.PUBLIC_URL}/books.json`)
    .then(res => res.json())
    .then(books =>
      dispatch({
        type: FETCH_BOOKS,
        payload: books
      })
    );
};

export const deleteBook = id => ({
  type: DELETE_BOOK,
  payload: id
});

export const updateBook = book => ({
  type: UPDATE_BOOK,
  payload: book
});


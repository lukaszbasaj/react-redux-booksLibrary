import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBooks, deleteBook } from "../../../actions/bookActions";

class BooksList extends Component {
    componentDidMount() {
        // if store empty get data from external source
        if (this.props.books.length !== 0) return;

        this.props.fetchBooks();
    }

    render() {
        const bookItems = this.props.books.map(book => (
            <div className="books__row" key={book.id}>
                <h3>Title: {book.title}</h3>
                <p>Author: {book.author}</p>
                <Link to={`/book-edit/${book.id}`}>
                    <button className={"button"}>Edit</button>
                </Link>
                <button className={"button"} onClick={() => this.props.deleteBook(book.id)}>Remove</button>

            </div>
        ));

        return (
            <div className="books-list">
                <h1>My books</h1>
                {bookItems}
            </div>
        );
    }
}

BooksList.propTypes = {
    fetchBooks: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    books: state.books.items
});

export default connect(
    mapStateToProps,
    { fetchBooks, deleteBook }
)(BooksList);

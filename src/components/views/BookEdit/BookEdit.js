import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateBook } from "../../../actions/bookActions";

class BookEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            id: this.props.match.params.uid
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentDidMount() {
        // if store empty redirect to home route
        if (this.props.books.length === 0) {
            this.props.history.push("/");
        } else {
            const book = this.props.books.filter(book => book.id === this.state.id);
            this.setState({
                title: book[0].title,
                author: book[0].author
            });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.title === '' || this.state.author === '') return;

        const book = {
            id: this.state.id,
            title: this.state.title,
            author: this.state.author
        };

        this.props.updateBook(book);
        this.props.history.push("/");
    }

    onCancel() {
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="book-edit">
                <h1>Update Book</h1>
                <form>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input className={"book-edit--input"}
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author: </label>
                        <input className={"book-edit--input"}
                            type="text"
                            name="author"
                            onChange={this.onChange}
                            value={this.state.author}
                        />
                    </div>
                </form>
                <div>
                    <button className={"button"} onClick={this.onSubmit}>Save</button>
                    <button className={"button"} onClick={this.onCancel}>Cancel</button>
                </div>
            </div>
        );
    }
}

BookEdit.propTypes = {
    updateBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    books: state.books.items
});

export default connect(
    mapStateToProps,
    { updateBook }
)(BookEdit);

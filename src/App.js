import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import 'sanitize.css/sanitize.css';
import BooksList from "./components/views/BooksList/BooksList";
import BookEdit from "./components/views/BookEdit/BookEdit";
import { Helmet } from 'react-helmet';
import Banner from './assets/img/banner.png'
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Helmet
              titleTemplate="%s - Book Library"
              defaultTitle="Book Library"
            >
              <meta name="description" content="A Book Library application" />
            </Helmet>
            <header className="app-header">
              <img src={Banner} alt="Logo" />
            </header>

            <Switch>
              <Route exact path="/" component={BooksList} />
              <Route exact path="/book-edit/:uid/" component={BookEdit} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
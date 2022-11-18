import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import reducers from './reducers'

import App from './App.js';
import './index.css';

import Login from './components/Login/Login';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/post" element={<App />} />
            </Routes>
        </Router>
    </Provider>, document.getElementById('root')
);
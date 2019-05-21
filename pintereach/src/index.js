// react import
import React from 'react';
import ReactDOM from 'react-dom';
// react router imports
import { BrowserRouter as Router } from 'react-router-dom';
// redux imports
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers';
// middleware imports
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// component imports
import App from './App';

// redux store
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>,
document.getElementById('root')
);


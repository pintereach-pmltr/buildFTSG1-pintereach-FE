// react import
import React from 'react';
import ReactDOM from 'react-dom';
// react router imports
import { BrowserRouter as Router } from 'react-router-dom';
// redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers';
// component imports
import App from './App';

// redux store
const store = createStore(reducer);

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>,
document.getElementById('root')
);


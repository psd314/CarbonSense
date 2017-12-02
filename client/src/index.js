import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import setJwtToken from './utils/setJwtToken.js';
import rootReducer from './rootReducer';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/loginRequest.js';

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f));

if(localStorage.jwtToken) {
	setJwtToken(localStorage);
	store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render(<Provider store={store}>
				<App />
				</Provider>, document.getElementById('root'));
registerServiceWorker();
{/*need to connect components to redux*/}

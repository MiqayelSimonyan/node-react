import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {getSocketData} from 'middlewars/socket.middleware';
import reducer from '../reducers';

var store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk),	
);

getSocketData(store.dispatch);
export default store;
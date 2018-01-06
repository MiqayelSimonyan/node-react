import { combineReducers } from 'redux';

import Task1 from './task1';
import Task2 from './task2';
import _Socket from './socket';

export default combineReducers({	
	Task1,
	Task2,
	_Socket
});
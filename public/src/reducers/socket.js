import {SOCKET_DATA} from '../actions';

export default function _Socket(state = [], action) {	
	switch(action.type) {
		case SOCKET_DATA:
			return [
				action.message
			]
	}

	return state;
}
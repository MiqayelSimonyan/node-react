import {TASK2_DATA} from '../actions';

export default function Task2(state = [], action) {	
	switch(action.type) {
		case TASK2_DATA:
			[...state].map(item => {
				if (action.payload && (action.payload.data.id === item.data.id) && (action.payload.data.text === item.data.text) ) {
					delete action.payload
				} else if (action.payload && (action.payload.data.id === item.data.id) && (action.payload.data.text !== item.data.text)) {
					item.data.text = action.payload.data.text;
					delete action.payload;
					return item;
				}
			});
			return action.payload ? 
				[
					...state,
					action.payload
				]
			:
				[
					...state
				]
	}
	return state;
}
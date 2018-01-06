import {TASK1_DATA} from '../actions';

export default function Task1(state = [], action) {
	switch(action.type) {
		case TASK1_DATA:
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
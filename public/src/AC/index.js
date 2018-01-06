import {TASK1_DATA, TASK2_DATA} from '../actions';

export function Task1Data(payload) {
	return {
		type: TASK1_DATA,
		payload
	}
}

export function Task2Data(payload) {
	return {
		type: TASK2_DATA,
		payload
	}
}
import {Task1Data, Task2Data} from '../AC';

const config = (method, data) => {
	return {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method,
    credentials: 'include',
    body: JSON.stringify(data)
  }
}

export function getTask1Data(url, data) {
  return (dispatch) => {
    fetch(url, config('POST', data))
      .then(response => {
        return response.json();
      })
      .then(response => {
        dispatch(Task1Data(response));
      })
      .catch((err) => console.error('err', err));
  };
}


export function getTask2Data(url, data) {
  return (dispatch) => {
    fetch(url, config('POST', data))
      .then(response => {
        return response.json();
      })
      .then(response => {
        dispatch(Task2Data(response));
      })
      .catch((err) => console.error('err', err));
  };
}

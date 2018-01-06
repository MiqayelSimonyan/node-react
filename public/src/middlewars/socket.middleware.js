import io from 'socket.io-client';
const socket = io();

function getSocketData(dispatch) {
	return socket.on('message', message => {
		dispatch({
			type: 'SOCKET_DATA',
			message: message
		});
	});
}

export { getSocketData }
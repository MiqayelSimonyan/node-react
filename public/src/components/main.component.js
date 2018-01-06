import React from 'react';
import {Provider} from 'react-redux';

import store from 'store';
import MainContainer from 'containers/main.container';

if (typeof(window) !== 'undefined') window.store = store;

export default () => {
	return (		
		<Provider key={module.hot ? Date.now() : store} store={store}>
			<MainContainer />
		</Provider>		
	)
}
import React from 'react';
import ReactDOM from 'react-dom';
import * as VKConnect from '@vkontakte/vkui-connect';
import { Provider } from 'react-redux';

import store from 'store/configure-store';

import App from './App';
import registerServiceWorker from './sw';
import './style.css';

const root = document.getElementById('root');

// Render
const render = (Component) => {
	ReactDOM.render(
		<Provider store={store}>
			<Component />
		</Provider>,
		root
	);
};

// Init VK App
VKConnect.send('VKWebAppInit', {});

render(App);

// Service Worker For Cache
registerServiceWorker();

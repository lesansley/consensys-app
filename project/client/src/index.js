import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import App from './App';
import history from './history';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const initialState = {};
const store = createStore(
	connectRouter(history)(rootReducer), // new root reducer with router state
	initialState,
	compose(
		applyMiddleware(
			routerMiddleware(history) // for dispatching history actions
			// ... other middlewares ...
		)
	)
);

const render = () => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<App history={history} />
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	);
};

render();
registerServiceWorker();

// Hot reloading
if (module.hot) {
	// Reload components
	module.hot.accept('./App', () => {
		render();
	});

	// Reload reducers
	module.hot.accept('./reducers', () => {
		store.replaceReducer(connectRouter(history)(rootReducer));
	});
}

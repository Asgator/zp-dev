import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'reducers';

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunkMiddleware
    ),
    typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

function configureStore(initialState = {}) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}

export const buildStore = (initialState = {}) => configureStore({
    ...initialState
});

export default buildStore();

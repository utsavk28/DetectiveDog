import { createStore, applyMiddleware } from 'redux';
import { compose } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {};
// const composeEnhancers =
//     (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             trace: true,
//             traceLimit: 25,
//         })) ||
//     compose;

const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState,
//     composeEnhancers(applyMiddleware(...middleware))
// );

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;

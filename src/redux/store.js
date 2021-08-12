import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from './contacts-reducer'

const rootReducer = combineReducers({
    contacts: todosReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;

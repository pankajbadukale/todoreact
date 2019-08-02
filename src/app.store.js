import { createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { addNote, undoState } from './reducers/note';

const appStore = createStore(combineReducers({addNote, undoState}), applyMiddleware(thunk, logger));

export default appStore;
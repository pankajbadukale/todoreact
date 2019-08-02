import { createStore } from 'redux';
import { combineReducers } from 'redux';

import { addNote, undoState } from './reducers/note';

const appStore = createStore(combineReducers({addNote, undoState}));

export default appStore;
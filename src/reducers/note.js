import { ADD, DELETE, UNDO, LIST, UNDO_ITEM } from '../constants';


const intialState = [];
const undoStateInit = {undo: false, index: null, item: null};

export function undoState(state = undoStateInit, action) {
    let myReducers = {
        [UNDO_ITEM]: () => {
            if(action.payload) {
                state = {
                    item: action.payload.note,
                    index: action.payload.noteIndex,
                    undo: true
                };
                return Object.assign({}, state);
            } else {
                return undoStateInit;
            }
        }
    };

    return (myReducers[action.type] && myReducers[action.type](action.payload)) || state;
    
}

export function addNote(state = intialState, action) {
    let myReducers = {
        [ADD]: (note) => {
            state.push(note);
            return [...state];
        },
        [DELETE]: () => {
            state.splice(action.payload, 1);
            return [...state]
        },
        [LIST]: () => state,
        [UNDO]: () => {
            state.splice(action.payload.index, 0, action.payload.item);

            return [...state];
        }
    };

    return (myReducers[action.type] && myReducers[action.type](action.payload)) || myReducers[LIST]();
}
import { ADD, LIST, DELETE, UNDO, UNDO_ITEM } from '../constants';

export function addNote(note) {
    return {type: ADD, payload: note};
}

function deleteNoteAction(noteIndex) {
    return {type: DELETE, payload: noteIndex};
}

export function deleteNote(noteIndex, note) {
    return dispatch => {
        dispatch(deleteNoteAction(noteIndex));
        setTimeout(() => {
            dispatch(undoNoteSave({note, noteIndex}));
        },3000)
    };
    
}

export function listNote() {
    return {type: LIST};
}

export function undoNote(payload) {
    return {type: UNDO, payload};
}

export function undoNoteSave(note) {
    return {type: UNDO_ITEM, payload: note};
}

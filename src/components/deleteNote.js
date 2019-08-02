import React from 'react';
import {connect} from 'react-redux';

import { deleteNote, undoNoteSave } from '../actions/allActions';

class DeleteNote extends React.Component {
    render() {
        return (
            <button onClick={() => this.props.deleteIt(this.props.noteIndex, this.props.note)}>Delete</button>
        );
    }
}

export default connect(state => {
    return {};
}, dispatch => {
    return {deleteIt : (noteIndex, note) => {
            dispatch(undoNoteSave({note, noteIndex}));
            dispatch(deleteNote(noteIndex));
        }
    };
})(DeleteNote);
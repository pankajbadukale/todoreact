import React from 'react';
import { connect } from 'react-redux';

import { undoNote, undoNoteSave } from '../actions/allActions';

class UndoNote extends React.Component {
    render() {
        let isDisabled = this.props.undoState.undo === false ? 'disabled' : '';
        return (
                <button onClick={() => this.props.undo(this.props.undoState)} disabled={isDisabled} >Undo</button>
        );
    }
}

export default connect(state => {
    return {undoState: state.undoState};
}, dispatch => {
    return { undo: (item) => {
            dispatch(undoNote(item));
            dispatch(undoNoteSave(null));
        }
    };
})(UndoNote);
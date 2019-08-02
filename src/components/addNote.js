import React from 'react';
import { connect } from 'react-redux';
import UndoNote from './undoNote';
import { addNote } from '../actions/allActions';

class AddNote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            note: ""
        };
    }

    addNote() {
        if(this.state.note.trim() === "") return;
        this.props.add(this.state.note);
        this.setState({note: ""});
    }

    onchangeNote(e) {
        let note = e.target.value;
        this.setState({note});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.note} onChange={(e) => this.onchangeNote(e)} />
                <button onClick={() => this.addNote()}>Add Note</button>
                <UndoNote/>
            </div>   
        );
    }
}

const connectObject = connect((state) => {
    window.okk = state;
    return {notes: state.addNote};
}, (dispatch) => {
    return {
        add: (note) => dispatch(addNote(note))
    };
})(AddNote);

export default connectObject;

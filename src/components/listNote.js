import React from 'react';
import { connect } from 'react-redux';

import DeleteNote from './deleteNote';

class ListNote extends React.Component {
    render() {
        console.log(this.props.notes)
        let allNotes = this.props.notes.map((note, index) => (<li key={index}>{note} : <DeleteNote note={note} noteIndex={index} /></li>) )
        return (
            <ul>
                {allNotes}            
            </ul>
        );
    }
}

export default connect((state) => {
    return { notes: state.addNote }
})(ListNote);
import React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import appStore  from './app.store';

import AddNote from './components/addNote';
import ListNote from './components/listNote';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <header className="App-header">
        <AddNote />
        <ListNote />
      </header>
    </div>
    </Provider>
  );
}

export default App;

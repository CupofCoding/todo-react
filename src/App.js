import React, { Fragment } from 'react';  //Fragments let you group a list of children without adding extra nodes to the DOM.
import './App.css';

//components
import InputTodo from './components/InputTodo';

function App() {
  return <Fragment>
    <div className='container'>
      <InputTodo />
    </div>
  </Fragment>;
}

export default App;

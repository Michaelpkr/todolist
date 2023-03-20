import './App.css';
import { useState } from 'react';
import AddTaskComponent from './AddTask';

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTaskComponent />

    </div>
  );
}

export default App;

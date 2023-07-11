import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';

export interface IState {
  toDoList: {
    name: string,
  }[];
}

function App() {

  const [toDoList, setToDoList] = useState<IState["toDoList"]>([
    {
      name: ""
    }
  ]);

  return (
    <div className="App">
      <AddToDo />
    </div>
  );
}

export default App;

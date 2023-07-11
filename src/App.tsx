import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
export interface IState {
  toDoList: {
    name: string,
  }[];
}

function App() {

  const [toDoList, setToDoList] = useState<IState["toDoList"]>([
    {
      name: "Sweep the floor."
    }
  ]);

  return (
    <div className="App">
      <AddToDo />
      <ToDoList 
        toDoList={toDoList}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
export interface IState {
  toDoList: {
    name: string,
    complete: boolean
  }[];
}

function App() {

  const [toDoList, setToDoList] = useState<IState["toDoList"]>([
    {
      name: "Sweep the floor.",
      complete: false
    },
    {
      name: "Cut the grass",
      complete: false
    }
  ]);

  return (
    <div className="App">
      <AddToDo />
      <ToDoList 
        toDoList={toDoList}
        setToDoList={setToDoList}
      />
    </div>
  );
}

export default App;

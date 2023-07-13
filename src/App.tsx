import React, { useState } from 'react';
import './App.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
export interface IState {
  toDoList: {
    id: number,
    name: string,
    complete: boolean
  }[];
}

function App() {

  const [toDoList, setToDoList] = useState<IState["toDoList"]>([
    {
      id: 1,
      name: "Sweep the floor.",
      complete: false
    },
    {
      id: 2,
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

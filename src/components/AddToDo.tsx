import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  toDoList: Props["toDoList"],
  setToDoList: React.Dispatch<React.SetStateAction<Props["toDoList"]>>;
}

const AddToDo: React.FC<IProps> = ({ toDoList, setToDoList }): JSX.Element => {

  const [newTaskInput, setNewTaskInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNewTaskInput(e.target.value);
  };

  const handleClick = () => {
    interface newTaskObj {
      id: number,
      name: string,
      complete: boolean;
    }

    const newTaskObj = {
      id: toDoList.length + 1,
      name: newTaskInput,
      complete: false
    };

    setToDoList((prevState) => ([ ...prevState, newTaskObj ]));
  };

  return (
    <>
      <textarea
        placeholder="Enter new to-do task"
        value={newTaskInput}
        onChange={handleChange}
        name="new-task"
      />
      <button onClick={handleClick}>Add To-Do</button>
    </>
  );
};

export default AddToDo;
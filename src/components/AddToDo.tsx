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

  return (
    <>
      <textarea
        placeholder="Enter new to-do task"
        value={newTaskInput}
        onChange={handleChange}
        name="new-task"
      />
    </>
  );
};

export default AddToDo;
import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  toDoList: Props["toDoList"],
  setToDoList: React.Dispatch<React.SetStateAction<Props["toDoList"]>>;
}

const AddToDo: React.FC<IProps> = ({ toDoList, setToDoList }): JSX.Element => {

  const [newTaskInput, setNewTaskInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNewTaskInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter") {
      handleClick();
    }
    return;
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

    setToDoList((prevState) => ([...prevState, newTaskObj]));
    setNewTaskInput("");
  };

  return (
    <section className="new-to-do">
      <h1>New To-Do</h1>
      <textarea
        placeholder="Enter new to-do task"
        value={newTaskInput}
        onChange={handleChange}
        name="new-task"
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Add To-Do</button>
    </section>
  );
};

export default AddToDo;
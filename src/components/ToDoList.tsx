import React, { useEffect } from "react";
import { IState as Props } from "../App";

interface IProps {
  toDoList: Props["toDoList"],
  setToDoList: React.Dispatch<React.SetStateAction<Props["toDoList"]>>;
}

const ToDoList: React.FC<IProps> = ({ toDoList, setToDoList }): JSX.Element => {

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    let updatedToDoListDelete = toDoList.filter((taskObj, index: number) => {
      return taskObj.id !== parseInt(e.currentTarget.name);
    });
    setToDoList(updatedToDoListDelete);
  };

  const handleCheck = (e: React.MouseEvent<HTMLInputElement>): void => {
    let updatedToDoListCompleteCheck = toDoList.map((task) => {
      if (task.id === parseInt(e.currentTarget.name) && e.currentTarget.checked) {
        return { ...task, complete: true };
      } else if (task.id === parseInt(e.currentTarget.name) && !e.currentTarget.checked) {
        return { ...task, complete: false };
      }
      return task;
    });
    setToDoList(updatedToDoListCompleteCheck);
  };

  const renderToDoList = (): JSX.Element[] => {
    return toDoList.map((taskObj, index: number) => {
      return (
        <li key={index}>
          {taskObj.name}
          <input name={taskObj.id.toString()} type="checkbox" onClick={handleCheck} />
          <button name={taskObj.id.toString()} onClick={handleDelete}>
            Delete
          </button>
          <button name={taskObj.id.toString()} onClick={handleEdit}>
            Edit
          </button>
        </li>
      );
    });
  };

  // Template
  return (
    <ul>
      {renderToDoList()}
    </ul>
  );
};

export default ToDoList;
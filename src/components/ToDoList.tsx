import React from "react";
import { IState as Props } from "../App";

interface IProps {
  toDoList: Props["toDoList"],
  setToDoList: React.Dispatch<React.SetStateAction<Props["toDoList"]>>;
}

const ToDoList: React.FC<IProps> = ({ toDoList, setToDoList }): JSX.Element => {

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    let updatedToDoList = toDoList.filter((taskObj) => {
      return taskObj.id !== parseInt(e.currentTarget.name);
    });
    setToDoList(updatedToDoList);
  };

  const renderToDoList = (): JSX.Element[] => {
    return toDoList.map((taskObj, index: number) => {
      return (
        <li key={index}>
          {taskObj.name}
          <input name="complete" type="checkbox" />
          <button name={taskObj.id.toString()} onClick={handleDelete}>
            Delete
          </button>
        </li>
      );
    });
  };

  return (
    <ul>
      {renderToDoList()}
    </ul>
  );
};

export default ToDoList;
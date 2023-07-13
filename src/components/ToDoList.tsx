import React from "react";
import { IState as Props } from "../App";

interface IProps {
  toDoList: Props["toDoList"],
  setToDoList: React.Dispatch<React.SetStateAction<Props["toDoList"]>>;
}

const ToDoList: React.FC<IProps> = ({ toDoList, setToDoList }) => {

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let updatedToDoList = toDoList.filter((taskObj) => {
      return taskObj.id !== parseInt(e.currentTarget.name);
    });
    setToDoList(updatedToDoList);
  };

  const renderToDoList = (): JSX.Element[] => {
    return toDoList.map((taskObj) => {
      return (
        <>
          <li key={taskObj.id}>{taskObj.name}</li>
          <input name="complete" type="checkbox" />
          <button name={taskObj.id.toString()} onClick={handleDelete}>Delete</button>
        </>
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
import React from "react";
import { IState as Props } from "../App";

interface IProps {
  toDoList: Props["toDoList"],
  setToDoList: React.Dispatch<React.SetStateAction<Props["toDoList"]>>;
}

const ToDoList: React.FC<IProps> = ({ toDoList, setToDoList }) => {

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let arr = toDoList.filter((i: any) => {
      return i.id !== parseInt(e.currentTarget.name);
    });
    setToDoList(arr);
  };

  const renderToDoList = (): JSX.Element[] => {
    return toDoList.map((item: any) => {
      return (
        <>
          <li key={item.id}>{item.name}</li>
          <input name="complete" type="checkbox" />
          <button name={item.id} onClick={handleDelete}>Delete</button>
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
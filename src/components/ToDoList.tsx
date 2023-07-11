import React from "react";
import { IState as IProps } from "../App";

const ToDoList: React.FC<IProps> = ({ toDoList }) => {
  let count = 0;
  const renderToDoList = (): JSX.Element[] => {
    return toDoList.map((item) => {
      return (<li className="List-item" key={count++}>{item.name}</li>);
    });
  };
  return (
    <ul>
      {renderToDoList()}
    </ul>
  );
};

export default ToDoList;
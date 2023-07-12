import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  toDoList: Props["toDoList"],
  setToDoList: React.Dispatch<React.SetStateAction<Props["toDoList"]>>;
}

const ToDoList: React.FC<IProps> = ({ toDoList, setToDoList }) => {

  const renderToDoList = (): JSX.Element[] => {

    return toDoList.map((item: any, index: number) => {
      return (
        <>
          <li key={index}>{item.name}</li>
          <input name="complete" type="checkbox"/>
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
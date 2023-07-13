import React from 'react';
import { IState as Props } from '../App';

interface IProps {
  toDoList: Props["toDoList"],
  setToDoList: React.Dispatch<React.SetStateAction<Props["toDoList"]>>
}

const AddToDo: React.FC<IProps> = ({ toDoList, setToDoList }): JSX.Element => {

  return (
    <>
    </>
  );
};

export default AddToDo;
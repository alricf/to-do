import React, { useState, useEffect } from "react";
import { IState as Props } from "../App";

interface IProps {
  toDoList: Props["toDoList"],
  setToDoList: React.Dispatch<React.SetStateAction<Props["toDoList"]>>;
}

const ToDoList: React.FC<IProps> = ({ toDoList, setToDoList }): JSX.Element => {

  const [editTask, setEditTask] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    console.log(editTask);
  }, [editTask]);

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

  const handleEdit = (index: number): void => {
    setEditIndex(index);
  };

  const handleEditOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setEditTask(e.target.value);
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
          {editIndex === index ? (
            <textarea
              value={editTask}
              onChange={handleEditOnChange}
              name="edit-task"
            />
          ) : (
            <button name={taskObj.id.toString()} onClick={() => handleEdit(index)}>
              Edit
            </button>
          )}
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
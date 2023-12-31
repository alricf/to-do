import React, { useState, useEffect } from "react";
import { IState as Props } from "../App";

interface IProps {
  toDoList: Props["toDoList"],
  setToDoList: React.Dispatch<React.SetStateAction<Props["toDoList"]>>;
}

const ToDoList: React.FC<IProps> = ({ toDoList, setToDoList }): JSX.Element => {

  const [editTask, setEditTask] = useState<string>("");
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

  const handleEditSave = (index: number) => {
    const newToDoListObj = [...toDoList];
    newToDoListObj[index].name = editTask;
    setToDoList(newToDoListObj);
    setEditIndex(null);
  };

  const renderToDoList = (): JSX.Element[] => {
    return toDoList.map((taskObj, index: number) => {
      return (
        <li key={index}>
          {`➔ ${taskObj.name}`}
          {
            editIndex === null &&
            <input
              name={taskObj.id.toString()}
              type="checkbox"
              onClick={handleCheck}
            />
          }
          {
            taskObj.complete === true &&
            <button name={taskObj.id.toString()} onClick={handleDelete}>
              Delete
            </button>
          }
          {((editIndex === index) && (taskObj.complete === false)) && (
            <div className="edit-task">
              <textarea
                value={editTask}
                onChange={handleEditOnChange}
                name="edit-task"
              />
              <button onClick={() => handleEditSave(index)}>Save</button>
              <button onClick={() => { setEditIndex(null); }}>Cancel</button>
            </div>
          )}
          {((editIndex === null) && (taskObj.complete === false)) && (
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
    <section className="to-do-list">
      {toDoList.length > 0 ? (
        <>
          <h1>To-Do List</h1>
          <ul>
            {renderToDoList()}
          </ul>
        </>
      ) : (
        <h1 id="empty-list">
          To-Do List empty : Add a to-do task
        </h1>
      )}
    </section>
  );
};

export default ToDoList;
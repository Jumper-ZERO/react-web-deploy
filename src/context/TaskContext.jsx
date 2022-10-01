import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, { ...task, id: tasks.length }]);
  }

  function deleteTask(taskID) {
    setTasks(tasks.filter((task) => task.id !== taskID));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

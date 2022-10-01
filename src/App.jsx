import React from "react";
import TaskForm from "./components/TaskFom";
import TaskList from "./components/TasksList";

const App = () => {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
};

export default App;

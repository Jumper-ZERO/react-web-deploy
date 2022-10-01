import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskFom = () => {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setTitle("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2-xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          name="textArea"
          id="tA"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        ></textarea>
        <button
        className="bg-indigo-500 px-3 py-1"
        >Guardar</button>
      </form>
    </div>
  );
};

export default TaskFom;

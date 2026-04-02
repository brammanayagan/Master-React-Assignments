import { useEffect, useState } from "react";

function Assgn15() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (!newTask) return;

    setTasks((prev) => [...prev, { id: Date.now(), text: newTask }]);

    setNewTask("");
  };

  return (
    <div>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border-2"
      />

      <button onClick={handleAdd} className="bg-gray-300 rounded p-1 w-15">
        Add
      </button>

      {tasks.map((task) => (
        <div key={task.id}>{task.text}</div>
      ))}
    </div>
  );
}

export default Assgn15;

import { useEffect, useState } from "react";

const Assgn32 = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState([]);

  // ----------------------------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("data"));
      if (stored) {
        setTask(stored);
      }
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(task));
  }, [task]);

  // ----------------------------------------------------------------------------------------------------------------------------------------

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  // ----------------------------------------------------------------------------------------------------------------------------------------

  const handleAdd = (e) => {
    e.preventDefault();

    const newTask = { id: Date.now(), title: title.trim(), iscompleted: false };

    setTask((prev) => [...prev, newTask]);

    setTitle("");
  };

  // ----------------------------------------------------------------------------------------------------------------------------------------

  const handleDelete = (delId) => {
    setTask((prev) => prev.filter((e) => e.id !== delId));
  };

  // ----------------------------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="flex-1 border p-2 rounded">
        <input
          className="flex-1 border p-2 rounded"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {task.map((e) => (
          <div
            className="flex justify-between items-center border p-2 rounded"
            key={e.id}
          >
            <span>{e.title}</span>
            <button className="text-red-500" onClick={() => handleDelete(e.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Assgn32;

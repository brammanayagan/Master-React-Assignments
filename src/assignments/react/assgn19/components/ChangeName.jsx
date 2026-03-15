import { useState } from "react";

const ChangeName = () => {
  const [name, setName] = useState("CSS");

  const handleName = () => {
    setName("TailwindCSS");
  };

  return (
    <>
      <div className="border p-4">
        <p>{name}</p>

        <button
          onClick={handleName}
          className="bg-green-500 px-3 py-1 text-white"
        >
          Change Name
        </button>
      </div>
    </>
  );
};
export default ChangeName;

import { useState } from "react";

const ToggleStatus = () => {
  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <div className="border-2 p-6 rounded space-y-4">
        <h2 className="text-xl font-bold">Toggle Text</h2>

        <button
          onClick={handleToggle}
          className="bg-purple-500 px-4 py-2 rounded"
        >
          {show ? "Hide" : "Show"}
        </button>

        {show && <p>This text can be hidden</p>}
      </div>
    </>
  );
};

export default ToggleStatus;

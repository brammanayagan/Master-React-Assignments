import { useState } from "react";

const ToggleStatus = () => {
  const [status, setStatus] = useState(true);

  const handleToggle = () => {
    setStatus(!status);
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold mb-2">Status</h2>

      <p className="mb-3">{status ? "Online" : "Offline"}</p>

      <button
        onClick={handleToggle}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Toggle Status
      </button>
    </div>
  );
};

export default ToggleStatus;

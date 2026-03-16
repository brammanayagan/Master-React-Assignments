import { useState } from "react";

const CounterUpdate = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold mb-2">Counter</h2>

      <p className="mb-3">Count: {count}</p>

      <div className="flex gap-2">
        <button
          onClick={handleIncrease}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Increase
        </button>

        <button
          onClick={handleDecrease}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Decrease
        </button>

        <button
          onClick={handleReset}
          className="bg-gray-600 text-white px-3 py-1 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterUpdate;

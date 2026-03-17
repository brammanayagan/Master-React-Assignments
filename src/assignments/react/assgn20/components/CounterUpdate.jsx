import { useState } from "react";

const CounterUpdate = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <div className="border-2 p-6 rounded space-y-4">
        <h2 className="text-xl font-bold">Counter Update</h2>

        <p className="text-lg">{count}</p>

        <div className="flex gap-4">
          <button
            onClick={handleIncrease}
            className="bg-green-500 px-4 py-2 rounded"
          >
            Increase
          </button>

          <button
            onClick={handleDecrease}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Decrease
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterUpdate;

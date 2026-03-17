import { useState } from "react";

const CounterIncreaseTwice = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseTwice = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="border-2 p-6 rounded space-y-4">
        <h2 className="text-xl font-bold">Increase Twice</h2>

        <p className="text-lg">{count}</p>

        <button
          onClick={handleIncreaseTwice}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Increase Twice
        </button>
      </div>
    </>
  );
};

export default CounterIncreaseTwice;

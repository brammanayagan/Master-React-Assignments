import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="border p-4">
        <h2 className="font-bold">Counter</h2>

        <p>{count}</p>

        <div className="flex gap-2">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 px-3 py-1 text-white"
          >
            Increase
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 px-3 py-1 text-white"
          >
            Decrease
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 px-3 py-1 text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
export default Counter;

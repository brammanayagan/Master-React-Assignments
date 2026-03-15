import { useState } from "react";

const EvenOdd = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="border p-4">
        <p>{count}</p>

        <p>{count % 2 === 0 ? "Even" : "Odd"}</p>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 px-3 py-1 text-white"
        >
          Increase
        </button>
      </div>
    </>
  );
};
export default EvenOdd;

import React, { useState, useMemo } from "react";

const HeavySum = () => {
  const [num, setNum] = useState(5);
  const [dummy, setDummy] = useState(false);

  const heavySum = (n) => {
    console.log("Calculating...");
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < 1000000; j++) {}
      sum += i;
    }

    return sum;
  };

  const result = useMemo(() => heavySum(num), [num]);

  return (
    <>
      <div className="p-4 border rounded-lg shadow-sm bg-white space-y-3">
        <h3 className="text-lg font-semibold">Heavy Sum</h3>

        <p className="text-gray-600">Number: {num}</p>
        <p className="font-medium">Result: {result}</p>

        <div className="flex gap-2">
          <button
            onClick={() => setNum(num + 1)}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Increase
          </button>

          <button
            onClick={() => setDummy(!dummy)}
            className="px-3 py-1 bg-gray-500 text-white rounded"
          >
            Re-render
          </button>
        </div>
      </div>
    </>
  );
};

export default HeavySum;

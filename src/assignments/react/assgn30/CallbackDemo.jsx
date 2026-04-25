import React, { useState, useCallback } from "react";

const Child = React.memo(({ calculate }) => {
  console.log("Child Rendered");

  return (
    <button
      onClick={() => alert(calculate(5))}
      className="px-3 py-1 bg-green-500 text-white rounded"
    >
      Calculate Square
    </button>
  );
});

const CallbackDemo = () => {
  const [dark, setDark] = useState(false);

  const calculateSquare = useCallback((num) => {
    let result = 0;
    for (let i = 0; i < num; i++) {
      result += num;
    }
    return result;
  }, []);

  return (
    <div
      className={`${dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} p-4 rounded-lg`}
    >
      <h3 className="text-lg font-semibold mb-2">useCallback Demo</h3>

      <button
        onClick={() => setDark((d) => !d)}
        className="px-3 py-1 bg-gray-700 text-white rounded mb-3"
      >
        Toggle Theme
      </button>

      <Child calculate={calculateSquare} />
    </div>
  );
};

export default CallbackDemo;

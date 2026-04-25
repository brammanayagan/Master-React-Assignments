import { useState, useMemo } from "react";

const SortMemo = () => {
  const [numbers, setNumbers] = useState([]);
  const [dark, setDark] = useState(false);

  const generateNumbers = () => {
    const arr = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100),
    );
    setNumbers(arr);
  };

  const sortedNumbers = useMemo(() => {
    console.log("Sorting...");
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  return (
    <div
      className={`${dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} p-4 rounded-lg`}
    >
      <h3 className="text-lg font-semibold mb-2">Sort Numbers</h3>

      <div className="flex gap-2 mb-3">
        <button
          onClick={generateNumbers}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Generate
        </button>

        <button
          onClick={() => setDark((d) => !d)}
          className="px-3 py-1 bg-gray-700 text-white rounded"
        >
          Toggle Theme
        </button>
      </div>

      <p className="text-sm">Original: {numbers.join(", ")}</p>
      <p className="text-sm font-medium">Sorted: {sortedNumbers.join(", ")}</p>
    </div>
  );
};

export default SortMemo;

import { useState, useMemo } from "react";

const SearchMemo = () => {
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  const names = useMemo(() => {
    return Array.from({ length: 5000 }, (_, i) => `User${i}`);
  }, []);

  const filtered = useMemo(() => {
    console.log("Filtering...");
    return names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, names]);

  return (
    <div
      className={`${dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} p-4 rounded-lg`}
    >
      <h3 className="text-lg font-semibold mb-2">Search Filter</h3>

      <div className="flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Search..."
          className="border px-2 py-1 rounded text-black"
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setDark((d) => !d)}
          className="px-3 py-1 bg-gray-700 text-white rounded"
        >
          Toggle Theme
        </button>
      </div>

      <p className="text-sm">Results: {filtered.slice(0, 5).join(", ")}</p>
    </div>
  );
};

export default SearchMemo;

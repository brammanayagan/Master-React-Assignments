import { useState } from "react";

const ToggleTheme = () => {
  const [dark, setDark] = useState(false);

  return (
    <>
      <div className={dark ? "bg-black text-white p-4" : "bg-gray-200 p-4"}>
        <button
          onClick={() => setDark(!dark)}
          className="bg-blue-500 px-3 py-1 text-white"
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
};
export default ToggleTheme;

import { useState } from "react";

const TextLive = () => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="border p-4">
        <input value={text} onChange={handleText} className="border p-1" />

        <p className="mt-2">{text}</p>
      </div>
    </>
  );
};
export default TextLive;

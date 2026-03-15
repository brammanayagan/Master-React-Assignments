import { useState } from "react";

const TextLive = () => {
  const [text, setText] = useState("");

  return (
    <>
      <div className="border p-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-1"
        />

        <p className="mt-2">{text}</p>
      </div>
    </>
  );
};
export default TextLive;

import { useState } from "react";

const RemoveSkill = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "React"]);

  const removeLast = () => {
    setSkills(skills.slice(0, -1));
  };

  return (
    <>
      <div className="border p-4">
        {skills.map((s, i) => (
          <p key={i}>{s}</p>
        ))}

        <button
          onClick={removeLast}
          className="bg-red-500 px-3 py-1 text-white"
        >
          Remove Last
        </button>
      </div>
    </>
  );
};
export default RemoveSkill;

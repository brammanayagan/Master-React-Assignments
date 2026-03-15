import { useState } from "react";

const AddSkill = () => {
  const [skills, setSkills] = useState(["HTML", "CSS"]);

  return (
    <>
      <div className="border p-4">
        {skills.map((s, i) => (
          <p key={i}>{s}</p>
        ))}

        <button
          onClick={() => setSkills([...skills, "React"])}
          className="bg-green-600 px-3 py-1 text-white"
        >
          Add Skill
        </button>
      </div>
    </>
  );
};
export default AddSkill;

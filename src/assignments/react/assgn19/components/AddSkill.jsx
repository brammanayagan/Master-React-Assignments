import { useState } from "react";

const AddSkill = () => {
  const [skills, setSkills] = useState(["HTML", "CSS"]);

  const handleSkills = () => {
    setSkills([...skills, "React"]);
  };

  return (
    <>
      <div className="border p-4">
        {skills.map((skill, i) => (
          <p key={i}>{skill}</p>
        ))}

        <button
          onClick={handleSkills}
          className="bg-green-600 px-3 py-1 text-white"
        >
          Add Skill
        </button>
      </div>
    </>
  );
};
export default AddSkill;

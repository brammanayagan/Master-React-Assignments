import { useState } from "react";

const SkillsUpdate = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);

  const [skillInput, setSkillInput] = useState("");

  const handleChange = (e) => {
    setSkillInput(e.target.value);
  };

  const handleAddSkill = () => {
    setSkills((prev) => [...prev, skillInput]);

    setSkillInput("");
  };

  return (
    <>
      <div className="border-2 p-6 rounded space-y-4">
        <h2 className="text-xl font-bold">Skills List</h2>

        <input
          type="text"
          value={skillInput}
          onChange={handleChange}
          className="bg-gray-200 text-black px-2 py-1 rounded"
          placeholder="Enter skill"
        />

        <button
          onClick={handleAddSkill}
          className="bg-green-500 px-4 py-2 rounded"
        >
          Add Skill
        </button>

        <ul className="list-disc pl-6">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SkillsUpdate;

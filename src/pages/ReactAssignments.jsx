import { useNavigate } from "react-router-dom";

const ReactAssignments = () => {
  const navigate = useNavigate();

  const assignments = [];

  for (let i = 10; i <= 40; i++) {
    assignments.push(i);
  }

  return (
    <div className="p-10 grid grid-cols-2 gap-4">
      {assignments.map((num) => (
        <div
          key={num}
          onClick={() => navigate(`/react/${num}`)}
          className="bg-gray-700 text-white p-6 rounded cursor-pointer"
        >
          React Assignment {num}
        </div>
      ))}
    </div>
  );
};

export default ReactAssignments;

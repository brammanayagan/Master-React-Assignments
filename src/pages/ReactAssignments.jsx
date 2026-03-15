import { useNavigate } from "react-router-dom";

const ReactAssignments = () => {
  const navigate = useNavigate();

  const assignments = Array.from({ length: 20 }, (_, i) => i + 1);

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

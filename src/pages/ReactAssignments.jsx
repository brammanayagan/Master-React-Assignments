import { useNavigate } from "react-router-dom";

const ReactAssignments = () => {
  const navigate = useNavigate();

  const assignments = [];

  for (let i = 14; i <= 40; i++) {
    assignments.push(i);
  }

  return (
    <div className="flex flex-col items-center py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">React Assignments</h1>
        <p className="text-slate-500 max-w-lg mx-auto">
          Browse through the catalog of React implementations. Click on an assignment to view its solution.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {assignments.map((num) => (
          <div
            key={num}
            onClick={() => navigate(`/react/${num}`)}
            className="group flex flex-col justify-center items-center bg-white border border-slate-200 p-8 rounded-2xl cursor-pointer shadow-sm hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1 transition-all duration-300"
          >
             <span className="text-3xl font-extrabold text-slate-200 group-hover:text-cyan-500 transition-colors duration-300 mb-2">#{num}</span>
             <span className="font-semibold text-lg text-slate-700 group-hover:text-slate-900 transition-colors duration-300 text-center">React Assignment {num}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactAssignments;

import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-20 px-4">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Full Stack Dashboard</h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto">
          Select a specific track below to view assignment solutions, explore projects, and interact with live demos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* React Card */}
        <div
          onClick={() => navigate("/react")}
          className="group relative overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl p-10 cursor-pointer shadow-lg shadow-blue-500/20 transform hover:-translate-y-2 hover:shadow-blue-500/40 transition-all duration-300 min-h-[220px] flex flex-col justify-end"
        >
          <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50"/>
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-white z-10">React</h2>
          <p className="text-cyan-100 mt-2 z-10 text-lg font-medium">Explore Frontend UI & Components</p>
        </div>

        {/* JavaScript Card */}
        <div
          onClick={() => navigate("/javascript")}
          className="group relative overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-10 cursor-pointer shadow-lg shadow-orange-500/20 transform hover:-translate-y-2 hover:shadow-orange-500/40 transition-all duration-300 min-h-[220px] flex flex-col justify-end"
        >
          <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
             <svg width="150" height="150" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="20"/></svg>
          </div>
          <h2 className="text-4xl font-bold text-white z-10">JavaScript</h2>
          <p className="text-amber-100 mt-2 z-10 text-lg font-medium">Vanilla Scripts & Logic</p>
        </div>

        {/* Express Card */}
        <div
          onClick={() => navigate("/express")}
          className="group relative overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl p-10 cursor-pointer shadow-lg shadow-slate-500/20 transform hover:-translate-y-2 hover:shadow-slate-500/40 transition-all duration-300 min-h-[220px] flex flex-col justify-end"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
             <svg width="150" height="150" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M0 50 L50 0 L100 50 L50 100 Z"/></svg>
          </div>
          <h2 className="text-4xl font-bold text-white z-10">Express JS</h2>
          <p className="text-gray-300 mt-2 z-10 text-lg font-medium">Backend Routing & APIs</p>
        </div>

        {/* Mongo Card */}
        <div
          onClick={() => navigate("/mongo")}
          className="group relative overflow-hidden bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl p-10 cursor-pointer shadow-lg shadow-green-500/20 transform hover:-translate-y-2 hover:shadow-green-500/40 transition-all duration-300 min-h-[220px] flex flex-col justify-end"
        >
          <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
            <svg width="120" height="150" viewBox="0 0 80 100" fill="white" xmlns="http://www.w3.org/2000/svg"><ellipse cx="40" cy="50" rx="40" ry="50"/></svg>
          </div>
          <h2 className="text-4xl font-bold text-white z-10">MongoDB</h2>
          <p className="text-emerald-100 mt-2 z-10 text-lg font-medium">Database & Mongoose Models</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200 shadow-sm text-slate-800 p-4 flex justify-between items-center transition-all duration-300">
      <div className="text-2xl font-black tracking-tight text-black mx-4 md:mx-10 drop-shadow-sm">
        <Link to="/">BRAMMANAYAGAN S</Link>
      </div>
      <div className="hidden md:flex gap-6 mx-7 font-medium text-slate-600">
        <Link to="/" className="hover:text-blue-600 transition-colors duration-200 p-2">Home</Link>
        <Link to="/react" className="hover:text-blue-600 transition-colors duration-200 p-2">React Assignments</Link>
        <Link to="/javascript" className="hover:text-blue-600 transition-colors duration-200 p-2">JavaScript</Link>
        <Link to="/express" className="hover:text-blue-600 transition-colors duration-200 p-2">Express</Link>
        <Link to="/mongo" className="hover:text-blue-600 transition-colors duration-200 p-2">Mongo</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold mx-10">
        <h1>BRAMMANAYAGAN S</h1>
      </div>
      <div className="flex gap-4 mx-7">
        <Link to="/">Home</Link>

        <Link to="/react">React Assignments</Link>

        <Link to="/javascript">JavaScript</Link>

        <Link to="/express">Express</Link>

        <Link to="/mongo">Mongo</Link>
      </div>
    </div>
  );
};

export default Navbar;

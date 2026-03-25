import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-10 flex gap-6 justify-center">
        <div
          onClick={() => navigate("/react")}
          className="bg-green-500 text-5xl p-10 text-white rounded cursor-pointer w-150 h-70"
        >
          React
        </div>

        <div
          onClick={() => navigate("/javascript")}
          className="bg-blue-200 p-10 text-white rounded cursor-pointer w-150 h-70"
        >
          JavaScript
        </div>

        <div
          onClick={() => navigate("/express")}
          className="bg-purple-200 p-10 text-white rounded cursor-pointer w-150 h-70"
        >
          Express
        </div>

        <div
          onClick={() => navigate("/mongo")}
          className="bg-orange-200 p-10 text-white rounded cursor-pointer w-150 h-70"
        >
          Mongo
        </div>
      </div>
    </>
  );
};

export default Landing;

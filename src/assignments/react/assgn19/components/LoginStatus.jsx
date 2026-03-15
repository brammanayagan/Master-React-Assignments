import { useState } from "react";

const LoginStatus = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <div className="border p-4">
        <p>{login ? "Welcome User" : "Please Login"}</p>

        <button
          onClick={() => setLogin(!login)}
          className="bg-blue-500 px-3 py-1 text-white"
        >
          Toggle Login
        </button>
      </div>
    </>
  );
};
export default LoginStatus;

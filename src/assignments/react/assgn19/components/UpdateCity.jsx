import { useState } from "react";

const UpdateCity = () => {
  const [user, setUser] = useState({
    name: "Arun",
    role: "Developer",
    city: "Chennai",
  });

  return (
    <>
      <div className="border p-4">
        <p>{user.city}</p>

        <button
          onClick={() => setUser({ ...user, city: "Bangalore" })}
          className="bg-orange-500 px-3 py-1 text-white"
        >
          Change City
        </button>
      </div>
    </>
  );
};
export default UpdateCity;

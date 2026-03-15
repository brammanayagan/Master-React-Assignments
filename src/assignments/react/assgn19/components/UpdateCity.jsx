import { useState } from "react";

const UpdateCity = () => {
  const [user, setUser] = useState({
    name: "Tom",
    role: "Developer",
    city: "Chennai",
  });

  const handleCity = () => {
    setUser({ ...user, city: "Bangalore" });
  };

  return (
    <>
      <div className="border p-4">
        <p>{user.city}</p>

        <button
          onClick={handleCity}
          className="bg-orange-500 px-3 py-1 text-white"
        >
          Change City
        </button>
      </div>
    </>
  );
};
export default UpdateCity;

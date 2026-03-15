import { useState } from "react";

const UpdateAge = () => {
  const [user, setUser] = useState({
    name: "Bramma",
    age: 23,
  });

  const handleAge = () => {
    setUser({ ...user, age: 24 });
  };

  return (
    <>
      <div className="border p-4">
        <p>
          {user.name} - {user.age}
        </p>

        <button
          onClick={handleAge}
          className="bg-purple-500 px-3 py-1 text-white"
        >
          Update Age
        </button>
      </div>
    </>
  );
};
export default UpdateAge;

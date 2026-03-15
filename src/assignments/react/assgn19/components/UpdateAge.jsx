import { useState } from "react";

const UpdateAge = () => {
  const [user, setUser] = useState({
    name: "Arun",
    age: 20,
  });

  return (
    <>
      <div className="border p-4">
        <p>
          {user.name} - {user.age}
        </p>

        <button
          onClick={() => setUser({ ...user, age: 25 })}
          className="bg-purple-500 px-3 py-1 text-white"
        >
          Update Age
        </button>
      </div>
    </>
  );
};
export default UpdateAge;

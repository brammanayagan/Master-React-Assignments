import { useState } from "react";

const UpdateUserName = () => {
  const [user, setUser] = useState({
    name: "John",
    age: 25,
  });

  const handleUpdateName = () => {
    setUser({
      ...user,
      name: "Sudhan",
    });
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold mb-2">User Info</h2>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <button
        onClick={handleUpdateName}
        className="bg-purple-500 text-white px-3 py-1 rounded mt-2"
      >
        Update Name
      </button>
    </div>
  );
};

export default UpdateUserName;

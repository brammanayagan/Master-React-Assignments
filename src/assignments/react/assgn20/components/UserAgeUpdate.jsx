import { useState } from "react";

const UserAgeUpdate = () => {
  const [user, setUser] = useState({
    name: "Bramma",
    age: 23,
  });

  const handleIncreaseAge = () => {
    setUser((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));
  };

  return (
    <>
      <div className="border-2 p-6 rounded space-y-4">
        <h2 className="text-xl font-bold">User Update</h2>

        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>

        <button
          onClick={handleIncreaseAge}
          className="bg-orange-500 px-4 py-2 rounded"
        >
          Increase Age
        </button>
      </div>
    </>
  );
};

export default UserAgeUpdate;

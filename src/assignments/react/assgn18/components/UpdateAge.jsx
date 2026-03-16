import { useState } from "react";

const UpdateAge = () => {
  const [person, setPerson] = useState({
    name: "Bramma",
    age: 23,
    city: "Chennai",
  });

  const handleIncreaseAge = () => {
    setPerson({
      ...person,
      age: person.age + 1,
    });
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold mb-2">Person Details</h2>

      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>

      <button
        onClick={handleIncreaseAge}
        className="bg-green-600 text-white px-3 py-1 rounded mt-2"
      >
        Increase Age
      </button>
    </div>
  );
};

export default UpdateAge;

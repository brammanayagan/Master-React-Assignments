import EmployeeCard from "./EmployeeCard";

const EmployeeContainer = () => {
  const employee = {
    name: "Brammanayagan S",
    role: "Frontend Developer",
    location: "Chennai",
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold mb-3">Employee Profile</h2>

      <EmployeeCard employee={employee} />
    </div>
  );
};

export default EmployeeContainer;

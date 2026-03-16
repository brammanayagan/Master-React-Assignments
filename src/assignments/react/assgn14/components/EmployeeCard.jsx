const EmployeeCard = ({ employee }) => {
  return (
    <div className="border p-4 rounded bg-gray-100 w-64">
      <h3 className="font-semibold">{employee.name}</h3>

      <p>{employee.role}</p>

      <p>{employee.location}</p>
    </div>
  );
};

export default EmployeeCard;

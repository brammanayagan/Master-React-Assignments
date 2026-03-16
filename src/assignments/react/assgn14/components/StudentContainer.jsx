import StudentMarks from "./StudentMarks";

const StudentContainer = () => {
  const students = [
    { name: "Raj", marks: 55 },
    { name: "Kumar", marks: 30 },
    { name: "Vishwa", marks: 70 },
  ];

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold mb-3">Student Marks</h2>

      <StudentMarks students={students} />
    </div>
  );
};

export default StudentContainer;

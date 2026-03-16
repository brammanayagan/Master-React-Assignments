const StudentMarks = ({ students }) => {
  return (
    <div>
      {students.map((s, i) => {
        const result = s.marks >= 40 ? "Pass" : "Fail";

        return (
          <p key={i}>
            {s.name} - {s.marks} - {result}
          </p>
        );
      })}
    </div>
  );
};

export default StudentMarks;

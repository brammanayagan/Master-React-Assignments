import UserListContainer from "./components/UserListContainer";
import ProductContainer from "./components/ProductContainer";
import StudentContainer from "./components/StudentContainer";
import EmployeeContainer from "./components/EmployeeContainer";

const Assgn14 = () => {
  return (
    <div className="p-10 space-y-10">
      <h1 className="text-2xl font-bold">Assignment 14</h1>

      <UserListContainer />
      <ProductContainer />
      <StudentContainer />
      <EmployeeContainer />
    </div>
  );
};

export default Assgn14;

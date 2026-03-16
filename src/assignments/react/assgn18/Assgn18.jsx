import CounterUpdate from "./components/CounterUpdate";
import ToggleStatus from "./components/ToggleStatus";
import UpdateUserName from "./components/UpdateUserName";
import UpdateAge from "./components/UpdateAge";
import ProfileUpdate from "./components/ProfileUpdate";

const Assgn18 = () => {
  return (
    <div className="p-10 space-y-8">
      <h1 className="text-2xl font-bold">Assignment 18</h1>

      <CounterUpdate />
      <ToggleStatus />
      <UpdateUserName />
      <UpdateAge />
      <ProfileUpdate />
    </div>
  );
};

export default Assgn18;

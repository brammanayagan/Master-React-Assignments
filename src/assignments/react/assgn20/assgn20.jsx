import CounterIncreaseTwice from "./components/CounterIncreaseTwice";
import CounterUpdate from "./components/CounterUpdate";
import SkillsUpdate from "./components/SkillsUpdate";
import ToggleStatus from "./components/ToggleStatus";
import UserAgeUpdate from "./components/UserAgeUpdate";

const Assgn20 = () => {
  return (
    <>
      <div className="p-10 space-y-10">
        <CounterUpdate />

        <CounterIncreaseTwice />

        <ToggleStatus />

        <SkillsUpdate />

        <UserAgeUpdate />
      </div>
    </>
  );
};

export default Assgn20;

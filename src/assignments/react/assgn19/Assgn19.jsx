import Counter from "./components/Counter";
import TextLive from "./components/TextLive";
import ToggleTheme from "./components/ToggleTheme";
import LoginStatus from "./components/LoginStatus";
import ChangeName from "./components/ChangeName";
import UpdateAge from "./components/UpdateAge";
import UpdateCity from "./components/UpdateCity";
import AddSkill from "./components/AddSkill";
import RemoveSkill from "./components/RemoveSkill";
import EvenOdd from "./components/EvenOdd";

export default function Assgn19() {
  return (
    <div className="p-10 space-y-10">
      <Counter />
      <TextLive />
      <ToggleTheme />
      <LoginStatus />
      <ChangeName />
      <UpdateAge />
      <UpdateCity />
      <AddSkill />
      <RemoveSkill />
      <EvenOdd />
    </div>
  );
}

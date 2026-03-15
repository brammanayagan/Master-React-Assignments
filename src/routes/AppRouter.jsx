import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import ReactAssignments from "../pages/ReactAssignments";
import Assgn19 from "../assignments/react/assgn19/Assgn19";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/react" element={<ReactAssignments />} />

      <Route path="/react/19" element={<Assgn19 />} />
    </Routes>
  );
};

export default AppRoute;

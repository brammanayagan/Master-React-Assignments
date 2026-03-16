import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import ReactAssignments from "../pages/ReactAssignments";
import Assgn19 from "../assignments/react/assgn19/Assgn19";
import Assgn18 from "../assignments/react/assgn18/Assgn18";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/react" element={<ReactAssignments />} />

      <Route path="/react/19" element={<Assgn19 />} />
      <Route path="/react/18" element={<Assgn18 />} />
    </Routes>
  );
};

export default AppRoute;

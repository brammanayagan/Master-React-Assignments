import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import ReactAssignments from "../pages/ReactAssignments";
import Assgn19 from "../assignments/react/assgn19/Assgn19";
import Assgn18 from "../assignments/react/assgn18/Assgn18";
import Assgn14 from "../assignments/react/assgn14/Assgn14";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/react" element={<ReactAssignments />} />

      <Route path="/react/19" element={<Assgn19 />} />
      <Route path="/react/18" element={<Assgn18 />} />
      <Route path="/react/14" element={<Assgn14 />} />
    </Routes>
  );
};

export default AppRoute;

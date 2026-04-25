import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import ReactAssignments from "../pages/ReactAssignments";
import Assgn19 from "../assignments/react/assgn19/Assgn19";
import Assgn18 from "../assignments/react/assgn18/Assgn18";
import Assgn14 from "../assignments/react/assgn14/Assgn14";
import Assgn20 from "../assignments/react/assgn20/assgn20";
import Assgn21 from "../assignments/react/assgn21/Assgn21";
import Assgn23 from "../assignments/react/assgn23/Assgn23";
import Assgn25 from "../assignments/react/assgn25/Assgn25";
import Assgn26 from "../assignments/react/assgn26/Assgn26";
import Assgn27 from "../assignments/react/assgn27/Assgn27";
import Assgn15 from "../assignments/react/assgn15/Assgn15";
import Assgn32 from "../assignments/react/assgn32/Assgn32";
import Assgn29 from "../assignments/react/assgn29/Assgn29";
import Assgn30 from "../assignments/react/assgn30/Assgn30";
import Assgn28 from "../assignments/react/assgn28/Assgn28";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/react" element={<ReactAssignments />} />

      <Route path="/react/15" element={<Assgn15 />} />
      <Route path="/react/19" element={<Assgn19 />} />
      <Route path="/react/18" element={<Assgn18 />} />
      <Route path="/react/14" element={<Assgn14 />} />
      <Route path="/react/20" element={<Assgn20 />} />
      <Route path="/react/21" element={<Assgn21 />} />
      <Route path="/react/23" element={<Assgn23 />} />
      <Route path="/react/25/*" element={<Assgn25 />} />
      <Route path="/react/26" element={<Assgn26 />} />
      <Route path="/react/27/*" element={<Assgn27 />} />
      <Route path="/react/32" element={<Assgn32 />} />
      <Route path="/react/29" element={<Assgn29 />} />
      <Route path="/react/30" element={<Assgn30 />} />
      <Route path="/react/28" element={<Assgn28 />} />
    </Routes>
  );
};

export default AppRoute;

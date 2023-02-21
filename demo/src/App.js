import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Page1 from "./Components/Page1";
import NavBar from "./Components/NavBar";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import BasicExample from "./Components/BasicExample";

const App = () => {
  return (
    <div>
      <NavBar />
      <h3 className="text-center text-heading" >Apigee X Provisioning Assistance Wizard</h3>
      <Router>
        <Routes>
        <Route path="/" element={<BasicExample />}></Route>
          {/* <Route path="/" element={<Page1 />}></Route> */}
          <Route path="/step1" element={<Page2 />}></Route>
          <Route path="/step2" element={<Page3 />}></Route>
          <Route path="/step3" element={<Page4 />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

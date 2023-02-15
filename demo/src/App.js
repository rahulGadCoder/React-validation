import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Page1 from "./Components/Page1";
import NavBar from "./Components/NavBar";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";

const App = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/step1" element={<Page1 />}></Route>
          <Route path="/step2" element={<Page2 />}></Route>
          <Route path="/step3" element={<Page3 />}></Route>
          <Route path="/step4" element={<Page4 />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Start from "./Start.js";
import Main from "./Main.js";
import AboutUs from "./AboutUs.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
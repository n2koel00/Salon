import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Home from "./pages/Home";
import Page1 from "./pages/Ajankohtaista";
import Page2 from "./pages/Hinnasto";
import Page3 from "./pages/Ajanvaraus";
import Page4 from "./pages/Henkilökunta";
import Page5 from "./pages/Yhteystiedot";
import Page6 from "./pages/Tilat";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

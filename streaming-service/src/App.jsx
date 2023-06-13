import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./pages/Footer";
import ChiSiamo from './pages/ChiSiamo';
import Contattaci from './pages/Contattaci';

function App() {
  return (
    <Router>
      <>
        <Routes>
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/contattaci" element={<Contattaci />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

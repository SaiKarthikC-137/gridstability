import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PredictionForm from "./components/PredictionForm";
import ModelAnalysis from "./components/ModelAnalysis";
import Chatbot from "./components/Chatbot";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<PredictionForm />} />
            <Route path="/model-analysis" element={<ModelAnalysis />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

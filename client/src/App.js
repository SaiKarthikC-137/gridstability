import React from "react";
import { useEffect } from "react";
import "./App.css"; // This imports the main stylesheet, keep it if you have global styles
import PredictionForm from "./components/PredictionForm"; // Import the PredictionForm component

function App() {
  useEffect(() => {
    document.title = "Smart Grid Stability Prediction";
  }, []);
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Model Predictor</h1>
      </header> */}
      <h1>Smart Grid Stability Prediction</h1>
      <main>
        <PredictionForm />
      </main>
    </div>
  );
}

export default App;

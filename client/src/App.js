import React from "react";
import "./App.css"; // This imports the main stylesheet, keep it if you have global styles
import PredictionForm from "./components/PredictionForm"; // Import the PredictionForm component

function App() {
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

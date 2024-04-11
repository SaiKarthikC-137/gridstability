// src/components/PredictionForm.js
import React, { useState } from "react";
import styles from "./PredictionForm.module.css"; // Import the CSS module

function PredictionForm() {
  const [inputs, setInputs] = useState({
    tau1: "",
    tau2: "",
    tau3: "",
    tau4: "",
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    g1: "",
    g2: "",
    g3: "",
    g4: "",
  });
  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const predict = () => {
    const features = Object.values(inputs).map((val) => parseFloat(val));
    const data = { features };

    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setPrediction(data.prediction))
      .catch((error) => {
        console.error("Error:", error);
        setPrediction("Error fetching prediction");
      });
  };

  return (
    <div className={styles.formContainer}>
      <h2>Input Features</h2>
      <form className={styles.predictionForm}>
        {Object.keys(inputs).map((key) => (
          <div key={key} className={styles.inputGroup}>
            <input
              type="text"
              name={key}
              placeholder={key.toUpperCase()}
              value={inputs[key]}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={predict}
          className={styles.predictButton}
        >
          Predict
        </button>
      </form>
      <h3>Prediction Result:</h3>
      <div
        className={styles.predictionResult}
        style={{ color: prediction ? "green" : "red" }}
      >
        {prediction || "Awaiting input..."}
      </div>
    </div>
  );
}

export default PredictionForm;

function predict() {
  const features = [
    parseFloat(document.getElementById("tau1").value),
    parseFloat(document.getElementById("tau2").value),
    parseFloat(document.getElementById("tau3").value),
    parseFloat(document.getElementById("tau4").value),
    parseFloat(document.getElementById("p1").value),
    parseFloat(document.getElementById("p2").value),
    parseFloat(document.getElementById("p3").value),
    parseFloat(document.getElementById("p4").value),
    parseFloat(document.getElementById("g1").value),
    parseFloat(document.getElementById("g2").value),
    parseFloat(document.getElementById("g3").value),
    parseFloat(document.getElementById("g4").value),
  ];

  const data = { features };

  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("predictionResult").textContent = data.prediction;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("predictionResult").textContent =
        "Error fetching prediction";
    });
}

from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf

app = Flask(__name__)
cors = CORS(app)
# Load your trained model
model = tf.keras.models.load_model('my_model.tf')
print('good')


@app.route('/predict', methods=['POST'])
def predict():
    # Get data from Post request
    data = request.get_json()
    print(data)
    features = data['features']
    # Make prediction
    prediction = model.predict([features])[0]
    # Apply threshold
    prediction_class = 'Stable' if prediction > 0.5 else 'Unstable'
    # Send back the prediction
    return jsonify({'prediction': prediction_class})


if __name__ == '__main__':
    app.run(debug=True)

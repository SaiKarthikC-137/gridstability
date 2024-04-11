from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
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
    means = np.array([5.25605072, 5.2488346, 5.25248183, 5.2461366, 3.7502637, -1.24964552, -1.25013591, -1.25048227,
                      0.52429052, 0.52529141, 0.52481541, 0.52561655])
    stds = np.array([2.74287799, 2.74246835, 2.73935338, 2.7430897, 0.75333038, 0.43323333, 0.43255948, 0.43310764,
                     0.27362782, 0.27430814, 0.27440013, 0.27437782])
    # This is your new data point
    new_data_point = np.array(features)  # Replace with actual values
    # Normalize the new data point
    normalized_data_point = (new_data_point - means) / stds
    # Make prediction
    normalized_data_point = normalized_data_point.reshape(1, -1)
    print(normalized_data_point)
    prediction = model.predict(normalized_data_point)[0]
    # Apply threshold
    prediction_class = 'Stable' if prediction > 0.5 else 'Unstable'
    print(prediction_class)
    # Send back the prediction
    return jsonify({'prediction': prediction_class})


if __name__ == '__main__':
    app.run(debug=True)

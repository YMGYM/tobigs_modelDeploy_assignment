from flask import request
from flask import Flask
from flask_cors import CORS # 외부에서 접속해도 에러가 나지 않게 보안 설정 적용
from model import model
import json

app = Flask(__name__)
CORS(app) # 외부에서 접속해도 에러가 나지 않게 보안 설정 적용

""" status check """
@app.route("/")
def index():
    result = {
        'message': 'Status is OK.'
    }
    return json.dumps(result)

""" ------------ """

""" model predict """
@app.route('/predict', methods=['POST'])
def predict_model():

    print("Predict method Start..")
    params = request.get_json()

    pred = model.predict(params['height'], params['weight'])

    result = {
        'message': 'Succefully Predicted',
        'result': pred
    }

    print("Predict Finish ..")
    print(result)

    return json.dumps(result)
""" ------------- """


if __name__ == "__main__":
    app.run();

from joblib import load
import numpy as np


model = load('./model/model_params/bmiRegressor')
    
def predict(height: int, weight: int):
    print("Model Start")
    result = model.predict([[height, weight]])
    print("Model Finish")
    return result.item()
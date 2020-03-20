from flask import Flask, render_template, jsonify, request
import os
import json
from model.modelpredict import Prediction


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home.html')
def home():
    return render_template('home.html')

@app.route('/intake.html')
def intake():
    return render_template('intake.html')

@app.route('/model.html')
def model():
    return render_template('model.html')

@app.route('/_get_data/', methods=['GET','POST'])
def _get_data():

    amb = request.form['Ambulance']
    dru = request.form['Drunk']
    loc = request.form['Location']
    pai = request.form['Pain']
    emo = request.form['Emotion']
    pas = request.form['Passengers']
    fau = request.form['Fault']
    typ = request.form['Type']
    rol = request.form['Roll']

    prediction = Prediction(amb, dru, pai, emo, pas, fau, rol, loc, typ)
    predict_value = prediction.get_value()
    
    # test = Foo()
    # hel = test.trybleh(data)
    # hel.append(predict_value)
   
    return jsonify({'data': predict_value})


if __name__ == "__main__":
    app.run(debug=True)
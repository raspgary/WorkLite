# WorkLite Regression Prediction

import pickle
import numpy as np

class Prediction:
    def __init__(self, amb, dru, pai, emo, pas, fau, rol, loc, typ):
        self.client_data = [0]
        self.client_data.append(1) if amb == 'Yes' else self.client_data.append(0)
        self.client_data.append(1) if dru == 'Yes' else self.client_data.append(0)
        self.client_data.append(float(pai)/10)
        self.client_data.append(float(emo)/10)
        self.client_data.append(int(pas))
        self.client_data.append(1) if fau == 'Yes' else self.client_data.append(0)
        self.client_data.append(1) if rol == 'Yes' else self.client_data.append(0)
        if loc == 'Highway':
            self.client_data.extend([1, 0, 0])
        elif loc == 'Intersection':
            self.client_data.extend([0, 1, 0])
        else:
            self.client_data.extend([0, 0, 1])
        if typ == 'Head on Collision':
            self.client_data.extend([1, 0, 0])
        elif typ == 'Rear End':
            self.client_data.extend([0, 1, 0])
        else:
            self.client_data.extend([0, 0, 1])

    def predict_claim(self, model, lst):
    
        client_data = np.array(lst)
        prediction = model.predict(client_data.reshape(1, -1))
        if prediction <= 0:
            return 0
        else:
            return prediction

    def get_value(self):

        with open('model/modelparams.sav', 'rb') as f:
            model = pickle.load(f, encoding = 'latin1')
        #model = pickle.load(open('model/modelparams.sav', 'rb'))
        predicted_value = self.predict_claim(model, self.client_data)
    
        return round(predicted_value[0], 2)
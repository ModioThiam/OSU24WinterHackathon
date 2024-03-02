# Filename - server.py
# Import flask and datetime module for showing date and time
from flask import Flask
import datetime
# from flask_cors import CORS,cross_origin

x = datetime.datetime.now()
 
# Initializing flask app
app = Flask(__name__)
 
# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
# Route for seeing a data
@app.route('/')
def get_time():
    print("calling")
    # Returning an api for showing in  reactjs
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":x, 
        "programming":"python"
        }
 
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)
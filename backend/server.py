# Filename - server.py
# Import flask and datetime module for showing date and time
from flask import Flask
import datetime
from flask_cors import CORS,cross_origin
import pymongo
from pymongo import MongoClient
from flask import request

# Connects to cluster and database
cluster = MongoClient(
    "mongodb+srv://testUser1:srwJBVVqicTVLHVo@cluster0.ztll2xp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = cluster["BookApp"]
collection = db["users"]

x = datetime.datetime.now()
 
# Initializing flask app
app = Flask(__name__)
 
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
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
 
@app.route('/logbook',methods=["POST"])
def log_book():
    data = request.get_json()
    user_name = data['user_name']
    title = data['title']
    author = data['author']
    rating = data['rating']
    startDate = data['startDate']
    endDate = data['endDate']
    # Adds to book list if there is already an account associated with the user name
    # Only adds the book if it's not already in the books array
    res = collection.find_one_and_update(
        {"user_name": user_name},
        {"$addToSet": {"books": {"title": title, "author": author, "rating": rating, "startDate": startDate, "endDate": endDate}}}
    )
    # Creates a new document if the user doesn't have a document associated with them yet
    if not res:
        collection.insert_one({"user_name":user_name, "books":[{"title":title, "author":author, "rating":rating, "startDate":startDate, "endDate":endDate}]})

     
# Running app
if __name__ == '__main__':
    app.run(debug=True)
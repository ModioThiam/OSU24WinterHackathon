# Filename - server.py
# Import flask and datetime module for showing date and time
from flask import Flask, jsonify
import datetime
from flask_cors import CORS,cross_origin
import pymongo
from pymongo import MongoClient
from flask import request
from google_api import get_book, search_books, get_book_suggestions

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
    title = data['bookTitle']
    author = data['bookAuthor']
    rating = data['bookRating']
    startDate = data['bookStartDate']
    endDate = data['bookEndDate']
    data = get_book(title, author)
    image = data['volumeInfo']['imageLinks']['smallThumbnail']
    # Adds to book list if there is already an account associated with the user name
    # Only adds the book if it's not already in the books array
    res = collection.find_one_and_update(
        {"user_name": user_name},
        {"$addToSet": {"books": {"title": title, "author": author, "rating": rating, "image":image, "startDate": startDate, "endDate": endDate}}}
    )
    # Creates a new document if the user doesn't have a document associated with them yet
    if not res:
        collection.insert_one({"user_name":user_name, "toRead":[], "books":[{"title":title, "author":author, "rating":rating, "image":image,"startDate":startDate, "endDate":endDate}]})
    return {'Name':"geek", 
        "Age":"22",
        "Date":x, 
        "programming":"python"}

@app.route('/getBooks',methods=['GET'])
def get_books():
    # need to find a way to get input string from frontend search bar, and call 
    # search_books() function with that paramter
    seach_term = request.args.get('query')
    print(seach_term)
    data = search_books(seach_term)
    if data:
        print("this is all the data",data)
        return jsonify(data[:6])
    else:
        return jsonify({})
    
    # return jsonify(data[0])

@app.route('/getRecommendations', methods=['GET'])
def get_recommendations():
    author = request.args.get('author')
    category = request.args.get('category')
    print(author,category)
    data = get_book_suggestions(author,category)

    if data:
        print("this is all the data recommendations",len(data))
        return jsonify(data[:6])
    else:
        return jsonify({})


    
# @app.route('/getBookz',methods=['GET'])
# def get_bookz():
#     title = "The Giver"
#     author = "Lois Lowry"
#     print("title and author", title, author)
#     data = get_book(title, author)
#     if data:
#         return jsonify(data)
#     else:
#         return jsonify({})
    
#     # return jsonify(data[0])


@app.route('/readingHistory',methods=['GET'])
def get_history():
    # Gets and returns the user's books array
    res = collection.find({"user_name": "testUser1"})[0]['books']
    return res

@app.route('/addToReadingList',methods=['POST'])
def add_to_reading_list():
    user_name = "testUser1"
    data = request.get_json()
    print("data is ", data)
    title = data['bookTitle']
    authors = data['bookAuthors']
    thumbnail = data['bookThumbnail']

    print("title and authors", title, authors, thumbnail)

        # Adds to book list if there is already an account associated with the user name
    # Only adds the book if it's not already in the books array
    res = collection.find_one_and_update(
        {"user_name": user_name},
        {"$addToSet": {"toRead": {"title": title, "author": authors,"thumbnail":thumbnail}}}
    )
    # Creates a new document if the user doesn't have a document associated with them yet
    if not res:
        collection.insert_one({"user_name":user_name, "toRead": {"title":title, "author":authors,"thumbnail":thumbnail}})

    return {"hi":"hi"}

@app.route('/readingList',methods=['GET'])
def get_reading_list():
    # Gets and returns the user's books array
    res = collection.find({"user_name": "testUser1"})[0]['toRead']
    return res



# Running app
if __name__ == '__main__':
    app.run(debug=True)
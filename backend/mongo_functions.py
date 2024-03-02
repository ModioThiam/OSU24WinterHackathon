import pymongo
from pymongo import MongoClient

# Connects to cluster and database
cluster = MongoClient(
    "mongodb+srv://testUser1:srwJBVVqicTVLHVo@cluster0.ztll2xp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = cluster["BookApp"]
collection = db["users"]


# collection.insert_one({"_id":1, "user_name":"testUser0", "books":[{"title": "The Giver", "author": "Lois Lowry", "year": 1993, "genre": "young adult", "tags": ["dystopian", "fiction"]}, {"title": "Catch-22", "author": "Joseph Heller", "year": 1961, "genre": "war", "tags": ["satire", "fiction"]}]})

def log_book(user_name, title, author, rating, startDate, endDate=None):
    # Adds to book list if there is already an account associated with the user name
    # Only adds the book if it's not already in the books array
    res = collection.find_one_and_update(
        {"user_name": user_name},
        {"$addToSet": {"books": {"title": title, "author": author, "rating": rating, "startDate": startDate, "endDate": endDate}}}
    )
    # Creates a new document if the user doesn't have a document associated with them yet
    if not res:
        collection.insert_one({"user_name":user_name, "books":[{"title":title, "author":author, "rating":rating, "startDate":startDate, "endDate":endDate}]})

def get_books(user_name):
    # Gets and returns the user's books array
    res = collection.find({"user_name": user_name})[0]['books']
    return res





log_book("testUser1", "East of Eden", "John Steinbeck",  4.5, "Feb 2, 2024", "Feb 12, 2024")
log_book("testUser1", "The Giver", "Lois Lowry",  5, "Jan 1, 2024", "Feb 2, 2024")

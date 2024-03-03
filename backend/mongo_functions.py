import pymongo
from pymongo import MongoClient
from google_api import get_book

# Connects to cluster and database
cluster = MongoClient(
    "mongodb+srv://testUser1:srwJBVVqicTVLHVo@cluster0.ztll2xp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = cluster["BookApp"]
collection = db["users"]


# collection.insert_one({"_id":1, "user_name":"testUser0", "books":[{"title": "The Giver", "author": "Lois Lowry", "year": 1993, "genre": "young adult", "tags": ["dystopian", "fiction"]}, {"title": "Catch-22", "author": "Joseph Heller", "year": 1961, "genre": "war", "tags": ["satire", "fiction"]}]})

def log_book(user_name, title, author, rating, startDate, endDate=None):
    # Adds to book list if there is already an account associated with the user name
    # Only adds the book if it's not already in the books array
    bookData = get_book(title, author)
    # print("book data", bookData)
    image = bookData['volumeInfo']['imageLinks']['smallThumbnail'] #.imageLinks.smallThumbnail
    # print('\n', "image", image)
    res = collection.find_one_and_update(
        {"user_name": user_name},
        {"$addToSet": {"books": {"title": title, "author": author, "rating": rating, "startDate": startDate, "endDate": endDate, "image":image}}}
    )
    # Creates a new document if the user doesn't have a document associated with them yet
    if not res:
        collection.insert_one({"user_name":user_name, "toRead":[], "books":[{"title":title, "author":author, "rating":rating, "startDate":startDate, "endDate":endDate, "image":image}]})

def get_books(user_name):
    # Gets and returns the user's books array
    res = collection.find({"user_name": user_name})[0]['books']
    return res





log_book("testUser1", "East of Eden", "John Steinbeck",  4.5, "Feb 2, 2024", "Feb 12, 2024")
log_book("testUser1", "The Giver", "Lois Lowry",  5, "Jan 1, 2024", "Feb 2, 2024")
log_book("testUser1", "1984", "George Orwell",  4.75, "Dec 20, 2023", "Dec 29, 2023")
log_book("testUser1", "Catch-22", "Joseph Heller",  5, "Oct 12, 2023", "Nov 23, 2023")
log_book("testUser1", "Brave New World", "Aldous Huxley",  5, "Feb 12, 2024", "Mar 1, 2024")

# The Reading Corner
OSU Winter 2024 Hackathon Project
<br>
<br>
## Introduction
This application allows a user to track books they've read, add books they'd like to read, and has several features to help the user discover new books they might be interested in.
<br>
<br>
## Book Tracking
The first feature we wanted to provide to the user is the ability to log books that they've read in the past, and to create a list of books that they'd like to read in the future.
<br>
### Logging a Book
The user can log books they've read by entering the title and author, along with some personal information from the user (rating of the book, date they started reading it, and date they finished the book). The logged book is then stored in a database that keeps track of the user's reading history. 
<br>
### Displaying the User's Books
The database mentioned above is also used to display two bookshelves to the user: 
<br>&emsp;&emsp;**My Library:** bookshelf of books that the user has read
<br>&emsp;&emsp;**To-Read List:** bookshelf of books that the user would like to read (interaction with this list discussed in the next section)
<br>Each time a user adds a book to either list, they will see it show up in the corresponding bookshelf.
<br>
<br>
![image](https://github.com/ModioThiam/OSU24WinterHackathon/assets/79183545/d636cedd-1b1c-4572-8e01-8e9f217176a0)
<br>
<br>
<br>
## Discovering New Books
The second feature we wanted to provide to the user is the ability to discover new books that they might be interested in. The Reading Corner provides this in two ways: searching based on keywords, and searching based on author and category.
### Search Based on Keywords
The user can type in any keyword, and after clicking the "Search" button will be displayed up to 6 books related books that we think they might find interesting. For each of these books, the user is shown the title, author, cover, and a brief description of the book. If the user is interested in reading the book, they can click the "Add Book" button, which will then add it to their To-Read List and bookshelf.
<br>A user search for "baseball novel" gives these results:
<br>
![image](https://github.com/ModioThiam/OSU24WinterHackathon/assets/79183545/1beedf5e-af5b-4c6d-8169-2e2268f741af)

### Search Based on Author and Category
In this section, the user can search an author and category and will be shown up to 6 books that match. Like the previous section, the user is shown information about each book and has the ability to add it to their To-Read list and bookshelf.
A search for "Stephen King" books in the category "Thriller" returns these results to the user:
![image](https://github.com/ModioThiam/OSU24WinterHackathon/assets/79183545/549c06e3-a1d0-45b6-91bc-5aeeeb4de267)
<br>
<br>
## Technologies Used
The app uses React.js on the front end and a combination of Flask, MongoDB, and calls to the Google Books API on the back end.
<br>
<br>
![image](https://github.com/ModioThiam/OSU24WinterHackathon/assets/79183545/de691ad3-fccd-4ef9-bc81-abda628f7649)
<br>
<br>
## How to Install and Run the Project
In order to use The Reading Corner, follow these steps:
1. Clone the Github repository to a folder on your local machine.
2. Open the folder containing the app in a terminal window and do the following:
<br>&emsp;&emsp;To get into the backend folder:
<br>&emsp;&emsp;&emsp;&emsp;```cd backend```
<br>&emsp;&emsp;To start the server:
<br>&emsp;&emsp;&emsp;&emsp;```python3 server.py```
3. Open a new terminal in the folder containing the app and run the following:
<br>&emsp;&emsp;To get into the frontend folder:
<br>&emsp;&emsp;&emsp;&emsp;```cd frontend```
<br>&emsp;&emsp;To install dependencies:
<br>&emsp;&emsp;&emsp;&emsp;```npm i```
<br>&emsp;&emsp;To start the app:
<br>&emsp;&emsp;&emsp;&emsp;```npm start```
<br>

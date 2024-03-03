import requests

api_key = 'AIzaSyBzBaBPGulGARHGTkr9AMmxCsjjR50KI3U'


def get_book_id(title: str, author: str) -> list:
    """
    Retrieves a Google Book ID from title and author
    :param title: Book title
    :param author: Book author
    :return: Google Books API book ID
    """

    url = f'https://www.googleapis.com/books/v1/volumes'
    params = {'q': f'intitle:{title}+inauthor:{author}', 'maxResults': 1}

    # Request book.json
    response = requests.get(url, params=params)

    # Return book information if search successful
    if response.status_code == 200:
        data = response.json()
        if 'items' in data and len(data['items']) > 0:
            book_id = data['items'][0]
            return book_id
        else:
            print('No book found with the specified title and author.')
            return []
    else:
        print('Failed to retrieve book ID. Status code:', response.status_code)
        return []


def get_category(book):
    """
    :param book: A book json
    :return: Book category
    """

    return book['volumeInfo']['categories'][0]


def get_book_suggestions(author: str, category: str, max_results=5):
    """
    :param author: Author of the user input book
    :param category: Category of the user input book
    :param max_results: Maximum number of book suggestions returned
    :return: List of book json with same author and same category
    """
    params = {'maxResults': max_results}
    url = f'https://www.googleapis.com/books/v1/volumes?q=inauthor:{author}+subject:{category}&key={api_key}'

    try:
        response = requests.get(url, params)
        data = response.json()

        if 'items' in data:
            return data['items']
        else:
            return None

    except requests.exceptions.RequestException as e:
        print('Error:', e)
        return None


def main():
    # Test code prints out books from same author and category
    popular_books = {
        "To Kill a Mockingbird": "Harper Lee",
        "1984": "George Orwell",
        "The Great Gatsby": "F. Scott Fitzgerald",
        "The Catcher in the Rye": "J.D. Salinger",
        "The Lord of the Rings": "J.R.R. Tolkien",
        "Catch-22": "Joseph Heller"
    }

    # Get title, author, description, and cover art of each book in dict
    for user_book_title, user_book_author in popular_books.items():

        suggested_books = {user_book_title: {}}
        book_suggestions_set = set()

        # Get recommended books for the current user test book
        user_book = get_book_id(user_book_title, user_book_author)
        user_book_category = get_category(user_book)
        book_suggestions = get_book_suggestions(user_book_author, user_book_category)

        # Create suggested books dict
        for book in book_suggestions:
            if user_book_title not in book['volumeInfo']['title']:  # Remove duplicates (and some sequels)
                suggested_books[user_book_title][book['volumeInfo']['title']] = {
                    "Authors": book['volumeInfo']['authors'],
                    "Description": book['volumeInfo']['description'],
                    "Thumbnail": book['volumeInfo']['imageLinks']['thumbnail']}

        # Print out suggested books dict
        for item in suggested_books[user_book_title]:
            print(item, suggested_books[user_book_title][item])

        print(f"\n {'_' * 50} \n")


if __name__ == "__main__":
    main()

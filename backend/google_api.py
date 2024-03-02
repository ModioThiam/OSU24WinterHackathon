import requests


def get_book_id(title: str, author: str) -> list:
    """
    Retrieves a Google Book ID from title and author
    :param title: Book title
    :param author: Book author
    :return: Google Books API book ID
    """

    url = 'https://www.googleapis.com/books/v1/volumes'
    params = {'q': f'intitle:{title}+inauthor:{author}', 'maxResults': 1}

    # Request book.json
    response = requests.get(url, params=params)

    # Return book information if search successful
    if response.status_code == 200:
        data = response.json()
        if 'items' in data and len(data['items']) > 0:
            book_id = data['items'][0]['id']
            return book_id
        else:
            print('No book found with the specified title and author.')
            return []
    else:
        print('Failed to retrieve book ID. Status code:', response.status_code)
        return []


def get_related_books(book_id: str, max_results=5) -> list:
    """
    :param book_id: Google Books API book ID
    :param max_results: Max number of related books
    :return: List of related books
    """
    url = f'https://www.googleapis.com/books/v1/volumes/{book_id}/related'
    params = {'maxResults': max_results}
    response = requests.get(url, params=params)

    # Request related books
    if response.status_code == 200:  # Search successful
        data = response.json()
        if 'items' in data:  # If there are related books in data.json
            related_books = []
            for item in data['items']:  # for book in data.json
                book_info = {
                    'title': item['volumeInfo']['title'],
                    'authors': item['volumeInfo'].get('authors', []),
                    'description': item['volumeInfo'].get('description', 'No description available')
                }
                related_books.append(book_info)
            return related_books
        else:
            print('No related books found for the book ID:', book_id)
            return []
    else:
        print('Failed to retrieve related books. Status code:', response.status_code)
        return []


def main():
    book_id = get_book_id("The Perfect Storm", "Sebastian Junger")
    print(book_id)

    # related_books = get_related_books(first_book_id, 10)
    # for book in related_books:
    #     print(book['title'])


if __name__ == "__main__":
    main()

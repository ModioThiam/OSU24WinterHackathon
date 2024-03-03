import React, { useState } from "react";

import "./Discover.css";

function truncateDescription(description, maxLength = 100) {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  } else {
    return description;
  }
}

function Discover() {
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [recommendationAuthor, setRecommendationAuthor] =  useState("");
  const [recommendationCategory, setRecommendationCategory] = useState("");
  const [recommendationResults, setRecommendationResults] = useState(null);
  // const [author, setAuthor] = useState("");
  // const [category, setCategory] = useState("");

  const handleSearchChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    // Do search using searchWord
    console.log("Search Word:", searchWord);
    try {
      setSearchResults(null);
      // need to find a way to send user input to backend!
      const response = await fetch(
        `http://127.0.0.1:5000/getBooks?query=${searchWord}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }
      const data = await response.json();
      console.log("Fetched", data);
      setSearchResults(data); // Update search results state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRecommendationSubmit= async (e) => {
    e.preventDefault();

    try {
      setRecommendationResults(null);
      // need to find a way to send user input to backend!
      const response = await fetch(
        `http://127.0.0.1:5000/getRecommendations?author=${recommendationAuthor}&category=${recommendationCategory}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }

      const data = await response.json();
      console.log("Fetched", data);
      
      setRecommendationResults(data); // Update search results state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddBook = async (title, authors, thumbnail) => {
    console.log("adding book", title, authors, thumbnail);
    fetch("http://127.0.0.1:5000/addToReadingList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookTitle: title,
        bookAuthors: authors, 
        bookThumbnail:thumbnail
      }),
    })
      .then((res) => res.json())
      .then((bookData) => console.log("book data is", bookData));
  };

  return (
    <>
      <div id="discover">
        <div className="discover-container">
          <h1>Discover New Books</h1>
          <h2>Search Based on Keywords</h2>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Insert keywords..."
              value={searchWord}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>
          {/* Display search results */}

          {searchResults && (
            <>
              <h2>Search Results:</h2>
              <h2>Books</h2>
            </>
          )}
          
          <div className="cards-container-box">
          
            {searchResults &&
              searchResults.map((book) => (
                
                <div className="card" key={book.title}>
                  <img src={book.thumbnail}></img>
                  <h2>{book.title}</h2>
                  
                  <p><strong>Author:</strong> {book.authors}</p>
                  <p><strong>Description:</strong> {truncateDescription(book.description)}</p>
                  <button
                    className="add-book-button"
                    onClick={() => {
                      handleAddBook(book.title, book.authors, book.thumbnail);
                    }}
                  >
                    Add Book
                  </button>
                </div>
              ))}
          </div>

          <h2>Get Book Recommendation</h2>
          
          {/* <form onSubmit={handleRecommendationSubmit}> */}
            
          {/* Author */}
          {/* <label htmlFor="recommendationAuthor">Author:</label>
          <input
            type="text"
            id="recommendationAuthor"
            value={recommendationAuthor}
            onChange={(e) => setRecommendationAuthor(e.target.value)}
            required
          /> */}

          {/* Category */}
          {/* <label htmlFor="recommendationCategory">Category:</label>
              <input
                type="text"
                id="recommendationCategory"
                value={recommendationCategory}
                onChange={(e) => setRecommendationCategory(e.target.value)}
                required
              />

          <button type="submit">Get Recommendation</button>
         </form> */}

        </div>
      </div>
    </>
  );
}

export default Discover;

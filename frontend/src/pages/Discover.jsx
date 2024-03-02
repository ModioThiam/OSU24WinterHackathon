import React, { useState } from "react";

import './Discover.css';

function Discover() {
    const [searchWord, setSearchWord] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        setSearchWord(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Do search using searchWord
        console.log("Search Word:", searchWord);
        // Dummy search results
        const results = [
            { id: 1, title: "Title of Book1", author: "Jane Doe" , Description:"Thriller"},
            { id: 2, title: "Title of Book2", author: "Jane Doe" , Description:"Nonfiction", },
            { id: 3, title: "Title of Book3", author: "Jane Doe" , Description:"Historical", },
        ];
        setSearchResults(results);
    };

    return (
        <>
        <div id="discover">
            <div className="discover-container">
                <h1>Discover New Books</h1>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search for books..."
                        value={searchWord}
                        onChange={handleSearchChange}
                    />
                    <button type="submit">Search</button>
                </form>
                {/* Display search results */}
                {searchResults.length > 0 && (
                    <div>
                        <h2>Search Results:</h2>
                        <ul>
                            {searchResults.map((result) => (
                                <li key={result.id}>{result.title} by {result.author}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}
export default Discover;


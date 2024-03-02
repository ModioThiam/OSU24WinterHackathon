import React, { useState } from "react";

import './Discover.css';

function Discover() {
    const [searchWord, setSearchWord] = useState("");
    const [searchResults, setSearchResults] = useState(null);

    const handleSearchChange = (e) => {
        setSearchWord(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        // Do search using searchWord
        console.log("Search Word:", searchWord);
        try {
            const response = await fetch(`http://127.0.0.1:5000/getBooks`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            console.log('Fetched',data)
            setSearchResults(data); // Update search results state
            
        } catch (error) {
            console.error('Error:', error);
        }
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
                    <div>
                        <h2>Search Results:</h2>
                        <ul>
                        {searchResults && (
                            <div>
                                <h2>Book Details:</h2>
                                <p><strong>Title:</strong> {searchResults.Title}</p>
                                <p><strong>Author:</strong> {searchResults.Author}</p>
                                <p><strong>Genre:</strong> {searchResults.Genre}</p>
                                <p><strong>Date Started:</strong> {searchResults['Date Started']}</p>
                                <p><strong>Date Ended:</strong> {searchResults['Date Ended']}</p>
                                <p><strong>Rating:</strong> {searchResults.Rating}</p>
                            </div>
                        )}
                        </ul>
                    </div>
            
            </div>
        </div>
        </>
    )
}

export default Discover;
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
            setSearchResults(null);
            // need to find a way to send user input to backend! 
            const response = await fetch(`http://127.0.0.1:5000/getBooks?query=${searchWord}`);
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
                                <p>Title: {searchResults["title"]}</p>
                                <p>Author: {searchResults["authors"]}</p>
                                <p>Description: {searchResults["description"]}</p>
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
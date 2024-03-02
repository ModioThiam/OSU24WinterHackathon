import React, { useState } from 'react';

const BookLogForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [dateStarted, setDateStarted] = useState('');
  const [dateFinished, setDateFinished] = useState('');
  const [rating, setRating] = useState(''); 
  
  const handleFormSubmit = (e) => {
    e.preventDefault();


    
    setTitle('');
    setAuthor('');
    setGenre('');
    setDateStarted('');
    setDateFinished('');
    setRating('');
  };

  return (
    <div>
      <h2>Log a Book</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Title */}
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Author */}
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <label htmlFor="dateStarted">Date Started:</label>
        <input
          type="date"
          id="dateStarted"
          value={dateStarted}
          onChange={(e) => setDateStarted(e.target.value)}
          required
        />

        <label htmlFor="dateFinished">Date Finished:</label>
        <input
          type="date"
          id="dateFinished"
          value={dateFinished}
          onChange={(e) => setDateFinished(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
            <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

        <button type="submit">Log Book</button>
      </form>
    </div>
  );
};

export default BookLogForm;
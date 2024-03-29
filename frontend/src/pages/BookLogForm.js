import React, { useState } from "react";

const BookLogForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [dateStarted, setDateStarted] = useState("");
  const [dateFinished, setDateFinished] = useState("");
  const [rating, setRating] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000//logbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: "testUser1",
        bookTitle: title,
        bookAuthor: author,
        bookRating: 5,
        bookStartDate: dateStarted,
        bookEndDate: dateFinished,
      }),
    })
      .then((res) => res.json())
      .then((bookData) => console.log("book data is", bookData));

    setTitle("");
    setAuthor("");
    setGenre("");
    setDateStarted("");
    setDateFinished("");
    setRating("");
  };

  return (
    <div className="booklogForm">
      <h1>Log a Book</h1>
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
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
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

import React from "react";
import { useState, useEffect } from "react";
import "../css/BookLog.css";
import BookLogForm from "./BookLogForm";
import Book from "./Book";

function BookLog() {
  const [history, setHistory] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const getHistory = async () => {
    let res = await fetch("http://127.0.0.1:5000//readingHistory");
    const data = await res.json();
    // History will be limited to 5 books
    setHistory(data.slice(0, 5));
  };

  useEffect(() => {
    getHistory();
  }, []);

  useEffect(() => {
    console.log("history changed to", history);
  }, [history]);

  return (
    <>
      <div className="readingHistory">
        <text>My Library</text>
        {history.map((book) => (
          <Book
            props={{
              title: book.title,
              author: book.author,
              image: book.image,
            }}
          />
        ))}
      </div>
      <div id="booklog">
        <div className="container">
          <div className="booklog-container">
            <div className="cards-container-box"></div>
            <BookLogForm />
          </div>
        </div>
      </div>
    </>
  );
}
export default BookLog;

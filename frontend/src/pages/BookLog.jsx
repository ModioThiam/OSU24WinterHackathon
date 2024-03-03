import React from "react";
import { useState, useEffect } from "react";
import "./BookLog.css";
import BookLogForm from "./BookLogForm";
import Book from "./Book";

function BookLog() {
  const [history, setHistory] = useState([]);
  const getHistory = async () => {
    let res = await fetch("http://127.0.0.1:5000//readingHistory");
    const data = await res.json();
    data.map((book) => console.log("book is", book));
    setHistory(data);
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
        {history.map((book) => (
          <Book props={{ title: book.title, author: book.author }} />
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

import React from "react";
import { useState, useEffect } from "react";
import "../css/BookLog.css";
import BookLogForm from "./BookLogForm";
import Book from "./Book";

function BookLog() {
  const [history, setHistory] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [readingList, setReadingList] = useState([]);

  const getHistory = async () => {
    let res = await fetch("http://127.0.0.1:5000//readingHistory");
    const data = await res.json();
    setHistory(data);
  };

  const getReadingList = async () => {
    let res = await fetch("http://127.0.0.1:5000/readingList");
    const data = await res.json();
    setReadingList(data);
  };

  useEffect(() => {
    getHistory();
  }, []);

  useEffect(() => {
    getReadingList();
  }, []);

  // useEffect(() => {
  //   console.log("history changed to", history);
  // }, [history]);

  // useEffect(() => {
  //   console.log("reading list changed to", readingList);
  // }, [readingList]);

  return (
    <>
      <div id="mylibrary" className="readingHistory">
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
      <div className="readingHistory">
        <text>To-Read List</text>
        {readingList.map((book) => (
          <Book
            props={{
              title: book.title,
              author: book.author,
              image: book.thumbnail,
            }}
          />
        ))}
      </div>
      <div id="booklog">
        <div className="container">
          <div className="booklog-container">
            {/* <div className="cards-container-box"></div> */}
            <BookLogForm />
          </div>
        </div>
      </div>
    </>
  );
}
export default BookLog;

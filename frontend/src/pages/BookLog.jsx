import React from "react";
import './BookLog.css';
import BookLogForm from "./BookLogForm";

function BookLog() {
    return (
        <>
        <div id="booklog">
            <div className="container">
                <div className="booklog-container">
                    <h1>My Books</h1>
                    <div className="cards-container-box">

                    </div>
                    <BookLogForm/>
                </div>
            </div>
        </div>
        </>
    )
}
export default BookLog;

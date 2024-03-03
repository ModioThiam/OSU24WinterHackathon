import React from "react";
import "../css/Book.css";

const Book = (props) => {
  return (
    <>
      <img height="175" width="125" src={props.props.image}></img>
      <div className="infoContainer">
        <h3>{props.props.title}</h3>
        <h5>{props.props.author}</h5>
      </div>
    </>
  );
};

export default Book;

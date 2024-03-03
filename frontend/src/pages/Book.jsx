import React from "react";

const Book = (props) => {
  console.log("props", props.props);
  return (
    <>
      <div>
        <h3>{props.props.title}</h3>
        <h4>{props.props.author}</h4>
      </div>
    </>
  );
};

export default Book;

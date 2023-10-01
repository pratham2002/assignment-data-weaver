import React from "react";

function BookItem({ book }) {
  return (
    <div className="book-item">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
    </div>
  );
}

export default BookItem;

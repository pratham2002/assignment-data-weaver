import React from "react";

function BookItem({ book }) {
  return (
    <div className="book-card">
      <h2>{book?.title ?? "NA"}</h2>
      <p>
        <strong>Author:</strong> {book?.author ?? "NA"}
      </p>
      <p>
        <strong>Country:</strong> {book?.country ?? "NA"}
      </p>
      <p>
        <strong>Language:</strong> {book?.language ?? "NA"}
      </p>
      <p>
        <strong>Link:</strong>{" "}
        {book?.link ? (
          <a
            href={book?.link ?? "NA"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        ) : (
          "NA"
        )}
      </p>
      <p>
        <strong>Pages:</strong> {book?.pages ?? "NA"}
      </p>
      <p>
        <strong>Year:</strong> {book?.year ?? "NA"}
      </p>
    </div>
  );
}

export default BookItem;

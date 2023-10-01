import React from "react";
import { useNavigate } from "react-router-dom";

function BookItem({ book }) {
  const navigate = useNavigate();

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
      <button
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
        }}
        onClick={() => {
          navigate("/edit", {
            state: {
              data: book,
            },
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 30 30"
        >
          <path
            d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"
            fill="#FFF"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default BookItem;

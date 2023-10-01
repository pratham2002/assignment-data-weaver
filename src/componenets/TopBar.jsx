import React from "react";

export default function TopBar() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{ height: "15vh", objectFit: "contain" }}
        src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg"
        alt="logo"
      ></img>
      <h2>Book Search App</h2>
    </div>
  );
}

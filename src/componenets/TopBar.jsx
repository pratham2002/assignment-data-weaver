import React from "react";

export default function TopBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div
        className="header-container"
        style={{ display: "flex", alignItems: "flex-end" }}
      >
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg"
          alt="logo"
        />
        <h2>Book Search App</h2>
      </div>
    </div>
  );
}

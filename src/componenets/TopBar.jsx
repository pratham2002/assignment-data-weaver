import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();
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
        onClick={() => navigate("/")}
        className="header-container"
        style={{ display: "flex", alignItems: "flex-end", cursor: "pointer" }}
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

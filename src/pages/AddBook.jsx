import React, { useState } from "react";
import "../css/addData.css";

export default function AddBook() {
  const [formData, setFormData] = useState({
    author: "",
    country: "",
    language: "",
    link: "",
    pages: "",
    title: "",
    year: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the formData to your backend API or store it in your application's state.
    // Example: You can use Axios to make a POST request to your API endpoint.
    // axios.post("/api/add-data", formData).then((response) => {
    //   console.log("Data added successfully:", response.data);
    // });
    // After successful submission, you can navigate the user to another page.
  };

  return (
    <div className="add-form-container">
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="add-form-container">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-form-container">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-form-container">
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-form-container">
          <label htmlFor="link">Link:</label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-form-container">
          <label htmlFor="pages">Pages:</label>
          <input
            type="text"
            id="pages"
            name="pages"
            value={formData.pages}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-form-container">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-form-container">
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-form-container">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-form-container">
          <button type="submit">Add Data</button>
        </div>
      </form>
    </div>
  );
}

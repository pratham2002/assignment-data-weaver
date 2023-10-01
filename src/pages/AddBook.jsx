import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/addData.css";
import { addData } from "../redux/actions/addBookActions";

export default function AddBook({ edit }) {
  const addBook = useSelector((state) => state.addBook);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    author: "",
    country: "",
    language: "",
    link: "",
    pages: "",
    title: "",
    year: "",
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
    console.log({ formData });
    dispatch(addData(formData));
  };

  useEffect(() => {
    if (addBook.success) {
      alert(`Book added successfully`);
      navigate("/");
    } else if (addBook.error) {
      alert(addBook.error.message);
    }
  }, [addBook]);

  return (
    <div className="add-form-container">
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit}>
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
          <button disabled={addBook.loading} type="submit">
            Add Data
          </button>
        </div>
      </form>
    </div>
  );
}

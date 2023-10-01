import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import TopBar from "../componenets/TopBar";
import "../css/addData.css";
import {
  addBookInit,
  addData,
  updateBook,
} from "../redux/actions/addBookActions";

export default function AddBook({ edit }) {
  const addBook = useSelector((state) => state.addBook);
  const location = useLocation();
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
    if (edit) {
      dispatch(updateBook(formData));
    } else {
      dispatch(addData(formData));
    }
  };
  useEffect(() => {
    if (edit) {
      const { data } = location?.state;
      console.log({ data });
      setFormData(data);
    }
  }, [edit]);

  useEffect(() => {
    if (addBook.success) {
      alert(edit ? "Book Updated" : `Book added successfully`);
      dispatch(addBookInit());
      navigate("/");
    } else if (addBook.error) {
      alert(addBook.error.message);
    }
  }, [addBook]);

  return (
    <>
      <TopBar />
      <hr />
      <div className="add-form-container">
        <h2>{edit ? "Edit" : "Add"} Data</h2>
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
          <div className="add-form-container" style={{ display: "flex" }}>
            <button disabled={addBook.loading} type="submit">
              {edit ? "Update" : "Add Data"}
            </button>
            <button
              onClick={() => navigate(-1)}
              style={{
                marginBlock: "10px",
                backgroundColor: "transparent",
                color: "gray",
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookItem from "../componenets/BookItem";
import TopBar from "../componenets/TopBar";
import { getBooks } from "../redux/actions/searchActions";

export default function Homepage() {
  const books = useSelector((state) => state.search);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleSearch = useCallback(() => {
    if (!searchText) {
      alert("Please enter a title");
      return;
    }
    setPage(1);
    dispatch(getBooks({ title: searchText, pageSize, page: 1 }));
  }, [searchText, pageSize, page, dispatch]);

  useEffect(() => {
    // if (!searchText) {
    //   return;
    // }
    dispatch(getBooks({ title: searchText, pageSize, page }));
  }, [page]);
  useEffect(() => {
    // if (!searchText) {
    //   return;
    // }
    setPage(1);
    dispatch(getBooks({ title: searchText, pageSize, page: 1 }));
  }, [pageSize]);

  return (
    <div>
      <TopBar />
      <hr />
      <div className="search-section">
        <div
          style={{
            width: "40%",
            minWidth: "250px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <label>Title:</label>
          <input
            className="searchBar"
            placeholder="Enter title"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button onClick={handleSearch} className="searchButton">
          Search
        </button>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBlock: "5px",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <p>Total Results:{books?.results?.pagination?.totalElements}</p>
        <button onClick={() => navigate("/add")} className="searchButton">
          Add New Book
        </button>
      </div>

      <div
        style={{
          paddingInline: "40px",
        }}
      >
        {books?.loading && "Loading..."}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {books?.results?.data?.map((e) => {
          return <BookItem book={e} />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBlock: "5px",
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}
      >
        <div>
          <label>Per Page:</label>
          <select
            className="pageSize"
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        {books?.results?.pagination?.totalPages > 1 && (
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <button
              style={{ height: "fit-content" }}
              onClick={() => {
                window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
                setPage((p) => p - 1);
              }}
              disabled={page == 1}
            >
              Prev
            </button>

            <p style={{ fontSize: "14px" }}>
              {page} of {books?.results?.pagination?.totalPages}
            </p>

            <button
              style={{ height: "fit-content" }}
              onClick={() => {
                window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
                setPage((p) => p + 1);
              }}
              disabled={page == books?.results?.pagination?.totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

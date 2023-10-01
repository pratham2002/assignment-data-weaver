import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookItem from "../componenets/BookItem";
import TopBar from "../componenets/TopBar";
import { getBooks } from "../redux/actions/searchActions";

export default function Homepage() {
  const books = useSelector((state) => state.search);

  const [searchText, setSearchText] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleSearch = useCallback(() => {
    if (!searchText) {
      alert("Please enter a title");
      return;
    }
    dispatch(getBooks({ title: searchText, pageSize, page }));
  }, [searchText, pageSize, page, dispatch]);

  return (
    <div>
      <TopBar />
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
        <div>
          <label>Page Size:</label>
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
        <button onClick={handleSearch} className="searchButton">
          Search
        </button>
      </div>
      <div
        style={{
          paddingInline: "40px",
        }}
      >
        {books?.loading && "Loading..."}
      </div>
      <div>
        {books?.results?.data?.map((e) => {
          return <BookItem book={e} />;
        })}
      </div>
    </div>
  );
}

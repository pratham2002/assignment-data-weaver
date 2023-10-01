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
        <input
          className="searchBar"
          placeholder="Enter title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
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

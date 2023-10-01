import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const store = useSelector((state) => state.listBooks);
  console.log({ store });

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchBooks());
  }, []);

  return (
    <div>
      <h2>Book Search App</h2>

      {/* <SearchBar />
      <ResultsList /> */}
    </div>
  );
}

export default App;

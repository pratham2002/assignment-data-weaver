import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TopBar from "./componenets/TopBar";

function App() {
  const store = useSelector((state) => state.search);
  console.log({ store });

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchBooks());
  }, []);

  return (
    <div>
      <TopBar />
      {/* <SearchBar />
      <ResultsList /> */}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(term) {
    setSearchTerm(term);
  }

  console.log(searchTerm);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Events searchTerm={searchTerm} />
    </>
  );
}

export default App;

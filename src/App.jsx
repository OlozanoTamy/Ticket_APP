import { useState, useEffect, useRef } from "react";
import "./App.css";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import SingUpForm from "./components/SingUpForm";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  useEffect(() => {
    console.log("Use Effect");
  }, [searchTerm]);

  function handleSearch(term) {
    setSearchTerm(term);
  }

  // console.log(searchTerm);

  return (
    <>
      <Navbar onSearch={handleSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
      {/* <SingUpForm /> */}
    </>
  );
}

export default App;

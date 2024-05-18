import { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../hooks/useEventsData";
const Home = () => {
  const { events, isLoading, error, fetchEvents } = useEventsData();
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    console.log("Use Effect");
  }, [searchTerm]);

  function handleSearch(term) {
    setSearchTerm(term);
    fetchEvents(`keyword=${term}`);
  }
  return (
    <>
      <Navbar onSearch={handleSearch} ref={containerRef} />
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        <Events searchTerm={searchTerm} events={events} />
      )}
      {!!error && <div>Ha ocurrido un error</div>}
    </>
  );
};
export default Home;

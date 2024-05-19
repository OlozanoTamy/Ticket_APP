import { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../hooks/useEventsData";
import ReactPaginate from "react-paginate";
import styles from "./Home.module.css";
const Home = () => {
  const { events, isLoading, error, fetchEvents, page } = useEventsData();
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
    fetchEvents(`&keyword=${term}`);
  }

  const handlePageClick = ({ selected }) => {
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  };

  const renderEvents = () => {
    if (isLoading) {
      return <h1>Cargando...</h1>;
    } else {
      if (error) {
        return <div>Ha ocurrido un error</div>;
      }
      return <Events searchTerm={searchTerm} events={events} />;
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} ref={containerRef} />
      {renderEvents()}
      <ReactPaginate
        className={styles.pagination}
        nextClassName={styles.next}
        previousClassName={styles.previous}
        pageClassName={styles.page}
        activeClassName={styles.activePage}
        disabledClassName={styles.disabledPage}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={page.totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
export default Home;

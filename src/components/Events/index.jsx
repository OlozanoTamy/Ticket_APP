import Eventitems from "./components/Eventitem";
import useEventsData from "../../hooks/useEventsData";

const Events = ({ searchTerm }) => {
  const { events, isLoading, error } = useEventsData();

  function handleEventClick(id) {
    console.log(id);
  }

  const renderEvents = () => {
    let eventsFiltered = events;
    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
    }
    return eventsFiltered.map((eventItem) => {
      return (
        <>
          <Eventitems
            key={`event-item-${eventItem.id}`}
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}
            onEventClick={handleEventClick}
            id={eventItem.id}
          />
        </>
      );
    });
  };

  if (error) {
    return <div>Ha ocurrido un error</div>;
  }

  return (
    <>
      <h2>Eventos</h2>
      {isLoading ? <h1>Cargando...</h1> : renderEvents()}
    </>
  );
};
export default Events;

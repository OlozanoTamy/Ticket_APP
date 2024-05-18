import Eventitems from "./components/Eventitem";
import { useNavigate } from "react-router-dom";

const Events = ({ searchTerm, events }) => {
  const navigate = useNavigate();
  function handleEventClick(id) {
    navigate(`/details/${id}`);
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
  return (
    <div>
      <h2>Eventos</h2>
      {renderEvents()};
    </div>
  );
};
export default Events;

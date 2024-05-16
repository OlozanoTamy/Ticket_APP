import Eventitems from "./components/Eventitem";
import eventsJson from "../../data/events.json";
import { useState } from "react";

const Events = ({ searchTerm }) => {
  const [data] = useState(eventsJson);
  const {
    _embedded: { events },
  } = data;
  // const eventsComponent = events.map((eventItem, index) => {
  //   return (
  //     <>
  //       <Eventitems
  //         key={`event-item-${eventItem.id}`}
  //         name={eventItem.name}
  //         info={eventItem.info}
  //         image={eventItem.images[0].url}
  //         onEventClick={handleEventClick}
  //         id={eventItem.id}
  //       />
  //     </>
  //   );
  // });

  function handleEventClick(id) {
    console.log(id);
  }

  const renderEvents = () => {
    return events.map((eventItem) => {
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
    <>
      <h2>Eventos</h2>
      {renderEvents()}
    </>
  );
};
export default Events;

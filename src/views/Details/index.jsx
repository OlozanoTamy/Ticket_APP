import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./Details.module.css";
import { compareAsc, format } from "date-fns";
import { es } from "date-fns/locale";
const Details = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
            import.meta.env.VITE_API
          }`
        );
        const data = await response.json();
        setEventData(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        setEventData({});
        setError(error);
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (isLoading && Object.keys(isLoading)) {
    return <h2>Cargando...</h2>;
  }
  //Si el objeto error tiene mas de una caracteristicas se envia error
  if (Object.keys(error) > 0) {
    return <h2>Ha ocurrido un error...</h2>;
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.mainInfoContainer}>
        {/* Se pasa opcional chaining para que evalue si existe si no lo manda como indefinido */}
        <img
          src={eventData.images?.[0].url}
          alt={eventData.name}
          className={Styles.eventImage}
        />
        <h4 className={Styles.eventName}>{eventData.name}</h4>
        <p className={Styles.info}>{eventData.info}</p>

        {eventData.dates?.start.dateTime ? (
          <p className={Styles.date}>
            {format(
              new Date(eventData.dates?.start.dateTime),
              "d LLLL yyy H:mm",
              { locale: es }
            )}
            hrs
          </p>
        ) : null}
      </div>
      <div className={Styles.seatInfoContainer}>
        <h6 className={Styles.seatMapTitle}>Mapa del Evento</h6>
        <img src={eventData.seatmap?.staticUrl} alt={eventData.name} />
        <p className={Styles.pleaseName}>{eventData.pleaseNote}</p>
        <p className={Styles.price}>
          Rango de precios {eventData.priceRanges[0].min}-
          {eventData.priceRanges[0].max} {eventData.priceRanges[0].currency}
        </p>
      </div>
      <a href={eventData.url}>Compra tus boletas aca</a>
    </div>
  );
};
export default Details;

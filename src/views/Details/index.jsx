import { useParams } from "react-router-dom";
const Details = () => {
  const { eventId } = useParams();
  console.log(eventId);
  return <h1>Detalles</h1>;
};
export default Details;

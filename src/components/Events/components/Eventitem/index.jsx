const Eventitems = ({ info, name, image, id, onEventClick }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };
  return (
    <div
      onClick={() => {
        console.log("Padre Clickeado");
      }}
    >
      <img src={image} alt="imagen concierto" width={200} height={200} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver Mas</button>
    </div>
  );
};
export default Eventitems;

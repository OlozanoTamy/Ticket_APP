import styles from "./Eventitem.module.css";
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
      className={styles.eventItemContainer}
    >
      <img src={image} alt="imagen concierto" width={200} height={200} />

      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button className={styles.seeMoreBtn} onClick={handleSeeMoreClick}>
          Ver Mas
        </button>
      </div>
    </div>
  );
};
export default Eventitems;

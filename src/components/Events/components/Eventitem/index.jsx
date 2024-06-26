import styles from "./Eventitem.module.css";
import sinrelleno from "../../../../assets/sinrelleno.png";
import relleno from "../../../../assets/relleno.png";
//Se instancia el ultimo hook
import useLikeEvent from "../../../../hooks/useLikeEvent";
const Eventitems = ({ info, name, image, id, onEventClick }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };

  const { isEventLiked, toggleEventLike } = useLikeEvent(id);
  const handleHeartClick = () => {
    toggleEventLike();
  };

  return (
    <div
      onClick={() => {
        console.log("Padre Clickeado");
      }}
      className={styles.eventItemContainer}
    >
      <div className={styles.imageContainer}>
        <img
          onClick={handleHeartClick}
          src={isEventLiked ? relleno : sinrelleno}
          alt="Heart button"
          className={styles.heartImage}
        />
        <img src={image} alt="imagen concierto" width={200} height={200} />
      </div>

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

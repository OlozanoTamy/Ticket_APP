import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
const Profile = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleTabClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Link to={"/"} className={styles.homeLink}>
        Inicio
      </Link>
      <div className={styles.tabsContainer}>
        <span
          className={`${pathname.includes("my-info") ? styles.active : ""} ${
            styles.tab
          }`}
          style={{ marginRight: "8px" }}
          onClick={() => {
            handleTabClick("my-info");
          }}
        >
          Mi infomacion
        </span>
        <span
          className={`${
            pathname.includes("liked-events") ? styles.active : ""
          } ${styles.tab} `}
          onClick={() => {
            handleTabClick("liked-events");
          }}
        >
          Eventos Favoritos
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;

import styles from "./Error404.module.css";
import { useRouteError } from "react-router-dom";
const ERROR404 = () => {
  const error = useRouteError();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Opps..</h2>
      <p className={styles.description}>{error.data || error.status}</p>
    </div>
  );
};

export default ERROR404;

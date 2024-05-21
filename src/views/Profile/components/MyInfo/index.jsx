import { useForm } from "react-hook-form";
import styles from "./Myinfo.module.css";
import { useEffect } from "react";
import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constants";
const MyInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {};
      setValue("name", userData?.name);
      setValue("age", userData?.age);
      setValue("Email", userData?.Email);
    } catch (error) {}
  });

  useEffect(() => {});
  const USER_DATA = "userData";
  const handleFormSubmit = (data) => {
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
      alert("Usuario Actualizado");
    } catch (error) {
      alert("Ha ocurrido un error");
    }
  };

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          {...register("name", { required: true })}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          {...register("Email", { required: true })}
        />
      </label>
      <label className={styles.label}>
        Age
        <input
          className={styles.input}
          type="number"
          {...register("age", { required: true, min: 1, max: 120 })}
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        Save
      </button>
    </form>
  );
};

export default MyInfo;

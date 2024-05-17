import { useForm } from "react-hook-form";

const SingUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
  };
  console.log(errors);
  function handleClearSubmmit() {
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name:
        <input {...register("name", { required: true })} />
      </label>
      <br />
      <label>
        Age:
        <input {...register("age", { required: true })} />
      </label>
      <br />
      <label>
        Address:
        <input {...register("address", { required: true })} />
      </label>
      <br />
      <label>
        ZipCode:
        <input {...register("zipcode", { required: true })} />
      </label>
      <br />
      <label>
        Phone
        <input {...register("phone", { required: true })} />
      </label>
      <div>
        <button onClick={handleClearSubmmit} type="reset">
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SingUpForm;

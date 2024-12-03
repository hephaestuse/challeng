import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { getUser } from "../../services/apiCalls";
type formValues = {
  fullName: string;
  email: string;
  password: string;
};
type errorValues = {
  fullName?: string;
  email?: string;
};
function Form() {
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = useState<formValues>({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<errorValues>();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function validate() {
    const newErrors: errorValues = {};
    if (!value.fullName) {
      newErrors.fullName = "Name is required";
    } else if (value.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }
    if (!value.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0 ? true : newErrors;
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validateMessage = validate();
    if (validateMessage === true) {
      console.log("Form submitted successfully:");
      getUser(value, setErrorMessage);
    } else {
      console.log("not submited", validateMessage);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="backdrop-blur-md shadow-lg
    shadow-stone-800 rounded-3xl
    border-stone-800 border-2 flex flex-col
    justify-center items-center w-3/4 md:w-1/2 h-1/2 min-h-96 "
    >
      {errorMessage.includes("Welcome back") ? (
        <p className="text-lime-800 font-extrabold p-2 border-2 border-lime-300 rounded-md">
          {errorMessage}
        </p>
      ) : null}
      {errorMessage && !errorMessage.includes("Welcome back") ? (
        <p className="text-red-800 font-extrabold p-2 border-2 border-red-300 rounded-md">
          {errorMessage}
        </p>
      ) : null}
      <Input
        type="text"
        name="fullName"
        placeholder="Full name"
        style="transparent"
        onchange={handleChange}
      />
      {errors?.fullName ? (
        <p className="p-2 w-1/2 text-red-500 border-red-300 border-2 rounded-lg ">
          {errors.fullName}
        </p>
      ) : null}

      <Input
        type="email"
        name="email"
        placeholder="Example@example.com"
        style="transparent"
        onchange={handleChange}
      />
      {errors?.email ? (
        <p className="p-2 w-1/2 text-red-500 border-red-300 border-2 rounded-lg ">
          {errors.email}
        </p>
      ) : null}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        style="transparent"
        onchange={handleChange}
        required={true}
      />
      <Button>submit</Button>
    </form>
  );
}

export default Form;

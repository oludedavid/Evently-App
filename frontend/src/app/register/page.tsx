"use client";
import FormComponent from "../components/userForm/form";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import registerStyles from "./register.module.css";

type FormData = {
  userName?: string;
  userEmail: string;
  userPassword: string;
};

export default function RegisterPage() {
  const router = useRouter();

  const [formValues, setFormValues] = useState<FormData>({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleRegisterChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  const registerUsers = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/register",
        formValues,
        { withCredentials: true }
      );
      console.log("Registration successful", response.data);
      // Clear form or redirect user
      setFormValues({ userName: "", userEmail: "", userPassword: "" });
      //setErrorMessage(null);
      router.push("/dashboard");
    } catch (error: any) {
      if (error.response.status === 401) {
        alert("Invalid credentials");
      }
    }
  };

  const handleRegisterClickEvent = () => {
    registerUsers();
  };
  return (
    <div
      className={`flex bg-red-100 flex-col items-center md:flex-row w-screen h-screen p-4 gap-4 md:gap-1`}
    >
      <figure
        className={`w-32 h-32 md:w-10/12 md:h-3/4 md:bg-red-200 md:rounded-lg flex flex-col items-center md:p-10 mt-2 md:ml-4 md:shadow-sm`}
      >
        <img
          className={`${registerStyles.image} w-full h-full md:w-full md:h-full`}
          src="/photos/reading.png"
          alt="Ice Cream"
        />
      </figure>
      <div
        className={`w-full flex flex-col items-center justify-normal md:justify-center py-10 gap-0 md:gap-20 px-5`}
      >
        <FormComponent
          type="register"
          values={formValues}
          onChangeHandler={handleRegisterChange}
          onClick={handleRegisterClickEvent}
        />
      </div>
    </div>
  );
}

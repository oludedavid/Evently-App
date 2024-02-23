"use client";
import Link from "next/link";
import FormComponent from "../components/userForm/form";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginStyles from "./login.module.css";

type FormData = {
  userName?: string;
  userEmail: string;
  userPassword: string;
};

export default function LoginPage() {
  const router = useRouter();

  const [formValues, setFormValues] = useState<FormData>({
    userEmail: "",
    userPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  const loginUsers = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        formValues,
        { withCredentials: true }
      );
      console.log("Login successful", response.data);
      // Clear form and redirect user
      setFormValues({ userEmail: "", userPassword: "" });
      setErrorMessage(null);
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.response.status);
      if (error.response.status === 401) {
        alert("Invalid credentials");
      }
    }
  };

  const handleLoginClickEvent = () => {
    loginUsers();
  };

  return (
    <div
      className={`flex bg-red-100 flex-col items-center md:flex-row w-screen h-screen p-4 gap-4 md:gap-1`}
    >
      <figure
        className={`w-32 h-32 md:w-10/12 md:h-3/4 md:bg-red-200 md:rounded-lg flex flex-col items-center md:p-10 mt-2 md:ml-4 md:shadow-sm`}
      >
        <img
          className={`w-full h-full md:w-full md:h-full`}
          src="/photos/ice-cream.png"
          alt="Ice Cream"
        />
      </figure>
      <div
        className={`w-full flex flex-col items-center justify-normal md:justify-center py-10 gap-0 md:gap-20 px-5`}
      >
        <FormComponent
          type="login"
          values={formValues}
          onChangeHandler={handleLoginChange}
          onClick={handleLoginClickEvent}
        />
      </div>
    </div>
  );
}

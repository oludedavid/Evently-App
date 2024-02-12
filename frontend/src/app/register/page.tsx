"use client";
import FormComponent from "../components/userForm/form";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div>
      <h1>Welcome to Amiably</h1>

      <FormComponent
        type="register"
        values={formValues}
        onChangeHandler={handleRegisterChange}
        onClick={handleRegisterClickEvent}
      />
      <Link href="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

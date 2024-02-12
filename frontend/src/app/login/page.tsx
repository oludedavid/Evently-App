"use client";
import Link from "next/link";
import FormComponent from "../components/userForm/form";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div>
      <h1>Welcome back to Amiably Login</h1>

      <FormComponent
        type="login"
        values={formValues}
        onChangeHandler={handleLoginChange}
        onClick={handleLoginClickEvent}
      />
      <Link href="/">
        <button>Home</button>
      </Link>
      <Link href="/register">
        <button>
          <small>not yet register? register here</small>
        </button>
      </Link>
    </div>
  );
}

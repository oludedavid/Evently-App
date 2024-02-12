"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  email: string;
};

export default function Home() {
  const [user, setUser] = useState<User>();

  const router = useRouter();

  const logoutUser = async () => {
    await axios.post("//localhost:4000/logout", {}, { withCredentials: true });
    router.push("/login");
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("//localhost:4000/@me", {
          withCredentials: true,
        });
        setUser(resp.data);
      } catch (error) {
        console.log("Not authenticated: " + error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Welcome to this Nextjs Application</h1>
      {/* will check if user is logged in or not */}
      {user != null ? (
        <div>
          <h2>Logged in</h2>
          <h3>ID: {user.id}</h3>
          <h3>Email: {user.email}</h3>

          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in</p>
          <div>
            <Link href="/login">
              <button>Login</button>
            </Link>
            <Link href="/register">
              <button>Register</button>
            </Link>
          </div>
          <Link href="/">
            <button>Back</button>
          </Link>
        </div>
      )}
    </div>
  );
}

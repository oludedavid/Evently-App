"use client";

import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  email: string;
};

export default function Dashboard() {
  const [user, setUser] = useState<User>();

  const router = useRouter();

  const logoutUser = async () => {
    await axios.post("//localhost:4000/logout", { withCredentials: true });
    router.push("/login");
  };

  // know if user is logged in
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
      {user != null ? (
        <div>
          <h1>Dashboard</h1>
          <h2>Logged in</h2>
          <h3>ID: {user.id}</h3>
          <p>{user.email}</p>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div>How did you here</div>
      )}
    </div>
  );
}

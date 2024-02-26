"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "./components/hero-component/hero";
import FeaturesSection from "./components/features/features";
import Benefits from "./components/benefits/benefits";
import CallToAction from "./components/call-to-action/callToAction";
import NavBar from "./components/navMenu/navigationMenu";
import Footer from "./components/footer/footer";
import Layout from "./components/layout/layout";

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
      {/* will check if user is logged in or not */}
      {user != null ? (
        <div>
          <h1>Welcome back to Evently {user.email}</h1>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div className="w-screen h-screen p-4">
          <Layout>
            <div className="md:pt-28">
              <HeroSection />
              <FeaturesSection />
              <Benefits />
              <CallToAction />
            </div>
          </Layout>
        </div>
      )}
    </div>
  );
}

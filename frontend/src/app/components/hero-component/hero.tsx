import { Fade, Slide } from "react-awesome-reveal";
import Link from "next/link";
import heroStyles from "./hero.module.css";

export default function HeroSection() {
  return (
    <div
      className={`bg-red-30 w-full h-full flex flex-col md:flex-row items-center gap-2 p-4`}
    >
      <img className="w-full md:w-1/2 " src="/photos/running.png" />
      <div className="w-full md:w-1/2 flex flex-col items-center gap-3 p-5">
        <Fade delay={1000} cascade>
          <h1
            className={`${heroStyles.header} w-full text-center text-5xl text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 font-bold`}
          >
            Simplify your life and manage events with ease.
          </h1>
        </Fade>

        <p className={`${heroStyles.para} text-2xl w-full text-center`}>
          Stay organized, focused, and achieve more with our all-in-one event
          and to-do app.
        </p>
        <div className="flex flex-row gap-4 items-center">
          <Link href="/login">
            <button className="w-32 bg-red-400 p-3 rounded-md">Login</button>
          </Link>
          <Link href="/register">
            <button className="w-32 bg-red-400 p-3 rounded-md">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

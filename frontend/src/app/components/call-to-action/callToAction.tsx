import Link from "next/link";
import callStyles from "./call.module.css";

export default function CallToAction() {
  return (
    <div
      className={`${callStyles.wrapper} w-full flex flex-col items-center justify-center gap-6 p-6`}
    >
      <div className="w-2/3 text-center  flex flex-col items-center justify-center gap-4 border-2 p-7 rounded-lg shadow-md">
        <p className="text-2xl ">
          Ready to take control of your time and events?
        </p>
        <p className="text-2xl ">
          Sign up today and start managing your events with ease.
        </p>
        <Link href="/register">
          <button className="w-32 bg-red-400 p-3 rounded-md">Sign up</button>
        </Link>
      </div>
    </div>
  );
}

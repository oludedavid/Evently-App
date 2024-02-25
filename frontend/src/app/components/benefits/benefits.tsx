import benefitsStyle from "./benefits.module.css";

export default function Benefits() {
  return (
    <div
      className={`${benefitsStyle.wrapper} w-full flex flex-col items-center justify-center pt-4 md:flex-row md:justify-center`}
    >
      <img width={250} height={250} src="/photos/messy.png" alt="messy" />
      <p
        className={`w-full p-6 md:p-7 md:w-1/2 mx-2 mb-6 text-2xl text-pretty font-light`}
      >
        Reduce stress and stay organized. Boost productivity and achieve your
        goals. Improve communication and collaboration. Gain valuable insights
        and make data-driven decisions.
      </p>
    </div>
  );
}

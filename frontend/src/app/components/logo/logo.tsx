import logoStyles from "./logo.module.css";
import { Fade, Slide } from "react-awesome-reveal";

export default function Logo() {
  return (
    <div
      className={`${logoStyles.logo} flex flex-row h-auto w-auto items-center justify-center gap-2 ml-4`}
    >
      <Fade duration={500} delay={300} cascade>
        <span className="text-3xl md:text-4xl font-bold">Evently</span>
        <span>
          <img className={``} width={50} height={50} src="/icons/arrows.png" />
        </span>
      </Fade>
    </div>
  );
}

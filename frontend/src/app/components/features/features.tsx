import { Fade, Slide } from "react-awesome-reveal";
import featuresStyles from "./features.module.css";

export default function FeaturesSection() {
  return (
    <div
      className={`flex flex-col items-center w-full p-10 gap-4 ${featuresStyles.wrapper}`}
    >
      <h1 className="text-4xl font-bold">Features</h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full p-8 gap-10">
        <Fade delay={1000} cascade damping={1e-1}>
          <div className="w-56 h-56 border-2 flex flex-col items-center gap-4 p-2">
            <img width={100} height={100} src="/icons/calendar.png" />
            <p className="p-4">Create, manage, and share events with ease.</p>
          </div>
          <div className="w-56 h-56 border-2 flex flex-col items-center gap-4 p-2">
            <img width={100} height={100} src="/icons/list.png" />
            <p className="pl-3">
              Break down tasks into manageable steps and track your progress.
            </p>
          </div>
          <div className="w-56 h-56 border-2 flex flex-col items-center gap-4 p-2">
            <img width={100} height={100} src="/icons/analytics.png" />
            <p>Gain insights into your productivity and event performance.</p>
          </div>
          <div className="w-56 h-56 border-2 flex flex-col items-center gap-4 p-2">
            <img width={100} height={100} src="/icons/ai.png" />
            <p className="p-4">Project Planning with AI chatbot</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

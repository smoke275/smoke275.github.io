import FadeIn from "@/components/FadeIn";
import { Wrench, Plane, Cpu } from "lucide-react";

export const metadata = {
  title: "Projects | Shashwata Mandal",
  description: "Robotics projects and software systems.",
};

export default function ProjectsPage() {
  return (
    <FadeIn>
      <div className="mb-24">
        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-8 border-b border-slate-800 pb-4">
          Robotics & Research Projects
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition-colors lg:col-span-2 xl:col-span-1">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="text-6xl">&rarr;</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-blue-400 w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">High-Speed Autonomous Pursuit System</h2>
            </div>
            <p className="text-slate-400 text-sm mb-6 uppercase tracking-wider font-semibold">ICRA 2025 Publication / ARL Collab</p>
            <ul className="text-slate-300 space-y-3 ml-5 list-disc">
              <li>Architected a pursuit system capable of tracking high-velocity evaders in complex environments, outperforming state-of-the-art geometric methods.</li>
              <li>Built a custom End-to-End Simulation Framework featuring an HTML5/Canvas environment designer and a transpiler to auto-migrate maps into SDF/Gazebo.</li>
              <li>Implemented a NeRF-based indoor caching architecture using Rust bindings to accelerate visual processing.</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Plane className="text-blue-400 w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">Multiple Target Tracking for Drone Swarms</h2>
            </div>
            <p className="text-slate-400 text-sm mb-6 uppercase tracking-wider font-semibold">IROS 2021 Publication</p>
            <ul className="text-slate-300 space-y-3 ml-5 list-disc">
              <li>Co-authored "Planning for Aerial Robot Teams", introducing a minimum-time trajectory tracking algorithm.</li>
              <li>Deployed full software stack on physical quadcopters (Pixhawk/PX4), conducting outdoor field tests to validate simulation results in real-world wind conditions.</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group border-dashed hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="text-slate-500 w-6 h-6" />
              <h2 className="text-2xl font-bold text-slate-300">Robotics Builds & Media</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Stay tuned! I'll be adding galleries of my latest personal robotics builds, pictures, and live video demonstrations involving Gazebo/MuJoCo simulations and PX4 flight tests shortly.
            </p>
          </div>

        </div>
      </div>
    </FadeIn>
  );
}
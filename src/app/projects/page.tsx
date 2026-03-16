import FadeIn from "@/components/FadeIn";
import { Wrench, Plane, Cpu, Github, Activity, Map, Bot } from "lucide-react";

export const metadata = {
  title: "Projects | Shashwata Mandal",
  description: "Robotics projects and software systems.",
};

export default function ProjectsPage() {
  return (
    <FadeIn>
      <div className="mb-24">
        {/* Highlighted Research Section */}
        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-8 border-b border-slate-800 pb-4">
          Robotics & Research Projects
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
        </div>

        {/* GitHub Projects Section */}
        <h2 className="text-2xl font-bold tracking-tight text-white mb-8 border-b border-slate-800 pb-4">
          Open Source Implementations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <a href="https://github.com/smoke275/SensorFusion3D" target="_blank" rel="noopener noreferrer" className="block bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 p-6 rounded-2xl transition-all hover:bg-slate-900 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Activity className="text-blue-400 w-6 h-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white">SensorFusion3D</h3>
              </div>
              <Github className="text-slate-500 w-5 h-5 group-hover:text-blue-400 transition-colors" />
            </div>
            <p className="text-slate-400 text-sm mb-4">Implementation of advanced 3D sensor fusion algorithms and Kalman Filters for precise robotics state estimation.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium">Python</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium">Kalman Filters</span>
            </div>
          </a>

          <a href="https://github.com/smoke275/ContinuousControl" target="_blank" rel="noopener noreferrer" className="block bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 p-6 rounded-2xl transition-all hover:bg-slate-900 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Bot className="text-blue-400 w-6 h-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white">ContinuousControl</h3>
              </div>
              <Github className="text-slate-500 w-5 h-5 group-hover:text-blue-400 transition-colors" />
            </div>
            <p className="text-slate-400 text-sm mb-4">Deep Reinforcement Learning agents focused on continuous control spaces for complex manipulator movements.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium">PyTorch</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium">DRL</span>
            </div>
          </a>

          <a href="https://github.com/smoke275/WhereAmI" target="_blank" rel="noopener noreferrer" className="block bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 p-6 rounded-2xl transition-all hover:bg-slate-900 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Map className="text-blue-400 w-6 h-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white">WhereAmI</h3>
              </div>
              <Github className="text-slate-500 w-5 h-5 group-hover:text-blue-400 transition-colors" />
            </div>
            <p className="text-slate-400 text-sm mb-4">Robust localization pipeline using AMCL (Adaptive Monte Carlo Localization) within ROS and Gazebo environments.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium">ROS</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium">C++</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium">Gazebo</span>
            </div>
          </a>

          <a href="https://github.com/smoke275/GoChaseIt" target="_blank" rel="noopener noreferrer" className="block bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 p-6 rounded-2xl transition-all hover:bg-slate-900 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Cpu className="text-blue-400 w-6 h-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white">GoChaseIt</h3>
              </div>
              <Github className="text-slate-500 w-5 h-5 group-hover:text-blue-400 transition-colors" />
            </div>
            <p className="text-slate-400 text-sm mb-4">Computer vision driven pursuit node allowing a robot to identify, track, and follow specific color signatures in dynamic setups.</p>
             <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium">ROS</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium">OpenCV</span>
            </div>
          </a>
        </div>

        {/* Media Block */}
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
    </FadeIn>
  );
}
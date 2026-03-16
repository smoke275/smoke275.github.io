import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { DownloadCloud, Github, CodeSquare, BrainCircuit, MonitorDot, Linkedin, GraduationCap, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="mt-8 mb-24">
      {/* Hero Section */}
      <FadeIn delay={0.1}>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 mb-24 mt-16">
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Shashwata Mandal
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
              Ph.D. Candidate specializing in <strong className="text-slate-200">Robotics</strong> and <strong className="text-slate-200">Autonomous Systems</strong> with 6+ years of experience in algorithm design and full-stack implementation.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <a href="/resources/resume/Resume_SMandal_RSE_V4.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-900/20">
                <DownloadCloud className="w-5 h-5" />
                Resume
              </a>
              <a href="/resources/resume/CV_ShashwataMandal_V1.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-base font-semibold rounded-xl text-slate-300 bg-slate-900 hover:bg-slate-800 transition-all active:scale-95">
                <FileText className="w-5 h-5" />
                CV
              </a>
              <a href="https://github.com/smoke275" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-base font-semibold rounded-xl text-slate-300 bg-slate-900 hover:bg-slate-800 transition-all active:scale-95">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/shashwata-mandal/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-base font-semibold rounded-xl text-slate-300 bg-slate-900 hover:bg-slate-800 transition-all active:scale-95">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="https://scholar.google.com/citations?user=Pr5dMC8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-base font-semibold rounded-xl text-slate-300 bg-slate-900 hover:bg-slate-800 transition-all active:scale-95">
                <GraduationCap className="w-5 h-5" />
                Google Scholar
              </a>
            </div>
          </div>
          <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px] rounded-full border-4 lg:border-8 border-slate-800 shadow-2xl relative overflow-hidden shrink-0">
            <Image 
              src="/resources/photos/profile/PXL_20250822_235417590.jpg" 
              alt="Shashwata Mandal" 
              fill 
              className="object-cover" 
              priority 
              sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 400px"
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 border-b border-slate-800 pb-4">Experience</h2>
          
          <div className="space-y-12">
            <div className="relative pl-8 before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-950 mt-1.5" />
                <h3 className="text-xl font-semibold text-white">Research Intern (Path Planning)</h3>
                <p className="text-slate-400 mt-1 mb-4"><strong className="text-slate-300">Army Research Lab</strong> • Adelphi, MD • <em>Mar 2025 – Present</em></p>
                <ul className="text-slate-300 space-y-2 list-disc ml-4">
                  <li>Engineered an entropy-based controller in a ROS-based simulation to maintain line-of-sight tracking, achieving target retention rates higher than state-of-the-art baselines.</li>
                  <li>Developed a Corner-Aware Risk Map module in Python to predict intruder escape routes.</li>
                  <li>Designed a Neural Visibility Surrogate using supervised learning to approximate geometric oracle queries, reducing inference latency to 30ms for 1,000 points.</li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-slate-950 mt-1.5" />
                <h3 className="text-xl font-semibold text-white">Associate Software Engineer</h3>
                <p className="text-slate-400 mt-1 mb-4"><strong className="text-slate-300">Nomura Research Institute Financial Technologies Ltd.</strong> • Kolkata, India • <em>Aug 2016 – Aug 2017</em></p>
                <ul className="text-slate-300 space-y-2 list-disc ml-4">
                  <li>Led full-stack development of financial web platforms using Java Spring and JQuery, ensuring 99.9% uptime.</li>
                  <li>Optimized backend SQL queries, reducing page load times by 30% during high-traffic phases.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 border-b border-slate-800 pb-4">Education</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-2">Ph.D. in Computer Science</h3>
              <p className="text-blue-400 font-medium mb-2">Iowa State University (2019 – May 2026)</p>
              <p className="text-slate-400 text-sm">GPA: 3.71</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-2">M.S. in Computer Science</h3>
              <p className="text-slate-300 font-medium mb-2">Pennsylvania State University (2017 – 2019)</p>
              <p className="text-slate-400 text-sm">GPA: 3.47</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-2">B.Tech in Computer Science & Engineering</h3>
              <p className="text-slate-300 font-medium">West Bengal University of Technology (2012 – 2016)</p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 border-b border-slate-800 pb-4">Core Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800/50 p-6 rounded-2xl hover:bg-slate-900 transition-colors">
              <CodeSquare className="text-blue-400 w-8 h-8 mb-4()"/>
              <h3 className="text-white font-semibold mb-3">Languages</h3>
              <p className="text-slate-400 text-sm leading-relaxed">C++ (Modern 14/17), Python, Java, Rust, JavaScript, HTML/CSS</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/50 p-6 rounded-2xl hover:bg-slate-900 transition-colors">
              <BrainCircuit className="text-blue-400 w-8 h-8 mb-4()"/>
              <h3 className="text-white font-semibold mb-3">Robotics</h3>
              <p className="text-slate-400 text-sm leading-relaxed">ROS/ROS2, Gazebo, MuJoCo, Isaac Sim/Lab, PX4 Autopilot, RViz</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/50 p-6 rounded-2xl hover:bg-slate-900 transition-colors">
              <MonitorDot className="text-blue-400 w-8 h-8 mb-4()"/>
              <h3 className="text-white font-semibold mb-3">Systems & Viz</h3>
              <p className="text-slate-400 text-sm leading-relaxed">WebGL, OpenCV, OpenGL, Docker, Linux, embedded (Raspberry Pi/Jetson)</p>
            </div>
          </div>
        </div>
      </FadeIn>

    </div>
  );
}
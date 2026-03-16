import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-8 mb-24">
      {/* Hero Section */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 mb-16">
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Shashwata Mandal
          </h1>
          <p className="text-lg text-slate-400 mb-6 max-w-2xl">
            Ph.D. Candidate specializing in Robotics and Autonomous Systems with 6+ years of experience in algorithm design and full-stack implementation.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <a href="/resources/resume/Resume_SMandal_RSE_V4.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Download Resume
            </a>
            <a href="https://github.com/smoke275" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-3 border border-slate-700 text-base font-medium rounded-md text-slate-300 bg-slate-900 hover:bg-slate-800 transition-colors">
              GitHub
            </a>
          </div>
        </div>
        <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-slate-800 border-4 border-slate-700 flex flex-col items-center justify-center overflow-hidden shrink-0 relative">
          <Image src="/resources/photos/PXL_20250822_235417590.jpg" alt="Shashwata Mandal" fill className="object-cover" priority />
        </div>
      </div>

      <article className="prose prose-invert lg:prose-lg max-w-none">
        <h2>About Me</h2>
        <p>
          I am rebuilding my portfolio with <strong>Next.js</strong> and <strong>Tailwind CSS</strong> to modernize its architecture, while preserving my previous features like videos, publications, and projects.
        </p>

        <h2>Robotics Projects & Media</h2>
        <p>
          Stay tuned! I'll be adding galleries of my latest robotics builds, pictures, and video demonstrations soon.
        </p>

        <h2>Experience</h2>
      
      <h3>Research Intern (Path Planning)</h3>
      <p><strong>Army Research Lab</strong> | Adelphi, MD | <em>March 2025 – Present</em></p>
      <ul>
        <li>Engineered an entropy-based controller in a ROS-based simulation to maintain line-of-sight tracking, achieving target retention rates higher than state-of-the-art baselines.</li>
        <li>Developed a Corner-Aware Risk Map module in Python to predict intruder escape routes, significantly reducing computation time for trajectory generation.</li>
        <li>Designed a Neural Visibility Surrogate using supervised learning to approximate geometric oracle queries, reducing inference latency to 30ms for 1,000 points.</li>
      </ul>

      <h3>Associate Software Engineer</h3>
      <p><strong>Nomura Research Institute Financial Technologies Ltd.</strong> | Kolkata, India | <em>Aug 2016 – Aug 2017</em></p>
      <ul>
        <li>Led full-stack development of financial web platforms using Java Spring and JQuery, ensuring 99.9% uptime for critical trading modules.</li>
        <li>Optimized backend SQL queries, reducing page load times by 30% during high-traffic Agile delivery phases.</li>
      </ul>

      <h2>Education</h2>
      <ul>
        <li><strong>Ph.D. in Computer Science</strong> (GPA: 3.71) - Iowa State University (2019 – Expected May 2026)</li>
        <li><strong>Master of Science in Computer Science</strong> (GPA: 3.47) - Pennsylvania State University (2017 – 2019)</li>
        <li><strong>Bachelor of Technology in Computer Science & Engineering</strong> - West Bengal University of Technology (2012 – 2016)</li>
      </ul>

      <h2>Selected Research & Projects</h2>
      
      <h3>High-Speed Autonomous Pursuit System</h3>
      <p><em>ICRA 2025 Publication / ARL Collab</em></p>
      <ul>
        <li>Architected a pursuit system capable of tracking high-velocity evaders in complex environments, outperforming state-of-the-art geometric methods.</li>
        <li>Built a custom End-to-End Simulation Framework featuring an HTML5/Canvas environment designer and a transpiler to auto-migrate maps into SDF/Gazebo.</li>
        <li>Implemented a NeRF-based indoor caching architecture using Rust bindings to accelerate visual processing.</li>
      </ul>

      <h3>Multiple Target Tracking for Drone Swarms</h3>
      <p><em>IROS 2021 Publication</em></p>
      <ul>
        <li>Co-authored "Planning for Aerial Robot Teams", introducing a minimum-time trajectory tracking algorithm.</li>
        <li>Deployed full software stack on physical quadcopters (Pixhawk/PX4), conducting outdoor field tests to validate simulation results in real-world wind conditions.</li>
      </ul>

      <h2>Publications</h2>
      <ul className="text-sm space-y-4">
        <li>
          <strong>S. Mandal</strong>, S. Bhattacharya. "Scalable Multi-Agent Surveillance: A Kernel-Based Approach." <em>Proceedings of the IEEE International Conference on Robotics and Automation (ICRA)</em>, 2025.
        </li>
        <li>
          <strong>S. Mandal</strong>, S. Bhattacharya. "From Distributed Coverage to Multi-agent Target Tracking." <em>Proceedings of the International Symposium on Multi-Robot and Multi-Agent Systems (MRS)</em>, 2023.
        </li>
        <li>
          <strong>S. Mandal</strong>, S. Bhattacharya. "Relay Pursuit for Multirobot Target Tracking on Tile Graphs." <em>Proceedings of the IEEE International Conference on Robotics and Automation (ICRA)</em>, 2023.
        </li>
        <li>
          G. Laguna, <strong>S. Mandal</strong>, S. Bhattacharya. "Roadmap for visibility-based target tracking: Iterative construction and motion strategy." <em>Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</em>, 2021.
        </li>
        <li>
          <strong>S. Mandal</strong>, T. Gao, S. Bhattacharya. "Planning for Aerial Robot Teams for Wide-Area Biometric and Phenotypic Data Collection." <em>Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</em>, 2021.
        </li>
        <li>
          H. Saha, <strong>S. Mandal</strong>, et al. "Comparative performance analysis between nRF24L01+ and XBEE ZB module based wireless ad-hoc networks." <em>International Journal of Computer Network and Information Security</em>, 2017.
        </li>
        <li>
          S.G. Dastider, H. Kashyap, <strong>S. Mandal</strong>, et al. "Feature subset selection for clustering using binary particle swarm optimization." <em>Proceedings of the International Conference on Information Technology (ICIT)</em>, 2015.
        </li>
      </ul>

      <h2>Technical Skills</h2>
      <ul>
        <li><strong>Languages:</strong> C++ (Modern 14/17), Python, Java, Rust, JavaScript, HTML/CSS</li>
        <li><strong>Systems & Robotics:</strong> ROS/ROS2, Gazebo, MuJoCo, Isaac Sim/Lab, PX4 Autopilot, RViz, MavLink, CrazyFlie</li>
        <li><strong>Simulation & Viz:</strong> WebGL, Three.js, OpenCV, OpenGL, Physics Engine Integration</li>
        <li><strong>Hardware:</strong> Raspberry Pi 4/5, NVIDIA Jetson, Pixhawk, Lidar/Camera Integration</li>
      </ul>
    </article>
    </div>
  );
}
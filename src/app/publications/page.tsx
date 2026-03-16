import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Publications | Shashwata Mandal",
  description: "Research publications and academic papers.",
};

export default function PublicationsPage() {
  return (
    <FadeIn>
      <div className="mb-24">
        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-8 border-b border-slate-800 pb-4">
          Publications
        </h1>
        
        <div className="prose prose-invert lg:prose-lg max-w-none">
          <ul className="text-sm sm:text-base space-y-6 list-none pl-0">
            <li className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
              <strong>S. Mandal</strong>, S. Bhattacharya. 
              <span className="block mt-2 text-white font-medium">"Scalable Multi-Agent Surveillance: A Kernel-Based Approach."</span> 
              <em className="text-slate-400 block mt-1">Proceedings of the IEEE International Conference on Robotics and Automation (ICRA), 2025.</em>
            </li>
            <li className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
              <strong>S. Mandal</strong>, S. Bhattacharya. 
              <span className="block mt-2 text-white font-medium">"From Distributed Coverage to Multi-agent Target Tracking."</span>
              <em className="text-slate-400 block mt-1">Proceedings of the International Symposium on Multi-Robot and Multi-Agent Systems (MRS), 2023.</em>
            </li>
            <li className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
              <strong>S. Mandal</strong>, S. Bhattacharya. 
              <span className="block mt-2 text-white font-medium">"Relay Pursuit for Multirobot Target Tracking on Tile Graphs."</span>
              <em className="text-slate-400 block mt-1">Proceedings of the IEEE International Conference on Robotics and Automation (ICRA), 2023.</em>
            </li>
            <li className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
              G. Laguna, <strong>S. Mandal</strong>, S. Bhattacharya. 
              <span className="block mt-2 text-white font-medium">"Roadmap for visibility-based target tracking: Iterative construction and motion strategy."</span>
              <em className="text-slate-400 block mt-1">Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2021.</em>
            </li>
            <li className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
              <strong>S. Mandal</strong>, T. Gao, S. Bhattacharya. 
              <span className="block mt-2 text-white font-medium">"Planning for Aerial Robot Teams for Wide-Area Biometric and Phenotypic Data Collection."</span>
              <em className="text-slate-400 block mt-1">Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2021.</em>
            </li>
            <li className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
              H. Saha, <strong>S. Mandal</strong>, et al. 
              <span className="block mt-2 text-white font-medium">"Comparative performance analysis between nRF24L01+ and XBEE ZB module based wireless ad-hoc networks."</span>
              <em className="text-slate-400 block mt-1">International Journal of Computer Network and Information Security, 2017.</em>
            </li>
            <li className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
              S.G. Dastider, H. Kashyap, <strong>S. Mandal</strong>, et al. 
              <span className="block mt-2 text-white font-medium">"Feature subset selection for clustering using binary particle swarm optimization."</span>
              <em className="text-slate-400 block mt-1">Proceedings of the International Conference on Information Technology (ICIT), 2015.</em>
            </li>
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}
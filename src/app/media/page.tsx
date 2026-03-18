import FadeIn from "@/components/FadeIn";
import { Wrench, Camera } from "lucide-react";
import Image from "next/image";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Robotics & Media | Shashwata Mandal",
  description: "Galleries of personal robotics builds, pictures, and live video demonstrations.",
};

export default function MediaPage() {
  const roboticsDir = path.join(process.cwd(), 'public', 'resources', 'photos', 'robotics');
  let images: string[] = [];
  let captions: Record<string, string> = {};
  
  try {
    if (fs.existsSync(roboticsDir)) {
      const files = fs.readdirSync(roboticsDir);
      images = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
      });

      const captionsPath = path.join(roboticsDir, 'captions.json');
      if (fs.existsSync(captionsPath)) {
        try {
          captions = JSON.parse(fs.readFileSync(captionsPath, 'utf8'));
        } catch (e) {
          console.error("Error reading captions.json", e);
        }
      }
    }
  } catch (error) {
    console.error("Error reading robotics directory", error);
  }

  return (
    <FadeIn>
      <div className="mb-24">
        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-8 border-b border-slate-800 pb-4 flex items-center gap-3">
          <Camera className="w-8 h-8 text-blue-400" />
          Robotics Builds & Media
        </h1>
        
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors group shadow-lg">
                  <Image
                    src={`/resources/photos/robotics/${img}`}
                    alt={captions[img] || `Robotics media ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={img.toLowerCase().endsWith('.gif')}
                  />
                </div>
                {captions[img] && (
                  <p className="text-sm text-slate-400 text-center px-2">{captions[img]}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group border-dashed hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="text-slate-500 w-6 h-6" />
              <h2 className="text-2xl font-bold text-slate-300">Coming Soon</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Stay tuned! I'll be adding galleries of my latest personal robotics builds, pictures, and live video demonstrations involving Gazebo/MuJoCo simulations and PX4 flight tests shortly.
            </p>
          </div>
        )}
      </div>
    </FadeIn>
  );
}
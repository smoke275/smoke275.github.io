import type { Metadata } from 'next';
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL('https://smoke275.github.io'),
  title: "Shashwata Mandal",
  description: "Ph.D. Candidate specializing in Robotics and Autonomous Systems with 6+ years of experience in algorithm design and full-stack implementation.",
  openGraph: {
    title: "Shashwata Mandal | Robotics & Autonomous Systems",
    description: "Ph.D. Candidate specializing in Robotics and Autonomous Systems with 6+ years of experience in algorithm design and full-stack implementation.",
    url: "https://smoke275.github.io",
    siteName: "Shashwata Mandal",
    images: [
      {
        url: "/resources/photos/profile/PXL_20250822_235417590.jpg",
        width: 800,
        height: 800,
        alt: "Shashwata Mandal Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200 min-h-screen">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-12">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

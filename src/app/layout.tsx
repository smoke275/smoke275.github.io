import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Shashwata Mandal</title>
      </head>
      <body className="bg-slate-950 text-slate-200 min-h-screen">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-12">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
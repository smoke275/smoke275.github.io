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
      <body className="bg-white text-gray-900 min-h-screen">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
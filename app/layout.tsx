import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raptor Webcraft Technologies",
  description: "Software & Tech Solutions — Website Development, IT Consulting & Advisory.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#0d0618", color: "#fbfbff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: { background: "#1a0a2e", color: "#fff", border: "1px solid #5B2C9F" },
            success: { iconTheme: { primary: "#FF8C00", secondary: "#fff" } },
          }}
        />
      </body>
    </html>
  );
}

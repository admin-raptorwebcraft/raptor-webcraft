import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Raptor Webcraft Technologies',
  description: 'Software & IT Solutions Company — We Develop Websites, Do IT Consulting and Advisory.',
  keywords: ['web development', 'IT consulting', 'software solutions', 'Raptor Webcraft'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: '#0d0618' }}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-right" toastOptions={{
          style: { background: '#1e0a3c', color: '#fbfbff', border: '1px solid #5B2C9F' },
        }} />
      </body>
    </html>
  );
}

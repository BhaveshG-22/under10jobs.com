import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Under10Jobs - Jobs Under 10 Applicants",
  description: "Get alerts for jobs with fewer than 10 applicants and increase your chances of getting noticed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-4 border-b">
          <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="font-bold text-xl" style={{ color: 'var(--gray-900)' }}>Under10Jobs</div>
            <div className="space-x-4">
              <a href="/" className="hover:underline" style={{ color: 'var(--gray-900)' }}>Home</a>
              <a href="/pricing" className="hover:underline" style={{ color: 'var(--gray-900)' }}>Pricing</a>
              <a href="/auth/sign-in" className="hover:underline" style={{ color: 'var(--blue-700)' }}>Sign In</a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t p-4 text-center">
          <div className="max-w-7xl mx-auto">
            <p style={{ color: 'var(--gray-700)' }}>© {new Date().getFullYear()} Under10Jobs</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

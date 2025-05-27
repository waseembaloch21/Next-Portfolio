"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WelcomeScreen from "./Components/welcomeScreen";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Always show the welcome screen on page reload
    setShowWelcome(true);

    const timeout = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Adjust timing as needed

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {showWelcome ? <WelcomeScreen setShowWelcome={setShowWelcome} /> : children}
      </body>
    </html>
  );
}

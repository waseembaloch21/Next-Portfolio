"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WelcomeScreen from "./Components/welcomeScreen";
import { ThemeProvider } from "./context/ThemeContextProvider";


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
    
    setShowWelcome(true);

    const timeout = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); 

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <html lang="en">
      <body className={`bg-black transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
        {showWelcome ? <WelcomeScreen  setShowWelcome={setShowWelcome} /> : children}
        </ThemeProvider>
      </body>
    </html>
  );
}

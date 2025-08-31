"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import ChatButton from "../components/ChatButton";
import ChatPopup from "../components/ChatPopup"; // import your portal chat component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>SCS</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Chat Button */}
        <ChatButton
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />

        {/* Chat Popup Portal */}
        {isOpen && <ChatPopup onClose={() => setIsOpen(false)} />}

        {/* Portal div for ChatPopup */}
        <div id="chat-portal" />
      </body>
    </html>
  );
}

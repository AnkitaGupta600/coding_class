"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react"; // Close icon

const ChatButton = ({ isOpen, onClick }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Server pe kuch render mat karo

  return createPortal(
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 focus:outline-none"
      style={{ background: "transparent", border: "none", padding: 0 }}
    >
      {isOpen ? (
        <X className="w-8 h-8 text-gray-700" />
      ) : (
        <img src="/image.png" alt="Chat" className="w-14 h-14 object-contain" />
      )}
    </button>,
    document.body
  );
};

export default ChatButton;

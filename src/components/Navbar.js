"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">MemeVerse</Link>
      
      <div className="flex space-x-6">
        <Link href="/explore" className="hover:text-gray-400">Explore</Link>
        <Link href="/upload" className="hover:text-gray-400">Upload</Link>
        <Link href="/leaderboard" className="hover:text-gray-400">Leaderboard</Link>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className="ml-4 px-3 py-1 bg-gray-700 rounded">
          {isDarkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}

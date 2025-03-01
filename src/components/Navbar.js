"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react"; // Icons

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-blue-400 tracking-wide">
          MemeVerse 🚀
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/explore" className="hover:text-blue-400 transition duration-300 text-lg">Explore</Link>
          <Link href="/upload" className="hover:text-blue-400 transition duration-300 text-lg">Upload</Link>
          <Link href="/leaderboard" className="hover:text-blue-400 transition duration-300 text-lg">Leaderboard</Link>
          <Link href="/profile" className="hover:text-blue-400 transition duration-300 text-lg flex items-center">
            <UserCircle className="w-6 h-6 mr-1" /> Profile
          </Link>
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition">
            {isDarkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4 text-center absolute w-full left-0 top-[64px] shadow-md">
          <Link href="/explore" className="block hover:text-blue-400 text-lg">Explore</Link>
          <Link href="/upload" className="block hover:text-blue-400 text-lg">Upload</Link>
          <Link href="/leaderboard" className="block hover:text-blue-400 text-lg">Leaderboard</Link>
          <Link href="/profile" className="block hover:text-blue-400 text-lg flex items-center justify-center">
            <UserCircle className="w-6 h-6 mr-1" /> Profile
          </Link>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
            {isDarkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      )}
    </nav>
  );
}

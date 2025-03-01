"use client"; // Required for animations & interactivity in Next.js App Router

import { motion } from "framer-motion"; // For animations
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-gray-800 shadow-md">
        <div className="text-2xl font-bold">🔥 MemeVerse</div>
        <ul className="flex gap-6">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/trending" className="hover:text-gray-400">Trending</Link></li>
          <li><Link href="/upload" className="hover:text-gray-400">Upload</Link></li>
          <li><Link href="/profile" className="hover:text-gray-400">Profile</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to MemeVerse
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Explore the latest and greatest memes, share your own, and have fun!
        </motion.p>

        <motion.button
          className="px-6 py-3 bg-blue-500 rounded-lg text-white font-bold hover:bg-blue-600 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/trending">Explore Memes</Link>
        </motion.button>
      </div>
    </div>
  );
}

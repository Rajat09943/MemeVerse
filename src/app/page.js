"use client";
import { useEffect, useState } from "react";
import { fetchMemes } from "@/api/fetchMemes";
import MemeCard from "@/components/MemeCard";

export default function Home() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    async function loadMemes() {
      const memeData = await fetchMemes();
      setMemes(memeData.slice(0, 6)); // Show only 6 memes
    }
    loadMemes();
  }, []);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Trending Memes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
}

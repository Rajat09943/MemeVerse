"use client";
import { useState, useEffect } from "react";
import CommentSection from "./CommentSection";

export default function MemeCard({ meme }) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes-${meme.id}`);
    if (savedLikes) {
      setLikes(parseInt(savedLikes, 10));
    }
  }, [meme.id]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${meme.id}`, newLikes);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img src={meme.url} alt={meme.name} className="w-full h-auto rounded" />
      <h3 className="text-lg font-bold mt-2">{meme.name}</h3>
      <button
        onClick={handleLike}
        className="mt-2 px-3 py-1 bg-blue-600 rounded text-white hover:bg-blue-700"
      >
        ❤️ {likes}
      </button>

      {/* Comment Section */}
      <CommentSection memeId={meme.id} />
    </div>
  );
}

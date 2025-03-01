"use client";
import { useEffect, useState } from "react";

export default function LeaderboardPage() {
  const [topMemes, setTopMemes] = useState([]);

  useEffect(() => {
    // Fetch liked memes from local storage
    const likedMemeIds = Object.keys(localStorage)
      .filter((key) => key.startsWith("likes-"))
      .map((key) => ({
        id: key.replace("likes-", ""),
        likes: parseInt(localStorage.getItem(key), 10),
      }));

    // Sort memes by likes (descending) and take top 10
    const sortedMemes = likedMemeIds.sort((a, b) => b.likes - a.likes).slice(0, 10);
    setTopMemes(sortedMemes);
  }, []);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">🏆 Meme Leaderboard 🏆</h1>

      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
        {topMemes.length > 0 ? (
          <ol className="list-decimal text-lg text-white pl-6">
            {topMemes.map((meme, index) => (
              <li key={meme.id} className="py-2">
                Meme ID: {meme.id} - ❤️ {meme.likes} Likes
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-gray-400 text-center">No memes have been liked yet.</p>
        )}
      </div>
    </div>
  );
}

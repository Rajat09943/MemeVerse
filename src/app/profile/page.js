"use client";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [userMemes, setUserMemes] = useState([]);
  const [likedMemes, setLikedMemes] = useState([]);
  const [profile, setProfile] = useState({ name: "User", bio: "Meme Lover", avatar: "/default-avatar.png" });

  useEffect(() => {
    // Load uploaded memes from Local Storage
    const savedMemes = JSON.parse(localStorage.getItem("userMemes")) || [];
    setUserMemes(savedMemes);

    // Load liked memes from Local Storage
    const likedMemeIds = Object.keys(localStorage).filter((key) => key.startsWith("likes-"));
    const likedMemeData = likedMemeIds.map((key) => ({
      id: key.replace("likes-", ""),
      likes: localStorage.getItem(key),
    }));
    setLikedMemes(likedMemeData);
  }, []);

  return (
    <div className="flex flex-col items-center p-6">
      {/* Profile Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full max-w-md">
        <img src={profile.avatar} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-bold">{profile.name}</h2>
        <p className="text-gray-400">{profile.bio}</p>
      </div>

      {/* Uploaded Memes */}
      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Your Uploaded Memes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userMemes.length > 0 ? (
            userMemes.map((meme) => (
              <div key={meme.id} className="bg-gray-700 p-4 rounded-lg shadow-lg">
                <img src={meme.image} alt="Uploaded Meme" className="w-full h-auto rounded" />
                <p className="mt-2">{meme.caption}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No memes uploaded yet.</p>
          )}
        </div>
      </div>

      {/* Liked Memes */}
      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Liked Memes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {likedMemes.length > 0 ? (
            likedMemes.map((meme) => (
              <div key={meme.id} className="bg-gray-700 p-4 rounded-lg shadow-lg">
                <p className="text-white">Meme ID: {meme.id}</p>
                <p className="text-yellow-400">❤️ {meme.likes} Likes</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No memes liked yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";

export default function CommentSection({ memeId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments-${memeId}`)) || [];
    setComments(savedComments);
  }, [memeId]);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${memeId}`, JSON.stringify(updatedComments));
    setNewComment("");
  };

  return (
    <div className="mt-4">
      <h4 className="font-bold">Comments</h4>
      <input
        type="text"
        className="mt-2 p-2 w-full bg-gray-700 text-white rounded"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        onClick={handleAddComment}
        className="mt-2 px-3 py-1 bg-green-600 rounded text-white hover:bg-green-700"
      >
        Add Comment
      </button>
      <ul className="mt-2">
        {comments.map((comment, index) => (
          <li key={index} className="bg-gray-700 p-2 rounded mt-1">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

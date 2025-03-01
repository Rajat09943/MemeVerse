"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadForm() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => setImage(reader.result);
        reader.readAsDataURL(file);
      }
    },
  });

  const handleUpload = () => {
    if (!image) {
      alert("Please upload an image!");
      return;
    }

    const newMeme = { id: Date.now(), image, caption };
    const existingMemes = JSON.parse(localStorage.getItem("userMemes")) || [];
    localStorage.setItem("userMemes", JSON.stringify([...existingMemes, newMeme]));

    alert("Meme uploaded successfully!");
    setImage(null);
    setCaption("");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Upload Your Meme</h2>

      {/* Drag & Drop Upload */}
      <div {...getRootProps()} className="p-6 border-2 border-dashed border-gray-500 text-center cursor-pointer">
        <input {...getInputProps()} />
        {image ? (
          <img src={image} alt="Preview" className="max-w-full h-48 object-cover rounded" />
        ) : (
          <p className="text-gray-300">Drag & drop an image here, or click to upload</p>
        )}
      </div>

      {/* Simple Caption Input (No react-quill) */}
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="mt-4 w-full p-2 bg-white text-black rounded"
        placeholder="Write your meme caption here..."
      ></textarea>

      {/* Upload Button */}
      <button onClick={handleUpload} className="mt-4 px-4 py-2 bg-green-600 rounded text-white hover:bg-green-700">
        Upload Meme
      </button>
    </div>
  );
}

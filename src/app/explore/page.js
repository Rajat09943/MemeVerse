"use client";
import { useEffect, useState } from "react";
import { fetchMemes } from "@/api/fetchMemes";
import MemeCard from "@/components/MemeCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ExplorePage() {
  const [memes, setMemes] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMoreMemes();
  }, []);

  const loadMoreMemes = async () => {
    const memeData = await fetchMemes();
    const newMemes = memeData.slice((page - 1) * 10, page * 10);

    setMemes((prev) => [...prev, ...newMemes]);

    if (newMemes.length < 10) {
      setHasMore(false);
    }

    setPage((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Explore Memes</h1>

      <InfiniteScroll
        dataLength={memes.length}
        next={loadMoreMemes}
        hasMore={hasMore}
        loader={<p className="text-center mt-4">Loading more memes...</p>}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {memes.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

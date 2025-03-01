import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">MemeVerse 🚀</h2>
      <div className="navbar-links">
        <Link href="/explore">Explore</Link>
        <Link href="/upload">Upload</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/profile">Profile</Link>
        <button className="theme-toggle">🌞 Light</button>
      </div>
    </div>
  );
};

export default Navbar;

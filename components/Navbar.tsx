export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 border-b border-gray-800">
      <h1 className="text-3xl font-bold text-yellow-400">
        🎬 FILMYIMIKA
      </h1>

      <div className="flex gap-6 text-gray-300">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">Series</a>
        <a href="#">News</a>
      </div>
    </nav>
  );
}

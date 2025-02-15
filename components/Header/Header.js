export default function Header() {
  return (
    <nav className="w-full flex justify-between items-center p-6 px-12 bg-[#035939] text-[#FAF4E6] font-sans relative">
      {/* Title with responsive sizing */}
      <div className="flex-1">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl transition-all duration-300">
          DQF
        </h1>
      </div>

      {/* Centered navigation links */}
      <div className="hidden md:flex space-x-6 absolute left-1/2 -translate-x-1/2">
        <a href="#" className="text-lg hover:underline">About</a>
        <a href="#" className="text-lg hover:underline">Resources</a>
        <a href="#" className="text-lg hover:underline">Events</a>
        <a href="#" className="text-lg hover:underline">FAQ</a>
        <a href="#" className="text-lg hover:underline">Contact</a>
      </div>

      {/* Buttons container */}
      <div className="flex-1 flex justify-end space-x-4">
        <button className="bg-[#FAF4E6] text-[#035939] px-4 py-2 rounded text-sm md:text-base">
          Book a court
        </button>
        <button className="border-2 border-[#FAF4E6] px-4 py-2 rounded text-sm md:text-base">
          Join open play
        </button>
      </div>
    </nav>
  );
}
  
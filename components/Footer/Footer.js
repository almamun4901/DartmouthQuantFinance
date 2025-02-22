import { useEffect, useState } from "react";

export default function Footer() {
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    // Get the last modified date
    const modifiedDate = new Date(document.lastModified);

    // Format the date as "MMM YYYY" (e.g., "FEB 2025")
    const formattedDate = modifiedDate.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }).toUpperCase();

    setLastUpdate(formattedDate);
  }, []);

  return (
    <footer className="bg-[#035939] text-[#FAF4E6] py-8 px-6 sm:px-12 lg:px-20">
      {/* Top Section - Message (Left) and Socials (Right) */}
      <div className="flex flex-col sm:flex-row justify-between items-start text-sm">
        {/* Left - Message */}
        <p className="max-w-lg font-mono leading-relaxed">
          NOW THAT YOU GOT HERE, WHY NOT GETTING IN TOUCH? LOOK AROUND, THERE ARE ALL MY SOCIALS
          AND EMAIL ADDRESS. IF YOU WANT TO COLLABORATE OR YOU HAVE A NEW COOL IDEA, FEEL FREE
          TO DROP ME A MESSAGE, I WOULD LOVE TO HEAR IT!
        </p>

        {/* Right - Social Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">INSTAGRAM</a>
          <a href="#" className="hover:underline">X / TWITTER</a>
          <a href="#" className="hover:underline">BEHANCE</a>
          <a href="#" className="hover:underline">DRIBBBLE</a>
          <a href="#" className="hover:underline">LINKEDIN</a>
        </div>
      </div>

      {/* Bottom Section - Four Items */}
      <div className="mt-6 flex justify-between items-center text-sm">
        {/* Left - Year */}
        <p>©{new Date().getFullYear()}</p>

        {/* Center Left - Dynamic Last Update */}
        <p>LAST UPDATE: {lastUpdate}</p>

        {/* Center Right - Email */}
        <a href="mailto:dqfc@dartmouth.edu" className="hover:underline">
          → dqfc@dartmouth.edu
        </a>

        {/* Right - Back to Top */}
        <a href="#" className="flex items-center gap-1 hover:underline">
          TOP ↑
        </a>
      </div>
    </footer>
  );
}

import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

export default function Header() {
  return (
    <nav className="w-full flex flex-col md:flex-row items-center justify-between p-4 md:p-6 lg:px-12 bg-[#035939] text-[#FAF4E6] font-sans">
      {/* Logo - Centered on mobile, aligned left on larger screens */}
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <MuiLink href="/" component={NextLink} underline="none" color="inherit">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl transition-all duration-300">
            DQF
          </h1>
        </MuiLink>
      </div>

      {/* Navigation Links - Centered on large screens */}
      <div className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-6 xl:space-x-8 whitespace-nowrap">
        <a href="#" className="text-sm lg:text-base hover:underline">About</a>
        <NextLink href="/resources" className="text-sm lg:text-base hover:underline">Resources</NextLink>
        <a href="#" className="text-sm lg:text-base hover:underline">Events</a>
        <NextLink href="/members" className="text-sm lg:text-base hover:underline">Members</NextLink>
        <a href="#" className="text-sm lg:text-base hover:underline">Contact</a>
        <NextLink href="/" className="text-sm lg:text-base hover:underline">Home</NextLink>
      </div>

      {/* Buttons - Aligned Right on Large Screens, Stacked on Mobile */}
      <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
        {/* <button className="w-full md:w-auto bg-[#FAF4E6] text-[#035939] px-4 py-2 rounded text-sm md:text-base">
          Drop your resume
        </button> */}
        <a 
          href="https://groupme.com/join_group/99052747/cbhDP8Wv" 
          className="w-full md:w-auto border-2 border-[#FAF4E6] px-4 py-2 rounded text-sm md:text-base hover:bg-[#FAF4E6] hover:text-[#035939] transition-colors text-center"
        >
          Join GroupMe
        </a>
      </div>
    </nav>
  );
}

  
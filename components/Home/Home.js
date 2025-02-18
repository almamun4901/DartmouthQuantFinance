import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#035939] text-[#FAF4E6] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Landing Page Content */}
      <motion.div
        className="flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Club Title */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Dartmouth Quant Finance
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg lg:text-xl mt-4 max-w-2xl font-mono px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Dartmouth Quantitative Finance Club is a group of students who are passionate about technology and trading.
          Join us for problem solving session, mock interview, social events, and an active community!
        </motion.p>

        {/* Call-to-action Buttons */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <button className="w-full sm:w-auto bg-[#FAF4E6] text-[#035939] px-6 py-3 text-base sm:text-lg font-semibold rounded-md">
            Sign In
          </button>
          <button className="w-full sm:w-auto border-2 border-[#FAF4E6] px-6 py-3 text-base sm:text-lg font-semibold rounded-md">
            Sign Up
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

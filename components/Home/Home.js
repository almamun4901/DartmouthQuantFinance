import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen w-full bg-[#035939] text-[#FAF4E6] flex flex-col items-center">
      {/* Landing Page Content */}
      <motion.div
        className="flex flex-col items-center justify-center flex-1 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Club Title */}
        <motion.h2
          className="text-6xl font-extrabold tracking-wide"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Dartmouth Quant Finance
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          A premier indoor pickleball and social club based in Austin, Texas.
          Join us for competitive matches, social events, and an active community!
        </motion.p>

        {/* Call-to-action Buttons */}
        <motion.div
          className="mt-6 space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <button className="bg-[#FAF4E6] text-[#035939] px-6 py-3 text-lg font-semibold rounded-md shadow-md hover:bg-[#e0dac9]">
            Book a Court
          </button>
          <button className="border-2 border-[#FAF4E6] px-6 py-3 text-lg font-semibold rounded-md shadow-md hover:bg-[#FAF4E6] hover:text-[#035939]">
            Join Open Play
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

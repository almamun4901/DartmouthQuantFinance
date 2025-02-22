import { motion } from "framer-motion";
import Image from "next/image"; // Use only if using Next.js

export default function Company() {
  return (
    <section className="h-screen flex flex-col items-center py-16 bg-[#FAF4E6] text-[#035939]">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">Our Industry Partners</h2>

      {/* Scrolling Companies and Logo */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-10"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          style={{ whiteSpace: "nowrap" }}
        >
          {/* Company Names */}
          {[
            "Citadel Securities", "IMC", "CTC", "Optiver", "Jane Street", "SIG", 
            "Jump Trading", "Five Rings", "Flow Traders", "Hudson River Trading", 
            "Amazon", "Microsoft", "Google", "Voleon Group"
          ].map((company, index) => (
            <span key={index} className="text-lg sm:text-xl lg:text-2xl font-semibold mx-4">
              {company}
            </span>
          ))}

          {/* Logo */}
          <Image src="/image.png" alt="Company Logo" width={40} height={40} className="h-10 w-10" />
        </motion.div>
      </div>
    </section>
  );
}

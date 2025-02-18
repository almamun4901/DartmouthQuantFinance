import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Ensure each person has a unique `id`
const people = [
  { id: 1, name: "Alice Johnson", jobTitle: "Senior Developer", college: "Dartmouth '25", company: "IMC", imageUrl: "/placeholder.svg" },
  { id: 2, name: "Bob Smith", jobTitle: "UX Designer", college: "Dartmouth '25", company: "SIG", imageUrl: "/placeholder.svg" },
  { id: 3, name: "Carol Williams", jobTitle: "Project Manager", college: "Dartmouth '25", company: "Optiver", imageUrl: "/placeholder.svg" },
  { id: 4, name: "David Brown", jobTitle: "Data Scientist", college: "Dartmouth '25", company: "Google", imageUrl: "/placeholder.svg" },
  { id: 5, name: "Eva Martinez", jobTitle: "Marketing Specialist", college: "Dartmouth '25", company: "Flow Traders", imageUrl: "/placeholder.svg" },
  { id: 6, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "Jane Street", imageUrl: "/placeholder.svg" },
  { id: 7, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "Citadel Securities", imageUrl: "/placeholder.svg" },
  { id: 8, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "Amazon", imageUrl: "/placeholder.svg" }, // Fixed typo
  { id: 9, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "Microsoft", imageUrl: "/placeholder.svg" },
  { id: 10, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "CloudSystems", imageUrl: "/placeholder.svg" },
  { id: 11, name: "Souryamoy Barman", jobTitle: "Sales and trading", college: "Dartmouth '26", company: "Morgan Stanley", imageUrl: "/placeholder.svg" },
  { id: 12, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "CloudSystems", imageUrl: "/placeholder.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Members() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF4E6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-[#035939]">
          Our Affiliated Professionals
        </h2>
        
        <motion.div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {people.map((person) => (
            <motion.div 
              key={person.id} 
              className="p-3 sm:p-4" // Added padding for spacing
            >
              <div className="bg-white bg-opacity-50 border border-[#035939] rounded-xl overflow-hidden p-3 sm:p-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4">
                  <Image 
                    src={person.imageUrl} 
                    alt={`${person.name}'s profile`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#035939] mb-1">
                  {person.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#035939] opacity-90">
                  {person.college}
                </p>
                <p className="text-xs sm:text-sm text-[#035939] opacity-90">{person.jobTitle}</p>
                <p className="text-xs sm:text-sm text-[#035939] opacity-75">{person.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}


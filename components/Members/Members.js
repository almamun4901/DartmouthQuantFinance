import Image from "next/image";
import { motion } from "framer-motion";

const people = [
  { id: 1, name: "Alice Johnson", jobTitle: "Senior Developer", college: "Dartmouth '25", company: "IMC", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Bob Smith", jobTitle: "UX Designer", college: "Dartmouth '25", company: "SIG", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Carol Williams", jobTitle: "Project Manager", college: "Dartmouth '25", company: "Optiver", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "David Brown", jobTitle: "Data Scientist", college: "Dartmouth '25", company: "Google", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Eva Martinez", jobTitle: "Marketing Specialist", college: "Dartmouth '25", company: "Flow Traders", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "Jane Street", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 7, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "Citadel Securities", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 8, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "Aamzon", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 9, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "Microsoft", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 10, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "CloudSystems", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 11, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "CloudSystems", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 12, name: "Frank Lee", jobTitle: "Software Architect", college: "Dartmouth '25", company: "CloudSystems", imageUrl: "/placeholder.svg?height=200&width=200" },
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
  return (
    <motion.div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF4E6]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#035939] font-heading">Our Affiliated Professionals</h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.map((person) => (
            <motion.div key={person.id} variants={itemVariants} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
              <div className="bg-white bg-opacity-50 border border-[#035939] border-opacity-40 shadow-lg rounded-xl overflow-hidden p-4 flex flex-col items-center text-center backdrop-blur-lg">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#035939] shadow-md mb-4">
                  <Image src={person.imageUrl || "/placeholder.svg"} alt={`${person.name}'s profile picture`} width={96} height={96} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg text-[#035939] mb-1">{person.name}</h3>
                <p className="text-sm text-[#035939] opacity-90">{person.college}</p>
                <p className="text-sm text-[#035939] opacity-90">{person.jobTitle}</p>
                <p className="text-sm text-[#035939] opacity-75">{person.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
import { slideInFromRight } from "../../utils/motion";

const educationData = [
  {
    degree: "Bachelor of Sciencein Computer Science",
    institution: "Ripah International University",
    duration: "2021 - 2025",
    details: [
      "CGPA: 3.5/4",
      "Member of Social Media Club",
      "Participated in various coding competitions and hackathons",
      "Core team member of the college's technical fest",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Aspire College Samundri",
    duration: "2018 - 2020",
    details: [
      "Percentage: 67%",
      "FSC Pre-Engineering",
    ],

  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Govt. High School 45GB Samundri",
    duration: "2016 - 2018",
    details: [
      "Percentage: 81%",
      "Matriculation",
    ],

  },
];

const EducationTimeline = () => {
  return (
    <motion.div
      variants={slideInFromRight(0.5)}
      className="w-full flex flex-col gap-6"
    >
      {educationData.map((education, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 border border-[#7042f88b] bg-[#0300145e] p-6 rounded-xl hover:bg-[#0300149c] transition-all duration-300"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {education.degree}
            </h3>
            <div className="flex flex-col md:flex-row justify-between text-gray-300">
              <p className="font-semibold text-[#ADB7BE]">{education.institution}</p>
              <p className="text-sm text-[#ADB7BE]">{education.duration}</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-[#ADB7BE] ml-4 space-y-2">
            {education.details.map((detail, idx) => (
              <li key={idx} className="text-sm md:text-base">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
};

export default EducationTimeline; 
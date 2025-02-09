"use client";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../utils/motion";
import EducationTimeline from "./EducationTimeline";

const Education = () => {
  return (
    <div className="flex relative flex-col h-full w-full" id="education">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-[40px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
          >
            My Education Journey
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center px-4 md:px-20 mt-4">
          <EducationTimeline />
        </div>
      </div>
    </div>
  );
};

export default Education; 
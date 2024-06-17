"use client";
import React, { useRef } from "react";
import FolioCard from "./FolioCard";
import { Syne } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";

const syne = Syne({ subsets: ["latin"] });

export default function Works() {
  const works = [
    {
      title: "Where in the world",
      gitLink: "https://github.com/adex-hub/where-in-the-world",
      liveLink: "https://www.where-in-the-world-ade.netlify.app/",
      about:
        "A fun tool for checking information about any country in the world such as the country’s native name, currency, population,  border countries etc. It features dynamic routing for each country and theme switch.",
      stack: ["react", "react-router", "javascript", "tailwindcss"],
      img: "/witw.svg",
    },
    {
      title: "Shortly",
      gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://lnk-shortener.netlify.app/",
      about:
        "A link shortener for a fictional company that effectively shortens links and stores them. No matter how many links you shorten, you can revisit the site anytime to view and manage your previously shortened links.",
      stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
      img: "/shortly.svg",
    },
    {
      title: "Yourtodo",
      gitLink: "https://github.com/adex-hub/Yourtodo",
      liveLink: "https://yourtodo-v1.vercel.app/",
      about:
        "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
      stack: ["react", "javascript", "figma", "sass"],
      img: "/todo.svg",
    },
    {
      title: "Multi-step form",
      gitLink: "https://github.com/adex-hub/multi-step-form-main",
      liveLink: "https://ade-loremgaming.netlify.app/",
      about:
        "This site features a clean, user-friendly multi-step form for subscribing to a gaming service. Users input personal info, select a plan (monthly or yearly), choose add-ons (online service, larger storage, customizable profile), and review the summary before confirming.",
      stack: ["html", "sass", "javascript", "ms clarity"],
      img: "/multistep.svg",
    },
  ];

  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 0.6]);

  return (
    <div className="flex flex-col gap-10 mb-6 pt-[110px]" id="work">
      {/* title */}
      <motion.h1
        ref={titleRef}
        style={{ opacity }}
        className={`uppercase ${syne.className} text-6xl font-bold`}
      >
        Projects
      </motion.h1>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}
    </div>
  );
}

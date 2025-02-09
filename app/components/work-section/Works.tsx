import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "NStar Point Of Sale",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "#",
      about:
        "A unique point of sale system for a fictional company that allows users to manage their inventory, sales, and customers. It features a user-friendly interface and a range of features to help users manage their business.Allow Users To Sign in With their ID and Give Different Permissions To Different Users.",
      stack: ["Django", "Python", "HTML", "CSS", "JavaScript","Oracle Database"],
      img: "/nstar.jpg",



    },
    {
      title: "Task Manager",
      gitLink: "https://github.com/Fzanrmzan/Taskmanager",
      liveLink: "https://github.com/Fzanrmzan/Taskmanager",
      about:
        " Task Manager is a web application that allows users to manage their tasks. It features a user-friendly interface and a range of features to help users manage their tasks .",
      stack: ["Django", "Python", "HTML", "CSS", "JavaScript","mysql"],
      img: "/task.png",

    },
    {
      title: "ChatBotify",
      gitLink: "https://github.com/Fzanrmzan/Faizanportfolio",
      liveLink: "https://github.com/Fzanrmzan/Faizanportfolio",
      about:
        " Ai chatbot that can answer questions and help with tasks Also Give Suggestions For The User.",
      stack: ["Django", "Python", "HTML", "CSS", "JavaScript","mysql"],
      img: "/chatbot.jpg",

    },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/Fzanrmzan/Faizanportfolio",
    //   liveLink: "https://github.com/Fzanrmzan/Faizanportfolio,
    //   about:

    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
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

      <Timeline />
    </section>
  );
}

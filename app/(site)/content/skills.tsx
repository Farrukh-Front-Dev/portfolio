import { ReactNode } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGit, FaDocker } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";

export type SkillItem = {
  name: string;
  icon: ReactNode;
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Core",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> }
    ]
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Redux Toolkit", icon: <SiRedux /> }
    ]
  },
  {
    title: "Styling & UI",
    items: [
      { name: "Tailwind CSS", icon: <SiTailwindcss /> }
    ]
  },
  {
    title: "Tooling & Workflow",
    items: [
      { name: "Git", icon: <FaGit /> },
      { name: "Docker", icon: <FaDocker /> }
    ]
  }
];

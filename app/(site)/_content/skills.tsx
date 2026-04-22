import { ReactNode } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGit, FaDocker, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiRedux, SiReduxsaga, SiTailwindcss, SiReact, SiSass, SiFramer, SiEslint, SiPrettier, SiPostman, SiAntdesign } from "react-icons/si";
import { MdOutlineDevices } from "react-icons/md";

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
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "RTK Query", icon: <SiRedux /> }
    ]
  },
{
  title: "Styling & UI",
  items: [
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "shadcn/ui", icon: <SiReact /> },
    { name: "Ant Design", icon: <SiAntdesign /> },
    { name: "Framer Motion", icon: <SiFramer /> }
  ]
},
{
  title: "Tooling & Workflow",
  items: [
    { name: "Git", icon: <FaGit /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Postman", icon: <SiPostman /> }
  ]
}

];

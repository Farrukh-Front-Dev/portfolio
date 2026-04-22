export type Project = {
  name: string;
  description: string;
  link: string;
  demo: string;
  imageLight: string;
  imageDark?: string; // agar yo‘q bo‘lsa light ishlatiladi
};


export const projects: Project[] = [
  {
    name: "Kokand University Website",
    description:
      "Responsive university and alumni website with clean architecture, accessible UI, and optimized frontend performance.",
    link: "https://github.com/Farrukh-Front-Dev/kokand_university",
    demo: "https://kualumni.uz/",
    imageLight: "/projects/kokand_university_lightMode.png",
    imageDark: "/projects/kokand_university_darkMode.png",
  },
  {
    name: "Kelajakka Qadam Markazi",
    description:
      "Minimal responsive promo website showcasing an educational center’s links using HTML, CSS, and JavaScript.",
    link: "https://github.com/Farrukh-Front-Dev/KelajakkaQadam",
    demo: "https://kelajakka-qadam-markazi.vercel.app/",
    imageLight: "/projects/kelajakka_qadam_markazi_lightMode.png", // faqat light yetarli
    imageDark: "/projects/kelajakka_qadam_markazi_lightMode.png"
  },
  {
    name: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, Tailwind CSS, and TypeScript, featuring dark mode and glassmorphism UI.",
    link: "https://github.com/Farrukh-Front-Dev/portfolio",
    demo: "#hero",
    imageLight: "/projects/portfolio_website_lightMode.png",
    imageDark: "/projects/portfolio_website_darkMode.png",
  },
  {
    name: "React Dev Components",
    description:
      "Collection of reusable React UI components with scalable structure and responsive design patterns.",
    link: "https://github.com/Farrukh-Front-Dev/ReactDev",
    demo: "https://react-dev-components.vercel.app/",
    imageLight: "/projects/reactdev_lightMode.png",
    imageDark: "/projects/reactdev_lightMode.png",
  },
];


import React from "react";

// import { FaReact } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";

export const projects = [
  {
    name: "Portfolio",
    href: "https://newportfolio.vercel.app/",
    description: "My Portfolio",
    image: "/portfolio.png",
  },
  {
    name: "Portfolio",
    href: "https://newportfolio.vercel.app/",
    description: "My Portfolio",
    image: "/portfolio.png",
  },
  {
    name: "Portfolio",
    href: "https://newportfolio.vercel.app/",
    description: "My Portfolio",
    image: "/portfolio.png",
  },
  {
    name: "Portfolio",
    href: "https://newportfolio.vercel.app/",
    description: "My Portfolio",
    image: "/portfolio.png",
  },
];

export const links = [
  {
    title: "Home",
    hash: "#home",
  },
  {
    title: "About",
    hash: "#about",
  },
  {
    title: "Skills",
    hash: "#skills",
  },
  {
    title: "Projects",
    hash: "#projects",
  },
  {
    title: "Experience",
    hash: "#experience",
  },

  {
    title: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with modern UI/UX design and responsive layout. Features multi-language support (English/Arabic) with dynamic content switching, integrated Stripe payment gateway for secure transactions, shopping cart functionality with persistent state management, and optimized performance with SEO.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "e-commerce.png", // You'll need to add this image to your public folder
    link: "https://front-end-e-commerce-seto.vercel.app/en/",
  },
  {
    title: "Movie Love",
    description:
      "An interactive platform that allows users to explore the latest movies and TV shows with details, trailers, and images. Features include: Trending movies and TV shows, search by name, and recommendations.",
    tags: ["React", "Redux", "bootstrap", "Html", "css", "js"],
    imageUrl: "moviesLove.png",
    link: "https://mahmoud-khames.github.io/Movieslove/",
  },
  {
    title: "Your Bank",
    description:
      "A comprehensive banking platform designed to empower individuals and businesses with innovative and personalized financial solutions.",
    tags: [
      "React",
      "Redux",
      "bootstrap",
      "Nodejs",
      "Express",
      "MongoDB",
      "Jwt",
    ],
    imageUrl: "yourBank.png",
    link: "https://your-bank-psi.vercel.app/",
  },
  {
    title: "AirPods Max",
    description:
      "A sleek and modern interface showcasing the AirPods Max, featuring smooth animations and a stylish layout for an immersive user experience.",
    tags: ["React", "Framer Motion", "Tailwind"],
    imageUrl: "AirPhone.png",
    link: "https://head-phone-dun.vercel.app/",
  },
  {
    title: "Topic Website",
    description:
      "A well-structured and visually appealing website built according to client requirements, focusing on design and layout.",
    tags: ["React", "bootstrap", "css", "js", "Html"],
    imageUrl: "topic.png",
    link: "https://mahmoud-khames.github.io/Topic/",
  },
  {
    title: "Dashboard Website",
    description:
      "A dynamic and interactive dashboard displaying user information, statistics, and data in a well-organized manner.",
    tags: ["Html", "css", "JavaScript", "Bootstrap"],
    imageUrl: "Dashboard.png",
    link: "https://mahmoud-khames.github.io/Dashboard/",
  },
  {
    title: "Listen Website",
    description:
      "A music platform that allows users to explore playlists, artists, and their favorite tracks with an intuitive and engaging UI.",
    tags: ["Html", "css", "JavaScript", "Bootstrap"],
    imageUrl: "Listen.png",
    link: "https://mahmoud-khames.github.io/Listen/",
  },
  {
    title: "Game Playing",
    description:
      "An interactive gaming project designed for an enjoyable user experience, featuring smooth graphics and seamless gameplay.",
    tags: ["Html", "css", "JavaScript"],
    imageUrl: "Game.png",
    link: "https://mahmoud-khames.github.io/Game/",
  },
  {
    title: "GitHub Profile",
    description:
      "A tool that presents GitHub profiles in a structured way, highlighting repositories, contributions, and user details.",
    tags: ["Html", "css", "JavaScript"],
    imageUrl: "githubProfile.png",
    link: "https://mahmoud-khames.github.io/Github-Profile/",
  },
  {
    title: "ToDo Website",
    description:
      "A simple and effective to-do list application that helps users manage and track their daily tasks effortlessly.",
    tags: ["Html", "css", "JavaScript"],
    imageUrl: "todo.png",
    link: "https://mahmoud-khames.github.io/ToDo-List/",
  },
] as const;
export const experiencesData = [
  {
    title: "Focal Point - Full Stack Web Developer",
    location: "Remotely",
    description:
      "Software Engineer (Full Stack). Developed and maintained high-performance full-stack applications for websites using technologies such as React.js, Node.js, MongoDB, and Firebase. Designed and implemented RESTful APIs to support mobile feature development team. Practiced creating clone websites with complex designs, demonstrating proficiency in front-end technologies including HTML, CSS, and JavaScript. Collaborated with cross-functional teams to deliver on-time projects, leveraging expertise in both front-end and back-end development to ensure seamless integration and functionality. Completed design projects to meet budget, equipment, performance, and legal requirements.",
    icon: React.createElement(MdOutlineWorkOutline),
    date: "02/2024 - 02/2025",
  },
] as const;
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git & Github",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Redux(ReduxToolkit)",
  "GraphQL",
  "Express",
  "Firebase",
  "PostgreSQL",
  "Responsive website design",
  "Framer Motion",
] as const;

export { Hero } from "./hero";
export { TechStack } from "./tech-stack";
export { Projects } from "./projects";
export { Footer } from "./footer";

export const profile = {
  name: "Md Tahsin-Ul-Haque",
  bio: "Full-Stack Developer and CS student specializing in modern web development. I design and develop end-to-end applications using React, Next.js, Node.js, MongoDB, and Firebase, with a focus on clean architecture, performance, and usability.",
  avatar: "/D256DSC-0370-01797111568.jpg",
  resume: "/RESUME - MD TAHSIN UL HAQUE.pdf",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/md-tahsin-ul-haque/",
    github: "https://github.com/tasifhaque",
    facebook: "https://facebook.com/haque_tasif.39",
    email: "tasifddr@gmail.com",
  },
};


export const socialLinks = [
  { href: profile.socialLinks.linkedin, label: "LinkedIn" },
  { href: profile.socialLinks.github, label: "GitHub" },
  { href: `mailto:${profile.socialLinks.email}`, label: "Email" },
  { href: profile.socialLinks.facebook, label: "Facebook" },
];


export const projects = [
  {
    _id: "1",
    title: "TaskPad",
    description:
      "A streamlined to-do application to help you effortlessly organize tasks and prioritize daily goals.",
    liveUrl: "https://react-taskpad.netlify.app/",
    codeUrl: "https://github.com/tasifhaque/react-shadcn-todo",
  },
  {
    _id: "2",
    title: "Re-Cast",
    description:
      "A dynamic weather app delivering real-time forecasts and accurate local climate updates at a glance",
    liveUrl: "https://re-cast.netlify.app/",
    codeUrl: "https://github.com/tasifhaque/react-weather",
  },
  {
    _id: "3",
    title: "Calculator",
    description:
      "A lightning-fast, beautifully styled web calculator built for absolute precision and ease of use.",
    liveUrl: "https://calculator-tasif.vercel.app/",
    codeUrl: "https://github.com/tasifhaque/Calculator",
  },
];



export const techStack = [
  { _id: "1", name: "React", icon: "/icons/React-icon.svg.png" },
  { _id: "2", name: "Next.js", icon: "/icons/nextjs.jpg" },
  { _id: "3", name: "JavaScript", icon: "/icons/javascript-logo.jpg" },
  { _id: "4", name: "TypeScript", icon: "/icons/Typescript_logo_2020.svg.png" },
  { _id: "5", name: "Tailwind CSS", icon: "/icons/tailwind.png" },
  { _id: "6", name: "Zustand", icon: "/icons/zustand.jpeg" },
  { _id: "7", name: "Better-Auth", icon: "/icons/better-auth.png" },
  {
    _id: "8",
    name: "Firebase",
    icon: "/icons/firebase_icon-logo_brandlogos.net_tcvck-512x646.png",
  },
  { _id: "9", name: "MongoDB", icon: "/icons/mongodb.png" },
  { _id: "10", name: "Node.js", icon: "/icons/nodejs.png" },
  { _id: "11", name: "Express.js", icon: "/icons/express-js.jpg" },
  {
    _id: "12",
    name: "Mongoose",
    icon: "/icons/mongoose-logo-template-isolated-brand-identity-icon-abstract-vector-graphic-1_1239135-1156.avif",
  },
  { _id: "13", name: "Hono", icon: "/icons/hono.jpeg" },
  { _id: "14", name: "Vercel", icon: "/icons/Vercel_favicon.svg" },
  { _id: "15", name: "Netlify", icon: "/icons/netlify.png" },
  { _id: "16", name: "Bun", icon: "/icons/bun.png" },
  {
    _id: "17",
    name: "React Hook Form",
    icon: "/icons/react-hook-form-logo-only.png",
  },
  { _id: "18", name: "Zod", icon: "/icons/zod.png" },
  { _id: "19", name: "NPM", icon: "/icons/npm-logo-png_seeklogo-273756.png" },
  { _id: "20", name: "PNPM", icon: "/icons/pnpm-logo-png_seeklogo-634597.png" },
  { _id: "21", name: "React Router", icon: "/icons/react-router.png" },
  { _id: "22", name: "REST API", icon: "/icons/rest-api.jpg" },
  {
    _id: "23",
    name: "JWT",
    icon: "/icons/jwt-icon-aqjx58uyj3lrxtborzgyg.webp",
  },
  { _id: "24", name: "GitHub", icon: "/icons/github.svg" },
  { _id: "25", name: "Git", icon: "/icons/Git_icon.svg.png" },
  { _id: "26", name: "Prisma", icon: "/icons/prisma-orm.jpg" },
  { _id: "27", name: "Vite", icon: "/icons/Vitejs-logo.svg.png" },
  {
    _id: "28",
    name: "Shadcn/UI",
    icon: "/icons/shadcn-ui-logo-png_seeklogo-519786.png",
  },
  { _id: "29", name: "Material UI", icon: "/icons/material-ui.jpg" },
  {
    _id: "30",
    name: "Lucide Icon",
    icon: "/icons/lucide.png",
  },
  {
    _id: "31",
    name: "Dribbble",
    icon: "/icons/dribbble.png",
  },
  {
    _id: "32",
    name: "VS Code",
    icon: "/icons/Visual_Studio_Code_1.35_icon.svg.png",
  },
];

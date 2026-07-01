import { Stagger, StaggerItem } from "./stagger";

const techStack = [
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
    name: "VS Code",
    icon: "/icons/Visual_Studio_Code_1.35_icon.svg.png",
  },
];

export function TechStack() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">
        Tech Skills
      </h2>
      <Stagger className="flex flex-wrap gap-2">
        {techStack.map((item) => (
          <StaggerItem key={item._id}>
            <span className="group inline-flex items-center justify-center gap-1.5 rounded-full border bg-white px-4 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:border-zinc-400 hover:text-zinc-900 hover:font-semibold hover:scale-110 hover:shadow-md hover:-translate-y-0.5">
              {item.icon && (
                <img
                  src={item.icon}
                  alt=""
                  className="size-4 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-125"
                />
              )}
              {item.name}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

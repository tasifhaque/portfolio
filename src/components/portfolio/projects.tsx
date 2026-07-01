import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Stagger, StaggerItem } from "./stagger";

function screenshotUrl(url: string): string {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=600`;
}

const projects = [
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

export function Projects() {
  return (
    <section id="projects">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">Projects</h2>
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project._id}>
            <Card
              size="sm"
              className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
            >
              <a
                href={project.liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="aspect-video bg-zinc-100 overflow-hidden rounded-t-xl">
                  {project.liveUrl ? (
                    <img
                      src={screenshotUrl(project.liveUrl)}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <svg
                        className="h-8 w-8 text-zinc-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </a>
              <CardContent className="flex flex-1 flex-col gap-2 pt-4">
                <CardTitle className="font-bold">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-7 items-center justify-center gap-1 rounded-lg bg-primary px-2.5 text-xs font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/80 hover:scale-105"
                >
                  Live
                </a>
                <a
                  href={project.codeUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-7 items-center justify-center gap-1 rounded-lg border border-border bg-background px-2.5 text-xs font-medium transition-all duration-300 hover:bg-muted hover:text-foreground hover:scale-105"
                >
                  Code
                </a>
              </CardFooter>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

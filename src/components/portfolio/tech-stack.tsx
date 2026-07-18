import { Stagger, StaggerItem } from "./stagger";
import { techStack } from "@/components/portfolio";

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

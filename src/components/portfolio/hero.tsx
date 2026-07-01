import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { FadeIn } from "./fade-in";

const profile = {
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

function SocialIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "LinkedIn":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#181717">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case "Facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "Email":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#EA4335">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    default:
      return null;
  }
}

const socialLinks = [
  { href: profile.socialLinks.linkedin, label: "LinkedIn" },
  { href: profile.socialLinks.github, label: "GitHub" },
  { href: `mailto:${profile.socialLinks.email}`, label: "Email" },
  { href: profile.socialLinks.facebook, label: "Facebook" },
];

export function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <>
      <section className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-xl flex-col items-center text-center md:items-start md:text-left">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{profile.bio}</p>
          </FadeIn>
          <FadeIn className="mt-6">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(
                    null,
                    "",
                    window.location.pathname,
                  );
                }}
                className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-black px-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-black/80 hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
              >
                Projects
              </button>
              <a
                href={profile.resume}
                target="_blank"
                className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium transition-all duration-300 hover:bg-muted hover:text-foreground hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Download className="size-4" />
                Resume
              </a>
            </div>
          </FadeIn>
          <FadeIn className="mt-6">
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-125 hover:-translate-y-1"
                  aria-label={label}
                >
                  <SocialIcon name={label} className="size-5" />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="shrink-0">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-48 w-48 rounded-full object-cover md:h-64 md:w-64 cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setLightboxOpen(true)}
            />
          ) : (
            <div className="h-48 w-48 rounded-full bg-zinc-200 md:h-64 md:w-64" />
          )}
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
          style={{ animation: "fadeIn 0.3s ease" }}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="size-8" />
          </button>
          <img
            src={profile.avatar}
            alt={profile.name}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
            style={{ animation: "zoomIn 0.3s ease" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}

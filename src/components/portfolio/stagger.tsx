import { useEffect, useRef, type ReactNode } from "react"

interface StaggerProps {
  children: ReactNode
  className?: string
}

export function Stagger({ children, className = "" }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = el.querySelectorAll("[data-stagger]")
          items.forEach((item, i) => {
            setTimeout(() => {
              ;(item as HTMLElement).style.opacity = "1"
              ;(item as HTMLElement).style.transform = "translateY(0) scale(1)"
            }, i * 40)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      data-stagger
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(12px) scale(0.95)",
        transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  )
}

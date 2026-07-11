import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to `containerRef` that adds the
 * class "revealed" to every child with class "reveal-on-scroll" when
 * it enters the viewport.
 */
export function useScrollReveal(threshold = 0.08) {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold },
    )

    container.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])

  return containerRef
}

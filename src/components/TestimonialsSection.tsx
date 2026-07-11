import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const TESTIMONIALS = [
  {
    id: 1,
    text: "The Costa Rica Ceres completely changed how I think about coffee. The citrus notes are unlike anything I've experienced before. Pure liquid poetry.",
    author: 'Sarah Mitchell',
    role:   'Coffee Connoisseur',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 2,
    text: "I've been ordering from Creamy Cup for three years. The consistency is remarkable — every bag arrives fresh and the flavour profiles are always spot-on.",
    author: 'James Okafor',
    role:   'Barista & Coffee Educator',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 3,
    text: "The Origin Discovery Set is the perfect gift for any coffee lover. It took me on a world tour of flavours without leaving my kitchen. Absolutely magical.",
    author: 'Elena Vasquez',
    role:   'Food & Beverage Writer',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 4,
    text: "As a specialty roaster myself, I know quality. Creamy Cup's Ethiopia Yirgacheffe is world-class. The floral aromatics are truly intoxicating.",
    author: 'David Chen',
    role:   'Specialty Roaster',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 5,
    text: "The reservation experience at Creamy Cup is as memorable as the coffee itself. The atmosphere, the service — everything about it is exceptional.",
    author: 'Amara Osei',
    role:   'Interior Designer',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
  },
]

export default function TestimonialsSection() {
  const [active, setActive]   = useState(0)
  const [fading, setFading]   = useState(false)
  const sectionRef = useScrollReveal()

  const goTo = (idx: number) => {
    setFading(true)
    setTimeout(() => {
      setActive((idx + TESTIMONIALS.length) % TESTIMONIALS.length)
      setFading(false)
    }, 220)
  }

  useEffect(() => {
    const id = setInterval(() => goTo(active + 1), 6000)
    return () => clearInterval(id)
  }, [active])

  const t = TESTIMONIALS[active]

  return (
    <section
      id="testimonials"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-32 relative overflow-hidden"
    >
      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coffee-500/4 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-500/4 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coffee-500/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow reveal-on-scroll mb-4">What People Say</p>
          <h2 className="section-title reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
            Voices of the{' '}
            <span className="text-gradient">Community</span>
          </h2>
        </div>

        {/* Card */}
        <div
          className="glass-card px-8 py-12 md:px-16 md:py-16 relative reveal-on-scroll"
          style={{ transitionDelay: '0.2s' }}
        >
          <Quote size={52} className="absolute top-8 left-8 text-coffee-500/15" />

          {/* Testimonial content */}
          <div
            className="relative transition-all duration-220"
            style={{ opacity: fading ? 0 : 1, transform: fading ? 'translateY(8px)' : 'translateY(0)' }}
          >
            <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed text-center italic mb-10">
              "{t.text}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={t.avatar}
                alt={t.author}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-coffee-500/35 shadow-[0_0_16px_rgba(200,147,95,0.2)]"
              />
              <div>
                <div className="text-white font-medium text-sm">{t.author}</div>
                <div className="text-slate-500 text-xs mt-0.5">{t.role}</div>
              </div>
              <div className="flex gap-0.5 ml-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-coffee-400 fill-coffee-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div
          className="mt-8 flex items-center justify-center gap-6 reveal-on-scroll"
          style={{ transitionDelay: '0.3s' }}
        >
          <button
            onClick={() => goTo(active - 1)}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-slate-400 hover:text-coffee-400 hover:border-coffee-500/40 transition-all duration-200"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 h-2 bg-coffee-400' : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(active + 1)}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-slate-400 hover:text-coffee-400 hover:border-coffee-500/40 transition-all duration-200"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

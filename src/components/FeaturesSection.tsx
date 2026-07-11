import { useEffect, useRef, useState } from 'react'
import { Leaf, Award, Clock, Globe, FlaskConical, Heart } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const STATS = [
  { value: 100, suffix: '+', label: 'Coffee Varieties',   sub: 'Single-origin & blended' },
  { value: 25,  suffix: '+', label: 'Years of Excellence', sub: 'Roasting since 1998' },
  { value: 10,  suffix: 'K+', label: 'Happy Customers',    sub: 'Worldwide community' },
  { value: 4,   suffix: '',   label: 'Global Locations',   sub: 'Serving premium coffee' },
]

const FEATURES = [
  {
    icon: Leaf,
    title: 'Ethically Sourced',
    body: 'Direct trade with farmers across 12 countries. Every bean tells a story of sustainability and fair partnership.',
  },
  {
    icon: Award,
    title: 'Award-Winning Roasts',
    body: 'Our master roasters have earned 15+ industry awards for exceptional quality and flavour consistency.',
  },
  {
    icon: Clock,
    title: 'Peak Freshness',
    body: 'Roasted to order and shipped within 24 hours. The difference is in the first sip.',
  },
  {
    icon: Globe,
    title: 'Global Origins',
    body: 'Curated from Ethiopia, Colombia, Costa Rica, and beyond — terroir in every cup.',
  },
  {
    icon: FlaskConical,
    title: 'Science of Flavour',
    body: 'Precision roasting with real-time profiling to unlock every bean\'s maximum aromatic potential.',
  },
  {
    icon: Heart,
    title: 'Crafted with Passion',
    body: 'We are coffee obsessives. Every decision — from sourcing to packaging — is made with love.',
  },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const spanRef  = useRef<HTMLSpanElement>(null)
  const started  = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps    = 55
          const interval = 1800 / steps
          let i = 0
          const id = setInterval(() => {
            i++
            setCount(Math.round((target * i) / steps))
            if (i >= steps) clearInterval(id)
          }, interval)
        }
      },
      { threshold: 0.6 },
    )
    if (spanRef.current) observer.observe(spanRef.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={spanRef}>
      {count}
      {suffix}
    </span>
  )
}

export default function FeaturesSection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="features"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coffee-500/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-coffee-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-eyebrow reveal-on-scroll mb-4">Our Philosophy</p>
          <h2 className="section-title reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
            Coffee as a{' '}
            <span className="text-gradient">Science</span>
          </h2>
          <p
            className="text-slate-400 max-w-2xl mx-auto mt-6 font-light leading-relaxed reveal-on-scroll"
            style={{ transitionDelay: '0.2s' }}
          >
            We obsess over every detail — from the altitude a bean is grown to the precise
            temperature at which it is roasted. Excellence is never accidental.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-24">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="text-center reveal-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-forum text-5xl md:text-6xl font-light text-coffee-400 mb-2">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white font-medium text-sm tracking-wide mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="glass-card-hover p-8 group reveal-on-scroll"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-coffee-500/10 border border-coffee-500/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-coffee-500/20 group-hover:border-coffee-500/40 group-hover:shadow-[0_0_20px_rgba(200,147,95,0.15)]">
                <f.icon size={22} className="text-coffee-400" />
              </div>
              <h3 className="text-white font-medium text-base mb-3 tracking-wide">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CONTACT_INFO = [
  { icon: MapPin, label: 'Address',  value: '123 Coffee Lane, Downtown City, CA 90210' },
  { icon: Phone,  label: 'Phone',    value: '+1 (555) 234-5678' },
  { icon: Mail,   label: 'Email',    value: 'hello@creamycup.com' },
]

const HOURS = [
  ['Mon — Fri', '07:00 — 20:00'],
  ['Saturday',  '08:00 — 22:00'],
  ['Sunday',    '09:00 — 18:00'],
]

const SEATS   = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const TIMES   = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
const DAYS    = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const INPUT = `
  w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm
  placeholder-slate-600 outline-none transition-all duration-300
  focus:border-coffee-500/60 focus:bg-coffee-500/5 focus:shadow-[0_0_18px_rgba(200,147,95,0.1)]
`.trim()

export default function ContactSection() {
  const sectionRef = useScrollReveal()

  const [form, setForm] = useState({
    name: '', email: '', seats: '2', time: '12:00', day: 'Monday', message: '',
  })
  const [loading,   setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a]/50 to-[#050510]" />
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coffee-500/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow reveal-on-scroll mb-4">Get in Touch</p>
          <h2 className="section-title reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
            Reserve Your <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info column */}
          <div className="lg:col-span-2 reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <p className="text-slate-300 leading-relaxed mb-10 font-light">
              Book your table at any of our four locations. We welcome coffee enthusiasts,
              groups, and special occasions. Let us craft your perfect experience.
            </p>

            <div className="space-y-6 mb-10">
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-coffee-500/10 border border-coffee-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-coffee-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] tracking-widest uppercase mb-1">{label}</div>
                    <div className="text-white text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="glass-card p-6">
              <h4 className="text-coffee-400 text-[10px] tracking-[0.25em] uppercase mb-4">Opening Hours</h4>
              <div className="space-y-2.5">
                {HOURS.map(([day, hrs]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-slate-400">{day}</span>
                    <span className="text-slate-300">{hrs}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3 reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            {submitted ? (
              <div className="glass-card p-16 text-center flex flex-col items-center justify-center min-h-[420px]">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                  <Check size={30} className="text-emerald-400" />
                </div>
                <h3 className="font-forum text-2xl text-white mb-3">Reservation Confirmed</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  We'll reach out shortly to confirm your booking. See you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-[10px] tracking-widest uppercase mb-2 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={INPUT}
                      value={form.name}
                      onChange={set('name')}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-[10px] tracking-widest uppercase mb-2 block">Email</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className={INPUT}
                      value={form.email}
                      onChange={set('email')}
                      required
                    />
                  </div>
                </div>

                {/* Seats + Time + Day */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-slate-400 text-[10px] tracking-widest uppercase mb-2 block">Seats</label>
                    <select className={INPUT} value={form.seats} onChange={set('seats')}>
                      {SEATS.map((n) => (
                        <option key={n} value={n} className="bg-[#0a0a1a]">{n}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-400 text-[10px] tracking-widest uppercase mb-2 block">Time</label>
                    <select className={INPUT} value={form.time} onChange={set('time')}>
                      {TIMES.map((t) => (
                        <option key={t} value={t} className="bg-[#0a0a1a]">{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-400 text-[10px] tracking-widest uppercase mb-2 block">Day</label>
                    <select className={INPUT} value={form.day} onChange={set('day')}>
                      {DAYS.map((d) => (
                        <option key={d} value={d} className="bg-[#0a0a1a]">{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-slate-400 text-[10px] tracking-widest uppercase mb-2 block">
                    Message <span className="text-slate-600 normal-case">(optional)</span>
                  </label>
                  <textarea
                    placeholder="Special requests, dietary requirements, occasion..."
                    className={`${INPUT} resize-none h-28`}
                    value={form.message}
                    onChange={set('message')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary rounded-xl justify-center"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Send size={15} /> Send Reservation</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

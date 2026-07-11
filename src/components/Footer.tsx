import { Coffee, Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

const FOOTER_LINKS: Record<string, string[]> = {
  Navigate: ['Home', 'About', 'Menu', 'Reviews', 'Contact'],
  Explore:  ['Our Story', 'Sourcing', 'Roasting Process', 'Wholesale'],
  Support:  ['FAQ', 'Shipping', 'Returns', 'Privacy Policy'],
}

const SOCIALS = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter,   label: 'Twitter' },
  { icon: Facebook,  label: 'Facebook' },
  { icon: Youtube,   label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coffee-500/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <Coffee size={22} className="text-coffee-400" />
              <span className="font-forum text-lg tracking-[0.25em] text-white">CREAMY CUP</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light mb-6 max-w-xs">
              Premium coffee experiences crafted with precision, passion, and an unwavering
              commitment to quality since 1998.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-coffee-400 hover:border-coffee-500/35 hover:bg-coffee-500/10 transition-all duration-300"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="text-coffee-400 text-[10px] tracking-[0.22em] uppercase mb-5 font-medium">
                {cat}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-slate-200 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs text-center md:text-left">
            © 2025 Creamy Cup. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs tracking-wide">
            Built with React · TypeScript · Three.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

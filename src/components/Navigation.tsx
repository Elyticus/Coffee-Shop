import { useState, useEffect } from 'react'
import { Coffee, ShoppingCart, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',    href: '#home' },
  { label: 'About',   href: '#features' },
  { label: 'Menu',    href: '#products' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount, setCartCount]   = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    try {
      const basket: { qty?: number }[] = JSON.parse(localStorage.getItem('basket') ?? '[]')
      setCartCount(basket.reduce((sum, item) => sum + (item.qty ?? 1), 0))
    } catch {
      setCartCount(0)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050510]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Coffee
              size={26}
              className="text-coffee-400 transition-colors duration-300 group-hover:text-coffee-300"
            />
            <span className="absolute inset-0 bg-coffee-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </div>
          <span className="font-forum text-lg tracking-[0.25em] text-white group-hover:text-coffee-300 transition-colors duration-300">
            CREAMY CUP
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative text-slate-300 hover:text-coffee-400 text-xs tracking-[0.15em] uppercase transition-colors duration-300 group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-coffee-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Cart"
            className="relative p-2 text-slate-300 hover:text-coffee-400 transition-colors duration-300"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-coffee-500 text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a0a1a]/95 backdrop-blur-xl border-t border-white/10 px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-slate-300 hover:text-coffee-400 text-sm tracking-widest uppercase py-1 border-b border-white/5 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

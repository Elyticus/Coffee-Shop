import { useState } from 'react'
import { Plus, Check } from 'lucide-react'
import { products } from '../data/products'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Badge } from './ui/badge'

const BADGE_VARIANT: Record<string, 'default' | 'new' | 'secondary'> = {
  'Premium':   'default',
  'Best Seller': 'default',
  'New':       'new',
  'Gift Set':  'secondary',
  'Intense':   'secondary',
}

export default function ProductsSection() {
  const [addedId, setAddedId] = useState<number | null>(null)
  const sectionRef = useScrollReveal(0.05)

  const addToCart = (id: number, title: string) => {
    try {
      const basket: { id: number; title: string; qty: number }[] =
        JSON.parse(localStorage.getItem('basket') ?? '[]')
      const existing = basket.find((item) => item.id === id)
      if (existing) {
        existing.qty += 1
      } else {
        basket.push({ id, title, qty: 1 })
      }
      localStorage.setItem('basket', JSON.stringify(basket))
    } catch {
      /* ignore storage errors */
    }
    setAddedId(id)
    setTimeout(() => setAddedId(null), 1600)
  }

  return (
    <section
      id="products"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-32 relative"
    >
      {/* Subtle background shift */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/60 via-transparent to-[#050510]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow reveal-on-scroll mb-4">Our Selection</p>
          <h2 className="section-title reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
            The <span className="text-gradient">Menu</span>
          </h2>
          <div
            className="mt-5 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-coffee-500 to-transparent reveal-on-scroll"
            style={{ transitionDelay: '0.2s' }}
          />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <article
              key={product.id}
              className="glass-card neon-border group overflow-hidden flex flex-col reveal-on-scroll"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Badges */}
                {product.badge && (
                  <span className="absolute top-3 left-3">
                    <Badge variant={BADGE_VARIANT[product.badge] ?? 'default'}>
                      {product.badge}
                    </Badge>
                  </span>
                )}
                {product.origin && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] tracking-wide bg-black/50 backdrop-blur-sm text-slate-300 border border-white/10">
                    {product.origin}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white text-sm font-medium mb-2 group-hover:text-coffee-300 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light flex-1 line-clamp-2">
                  {product.description}
                </p>

                {/* Price + CTA */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-forum text-lg text-coffee-400">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(product.id, product.title)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      addedId === product.id
                        ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 scale-95'
                        : 'bg-coffee-500/15 border border-coffee-500/35 text-coffee-300 hover:bg-coffee-500/25 hover:border-coffee-500/60 hover:scale-105'
                    }`}
                  >
                    {addedId === product.id ? (
                      <><Check size={11} /> Added</>
                    ) : (
                      <><Plus size={11} /> Add</>
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

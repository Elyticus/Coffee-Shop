import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // ── Scene ──────────────────────────────────────────
    const scene = new THREE.Scene()

    // ── Camera ─────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    )
    camera.position.z = 3.5

    // ── Renderer ───────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x050510, 1)
    container.appendChild(renderer.domElement)

    // ── Coffee-tone particle palette ───────────────────
    const palette = [
      new THREE.Color('#c8935f'),
      new THREE.Color('#a0703a'),
      new THREE.Color('#e8b87a'),
      new THREE.Color('#ffb347'),
      new THREE.Color('#6b3a1f'),
      new THREE.Color('#f5deb3'),
    ]

    // ── Particle field ─────────────────────────────────
    const COUNT = 5000
    const positions = new Float32Array(COUNT * 3)
    const colors    = new Float32Array(COUNT * 3)
    const sizes     = new Float32Array(COUNT)

    for (let i = 0; i < COUNT; i++) {
      const r     = Math.pow(Math.random(), 0.4) * 9
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)

      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3]     = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b

      sizes[i] = Math.random() * 1.8 + 0.4
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color',    new THREE.BufferAttribute(colors,    3))
    geo.setAttribute('size',     new THREE.BufferAttribute(sizes,     1))

    const mat = new THREE.PointsMaterial({
      size:         0.022,
      vertexColors: true,
      transparent:  true,
      opacity:      0.75,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(geo, mat)
    scene.add(particles)

    // ── Central wireframe sphere ───────────────────────
    const sphereMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.35, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0xc8935f, wireframe: true, transparent: true, opacity: 0.12 }),
    )
    scene.add(sphereMesh)

    // ── Orbital rings ──────────────────────────────────
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.015, 16, 120),
      new THREE.MeshBasicMaterial({ color: 0xc8935f, transparent: true, opacity: 0.18 }),
    )
    ring1.rotation.x = Math.PI / 2.3
    scene.add(ring1)

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.0, 0.008, 16, 120),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.1 }),
    )
    ring2.rotation.x = Math.PI / 3.5
    ring2.rotation.y = Math.PI / 5
    scene.add(ring2)

    const ring3 = new THREE.Mesh(
      new THREE.TorusGeometry(2.8, 0.005, 16, 120),
      new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.07 }),
    )
    ring3.rotation.x = Math.PI / 1.8
    ring3.rotation.z = Math.PI / 6
    scene.add(ring3)

    // ── Mouse parallax ─────────────────────────────────
    let mx = 0, my = 0
    let tx = 0, ty = 0

    const onMouseMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2
      my = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Animation loop ─────────────────────────────────
    let t = 0
    let rafId: number

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      t += 0.004

      tx += (mx - tx) * 0.04
      ty += (my - ty) * 0.04

      particles.rotation.y  = t * 0.04 + tx * 0.15
      particles.rotation.x  = t * 0.018 + ty * 0.06

      sphereMesh.rotation.y = t * 0.4
      sphereMesh.rotation.x = t * 0.15

      ring1.rotation.z      = t * 0.25
      ring2.rotation.y      = t * -0.18
      ring2.rotation.z      = t * 0.12
      ring3.rotation.y      = t * 0.10
      ring3.rotation.x     += 0.001

      camera.position.x     = tx * 0.25
      camera.position.y     = -ty * 0.25
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ─────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // ── Cleanup ────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Three.js canvas */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Gradient vignette for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/50 via-transparent to-[#050510]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050510]/40 via-transparent to-[#050510]/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Eyebrow tag */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-coffee-400 text-xs tracking-[0.3em] uppercase border border-coffee-500/35 bg-coffee-500/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-coffee-400 animate-pulse" />
            Premium Coffee Experience
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-forum text-white mb-6 leading-none"
          style={{ fontSize: 'clamp(2.8rem, 9vw, 6.5rem)' }}
        >
          <span className="block animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            Treat Yourself
          </span>
          <span
            className="block text-gradient glow-text animate-slide-up"
            style={{ animationDelay: '0.25s', opacity: 0, animationFillMode: 'forwards' }}
          >
            to Perfection
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-slate-300/80 max-w-xl mb-10 font-light leading-relaxed animate-fade-in"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Where science meets artistry. Premium single-origin coffees,
          expertly roasted and shipped fresh to your door.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 justify-center animate-fade-in"
          style={{ animationDelay: '0.55s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a href="#products" className="btn-primary">Explore Menu</a>
          <a href="#contact"  className="btn-outline">Reserve a Table</a>
        </div>

        {/* Quick stats */}
        <div
          className="flex gap-10 md:gap-16 mt-16 animate-fade-in"
          style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {[
            { value: '100+', label: 'Coffee Types' },
            { value: '25+',  label: 'Years of Craft' },
            { value: '10K+', label: 'Happy Clients' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center group">
              <div className="font-forum text-2xl text-coffee-400 group-hover:text-coffee-300 transition-colors duration-300">
                {value}
              </div>
              <div className="text-[10px] text-slate-500 tracking-[0.2em] uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import TypingText from './TypingText'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || typeof window === 'undefined') return

    let cleanupFn: (() => void) | undefined

    import('three').then(THREE => {
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setClearColor(0x000000, 0)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
      camera.position.z = 28

      function resize() {
        const w = canvas!.offsetWidth
        const h = canvas!.offsetHeight
        if (w === 0 || h === 0) return
        renderer.setSize(w, h, false)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      const ro = new ResizeObserver(resize)
      ro.observe(canvas)
      resize()

      const count = 700
      const positions = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 60
        positions[i * 3 + 1] = (Math.random() - 0.5) * 40
        positions[i * 3 + 2] = (Math.random() - 0.5) * 30
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const mat = new THREE.PointsMaterial({ color: 0x6366f1, size: 0.14, transparent: true, opacity: 0.65, sizeAttenuation: true })
      const particles = new THREE.Points(geo, mat)
      scene.add(particles)

      const knots: THREE.Mesh[] = []
      const knotColors = [0x6366f1, 0xa855f7, 0x06b6d4, 0x10b981]
      for (let i = 0; i < 4; i++) {
        const g = new THREE.TorusKnotGeometry(1.2 + i * 0.4, 0.3, 80, 12)
        const m = new THREE.MeshBasicMaterial({ color: knotColors[i], wireframe: true, opacity: 0.10 + i * 0.04, transparent: true })
        const mesh = new THREE.Mesh(g, m)
        mesh.position.set((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10 - 5)
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
        scene.add(mesh)
        knots.push(mesh)
      }

      const gridMat = new THREE.LineBasicMaterial({ color: 0x6366f1, opacity: 0.06, transparent: true })
      for (let i = -6; i <= 6; i++) {
        const hg = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-30, i * 3.5, -15), new THREE.Vector3(30, i * 3.5, -15)])
        scene.add(new THREE.Line(hg, gridMat))
        const vg = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(i * 5, -25, -15), new THREE.Vector3(i * 5, 25, -15)])
        scene.add(new THREE.Line(vg, gridMat))
      }

      let mx = 0, my = 0
      const onMouse = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2
        my = (e.clientY / window.innerHeight - 0.5) * 2
      }
      document.addEventListener('mousemove', onMouse)

      let frame = 0
      let animId: number
      function animate() {
        animId = requestAnimationFrame(animate)
        frame += 0.006
        particles.rotation.y = frame * 0.05
        particles.rotation.x = frame * 0.02
        knots.forEach((k, i) => {
          k.rotation.x += 0.002 + i * 0.001
          k.rotation.y += 0.003 + i * 0.001
          k.position.y += Math.sin(frame + i * 1.5) * 0.005
        })
        camera.position.x += (mx * 3 - camera.position.x) * 0.04
        camera.position.y += (-my * 2 - camera.position.y) * 0.04
        renderer.render(scene, camera)
      }
      animate()

      cleanupFn = () => {
        cancelAnimationFrame(animId)
        ro.disconnect()
        document.removeEventListener('mousemove', onMouse)
        renderer.dispose()
      }
    })

    return () => cleanupFn?.()
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-start lg:items-center overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', display: 'block' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1, background: 'linear-gradient(135deg,oklch(var(--b1)/0.88) 0%,oklch(var(--b1)/0.55) 100%)' }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-10 sm:pt-24 sm:pb-14 lg:py-0" style={{ zIndex: 2 }}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left column */}
          <div>
            <div className="inline-flex badge badge-primary badge-outline mb-5 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-display font-semibold tracking-wider uppercase max-w-full">
              <span className="truncate">🚀 Inovasi Digital Terdepan</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black leading-[1.08] mb-5 sm:mb-6">
              Kami<br /><TypingText />
            </h1>

            {/* Banner image — MOBILE ONLY */}
            <div className="block lg:hidden mb-8 mt-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-base-content/10">
                <img
                  src="/images/banner.png"
                  alt="NexCorp Digital Solutions"
                  style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="px-3 py-2 rounded-xl bg-base-200/90 border border-primary/30 flex items-center gap-2 shadow">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs font-display font-semibold text-success">Live Projects</span>
                  <span className="text-xs font-display font-black text-primary">24</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-base-200/90 border border-secondary/30 flex items-center gap-2 shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                  </svg>
                  <span className="text-xs font-display font-semibold">Revenue</span>
                  <span className="text-xs font-display font-black text-success">+147%</span>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg opacity-70 leading-relaxed mb-8 sm:mb-10 max-w-lg">
              NexCorp menghadirkan solusi teknologi mutakhir dari pengembangan software enterprise hingga transformasi digital yang mengakselerasi pertumbuhan bisnis Anda.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#services" className="btn btn-primary btn-sm sm:btn-lg rounded-full px-5 sm:px-8 btn-glow shadow-lg shadow-primary/30">
                Jelajahi Layanan
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#portfolio" className="btn btn-outline btn-sm sm:btn-lg rounded-full px-5 sm:px-8">Lihat Portfolio</a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-5 sm:gap-8 mt-10 sm:mt-12">
              <div>
                <p className="text-2xl sm:text-4xl font-display font-black text-primary leading-none">
                  <span className="counter" data-target="250">0</span>+
                </p>
                <p className="text-[11px] sm:text-sm opacity-60 mt-1 leading-tight">Proyek Selesai</p>
              </div>
              <div className="w-px self-stretch bg-base-content/10" />
              <div>
                <p className="text-2xl sm:text-4xl font-display font-black text-primary leading-none">
                  <span className="counter" data-target="98">0</span>%
                </p>
                <p className="text-[11px] sm:text-sm opacity-60 mt-1 leading-tight">Klien Puas</p>
              </div>
              <div className="w-px self-stretch bg-base-content/10" />
              <div>
                <p className="text-2xl sm:text-4xl font-display font-black text-primary leading-none">
                  <span className="counter" data-target="12">0</span>+
                </p>
                <p className="text-[11px] sm:text-sm opacity-60 mt-1 leading-tight">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          {/* Right column — DESKTOP ONLY */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <div
                className="absolute -inset-4 rounded-3xl opacity-25 blur-2xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 50%, oklch(var(--p)) 0%, transparent 70%)' }}
              />
              <div className="float absolute -top-5 -left-5 z-10 px-3 py-2 rounded-2xl bg-base-200/90 backdrop-blur border border-primary/30 flex items-center gap-2 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-display font-semibold text-success">Live Projects</span>
                <span className="text-xs font-display font-black text-primary">24</span>
              </div>
              <div className="float2 absolute -bottom-4 -right-4 z-10 px-3 py-2 rounded-2xl bg-base-200/90 backdrop-blur border border-secondary/30 flex items-center gap-2 shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                </svg>
                <span className="text-xs font-display font-semibold">Revenue</span>
                <span className="text-xs font-display font-black text-success">+147%</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-base-content/10">
                <Image
                  src="/images/banner.png"
                  alt="NexCorp Digital Solutions"
                  width={640}
                  height={420}
                  priority
                  className="w-full h-auto object-cover"
                  style={{ display: 'block' }}
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 60%, oklch(var(--b1)/0.4) 100%)' }} />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce pointer-events-none" style={{ zIndex: 2 }}>
        <p className="text-xs font-display tracking-widest uppercase">Scroll</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  )
}

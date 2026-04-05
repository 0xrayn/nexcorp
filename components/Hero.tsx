'use client'

import { useEffect, useRef } from 'react'
import HeroDashboardCard from './HeroDashboardCard'
import TypingText from './TypingText'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || typeof window === 'undefined') return

    // Lazy-load Three.js only on client
    import('three').then(THREE => {
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setClearColor(0x000000, 0)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
      camera.position.z = 28

      function resize() {
        const w = canvas!.clientWidth
        const h = canvas!.clientHeight
        renderer.setSize(w, h, false)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      const ro = new ResizeObserver(resize)
      ro.observe(canvas)
      resize()

      // Particles
      const count = 700
      const positions = new Float32Array(count * 3)
      const sizes = new Float32Array(count)
      for (let i = 0; i < count; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 60
        positions[i * 3 + 1] = (Math.random() - 0.5) * 40
        positions[i * 3 + 2] = (Math.random() - 0.5) * 30
        sizes[i] = Math.random() * 1.5 + 0.3
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
      const mat = new THREE.PointsMaterial({
        color: 0x6366f1, size: 0.12, transparent: true, opacity: 0.5, sizeAttenuation: true,
      })
      const particles = new THREE.Points(geo, mat)
      scene.add(particles)

      // Torus knots
      const knots: THREE.Mesh[] = []
      const knotColors = [0x6366f1, 0xa855f7, 0x06b6d4, 0x10b981]
      for (let i = 0; i < 4; i++) {
        const g = new THREE.TorusKnotGeometry(1.2 + i * 0.4, 0.3, 80, 12)
        const m = new THREE.MeshBasicMaterial({
          color: knotColors[i], wireframe: true,
          opacity: 0.08 + i * 0.03, transparent: true,
        })
        const mesh = new THREE.Mesh(g, m)
        mesh.position.set(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10 - 5,
        )
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
        scene.add(mesh)
        knots.push(mesh)
      }

      // Grid lines
      const gridMat = new THREE.LineBasicMaterial({ color: 0x6366f1, opacity: 0.04, transparent: true })
      for (let i = -6; i <= 6; i++) {
        const hg = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-30, i * 3.5, -15), new THREE.Vector3(30, i * 3.5, -15),
        ])
        scene.add(new THREE.Line(hg, gridMat))
        const vg = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(i * 5, -25, -15), new THREE.Vector3(i * 5, 25, -15),
        ])
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

      return () => {
        cancelAnimationFrame(animId)
        ro.disconnect()
        document.removeEventListener('mousemove', onMouse)
        renderer.dispose()
      }
    })
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} id="hero-canvas" />
      {/* Overlay gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg,oklch(var(--b1)/0.9) 0%,oklch(var(--b1)/0.6) 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="badge badge-primary badge-outline mb-6 px-4 py-2 text-xs font-display font-semibold tracking-widest uppercase reveal">
              🚀 Inovasi Digital Terdepan
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.05] mb-6 reveal" style={{ animationDelay: '.1s' }}>
              Kami<br />
              <TypingText />
            </h1>
            <p className="text-lg md:text-xl opacity-70 leading-relaxed mb-10 max-w-lg reveal" style={{ animationDelay: '.2s' }}>
              NexCorp menghadirkan solusi teknologi mutakhir — dari pengembangan software enterprise hingga transformasi digital yang mengakselerasi pertumbuhan bisnis Anda.
            </p>
            <div className="flex flex-wrap gap-4 reveal" style={{ animationDelay: '.3s' }}>
              <a href="#services" className="btn btn-primary btn-lg rounded-full px-8 btn-glow shadow-lg shadow-primary/30">
                Jelajahi Layanan
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#portfolio" className="btn btn-outline btn-lg rounded-full px-8">Lihat Portfolio</a>
            </div>
            {/* Stats mini */}
            <div className="flex gap-10 mt-14 reveal" style={{ animationDelay: '.4s' }}>
              <div>
                <p className="text-4xl font-display font-black text-primary">
                  <span className="counter" data-target="250">0</span>+
                </p>
                <p className="text-sm opacity-60 mt-1">Proyek Selesai</p>
              </div>
              <div className="w-px bg-base-content/10" />
              <div>
                <p className="text-4xl font-display font-black text-primary">
                  <span className="counter" data-target="98">0</span>%
                </p>
                <p className="text-sm opacity-60 mt-1">Klien Puas</p>
              </div>
              <div className="w-px bg-base-content/10" />
              <div>
                <p className="text-4xl font-display font-black text-primary">
                  <span className="counter" data-target="12">0</span>+
                </p>
                <p className="text-sm opacity-60 mt-1">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          {/* Right: Dashboard card — dekoratif saja, tidak overlap text */}
          <div className="hidden lg:flex justify-center items-center reveal-right">
            <HeroDashboardCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce pointer-events-none">
        <p className="text-xs font-display tracking-widest uppercase">Scroll</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  )
}

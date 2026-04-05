'use client'

import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-32 bg-base-200/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="reveal-left">
            <p className="text-primary font-display font-bold text-sm tracking-widest uppercase mb-3">Kontak</p>
            <h2 className="text-4xl md:text-5xl font-display font-black leading-tight mb-6">
              Siap Memulai<br />Proyek Anda?
            </h2>
            <p className="opacity-70 leading-relaxed mb-10">
              Ceritakan visi Anda kepada kami. Tim konsultan kami akan menghubungi Anda dalam 24 jam untuk diskusi awal gratis.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold font-display">Kantor Pusat</p>
                  <p className="text-sm opacity-60">Jl. Sudirman Kav. 52-53, Jakarta Selatan 12190</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold font-display">Telepon</p>
                  <p className="text-sm opacity-60">+62 21 5000-1234</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold font-display">Email</p>
                  <p className="text-sm opacity-60">hello@nexcorp.id</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-content/5 p-8 shadow-2xl reveal-right">
            <h3 className="font-display font-bold text-2xl mb-6">Kirim Pesan</h3>
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <p className="font-display font-bold text-xl mb-2">Pesan Terkirim!</p>
                <p className="opacity-60 text-sm">Kami akan merespons dalam 24 jam kerja.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label"><span className="label-text text-xs font-semibold opacity-60 uppercase tracking-widest">Nama</span></label>
                    {/* placeholder text pakai warna neutral/muted, bukan primary */}
                    <input
                      type="text"
                      placeholder="Budi Santoso"
                      className="input input-bordered rounded-xl placeholder-base-content/30"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text text-xs font-semibold opacity-60 uppercase tracking-widest">Perusahaan</span></label>
                    <input
                      type="text"
                      placeholder="PT. Maju Jaya"
                      className="input input-bordered rounded-xl placeholder-base-content/30"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text text-xs font-semibold opacity-60 uppercase tracking-widest">Email</span></label>
                  <input
                    type="email"
                    placeholder="budi@perusahaan.com"
                    className="input input-bordered rounded-xl placeholder-base-content/30"
                  />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text text-xs font-semibold opacity-60 uppercase tracking-widest">Layanan yang Dibutuhkan</span></label>
                  <select className="select select-bordered rounded-xl" defaultValue="">
                    <option value="" disabled>Pilih layanan...</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Cloud &amp; DevOps</option>
                    <option>AI &amp; Machine Learning</option>
                    <option>Cybersecurity</option>
                    <option>IT Consulting</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text text-xs font-semibold opacity-60 uppercase tracking-widest">Pesan</span></label>
                  <textarea
                    className="textarea textarea-bordered rounded-xl h-32 placeholder-base-content/30"
                    placeholder="Ceritakan kebutuhan proyek Anda..."
                  />
                </div>
                <button
                  className="btn btn-primary w-full btn-lg rounded-xl btn-glow shadow-lg shadow-primary/20"
                  onClick={() => setSent(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Kirim Pesan
                </button>
                <p className="text-center text-xs opacity-40">Kami akan merespons dalam 24 jam kerja</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

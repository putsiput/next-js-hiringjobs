'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      

      {/* --- KONTEN UTAMA KONTAK KAMI --- */}
      <main className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
              Hubungi Kami
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Kami Siap Membantu Perjalanan Karier Anda
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto">
              Punya pertanyaan seputar pencocokan AI kami, kendala akun, atau kerja sama bisnis? Jangan ragu untuk mengirimkan pesan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Info Kontak */}
            <div className="space-y-8 bg-slate-900/40 border border-slate-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white">Informasi Kontak</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tim support Hiring Jobs beroperasi setiap hari Senin - Jumat untuk memastikan pengalaman terbaik Anda dalam mencari pekerjaan.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Alamat Kantor</h4>
                    <p className="text-slate-400 text-sm mt-1">Jl. Kutai, Jember - Jawa Timur, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Email Dukungan</h4>
                    <p className="text-slate-400 text-sm mt-1">support@hiringjobs.ai.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 shrink-0">
                    💬
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Jam Operasional</h4>
                    <p className="text-slate-400 text-sm mt-1">09:00 - 18:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Kontak */}
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white">Pesan Terkirim!</h3>
                  <p className="text-slate-400 text-sm">
                    Terima kasih telah menghubungi kami. Tim Hiring Jobs akan segera merespons pesan Anda via email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-xl transition-all"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Alamat Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Pesan Anda</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan pertanyaan atau kendala Anda di sini..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/35 transition-all duration-200 text-sm"
                  >
                    Kirim Pesan
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}
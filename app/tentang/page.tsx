import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      
      {/* --- NAVIGATION BAR --- */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-16 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/30">
              HJ
            </div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Hiring Jobs<span className="text-indigo-400">.ai</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/dashboard" className="hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/jobs" className="hover:text-white transition-colors">
              Cari Lowongan
            </Link>
            <Link href="/tentang" className="text-indigo-400 transition-colors">
              Tentang Kami
            </Link>
            <Link href="/kontak" className="hover:text-white transition-colors">
              Kontak Kami
            </Link>
          </nav>

          {/* User Profile Action / Status */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-xs font-semibold text-white"> J. D. Putri H. </span>
              <span className="text-[10px] text-indigo-400">Pro Member</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-bold text-sm shadow-inner">
              JD
            </div>
          </div>

        </div>
      </header>

      {/* --- KONTEN UTAMA TENTANG KAMI --- */}
      <main className="py-16 px-6 sm:px-12 lg:px-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
            Tentang Hiring Jobs
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
            Menghubungkan Bakat Unik Anda dengan Peluang Impian Berbasis AI
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
            Di <span className="text-indigo-400 font-semibold">Hiring Jobs</span>, kami percaya bahwa setiap individu memiliki potensi unik. Kami memanfaatkan teknologi kecerdasan buatan (AI) tingkat lanjut untuk memetakan minat dan bakat Anda secara presisi dengan lowongan pekerjaan yang paling relevan.
          </p>
        </div>

        {/* Visi & Misi Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold text-xl mb-6">
              🎯
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Visi Kami</h3>
            <p className="text-slate-400 leading-relaxed">
              Menjadi platform karier cerdas nomor satu di Indonesia yang mengeliminasi ketidaksesuaian penempatan kerja melalui algoritma AI yang adaptif dan manusiawi.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold text-xl mb-6">
              🚀
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Misi Kami</h3>
            <p className="text-slate-400 leading-relaxed">
              Memberdayakan para pencari kerja dengan rekomendasi karier yang akurat, mempercepat proses rekrutmen perusahaan, dan membangun ekosistem kerja masa depan yang inklusif.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-24 text-center bg-gradient-to-b from-indigo-950/40 to-slate-900/40 border border-indigo-500/20 p-10 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Siap Menemukan Karier Impian Anda?</h2>
          <p className="text-slate-400 mb-8">Bergabunglah dengan ribuan profesional lainnya yang telah menemukan jalur karier yang tepat bersama Hiring Jobs.</p>
          <Link 
            href="/jobs" 
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/35 transition-all duration-200"
          >
            Cari Pekerjaan Sekarang
          </Link>
        </div>
      </main>

    </div>
  );
}
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  // Daftar lowongan pekerjaan yang disesuaikan dengan hasil analisis minat bakat AI
  const allJobs = [
    {
      id: 1,
      title: 'AI Frontend Engineer',
      company: 'TechNova AI',
      location: 'Jakarta (Hybrid)',
      category: 'Frontend Development',
      match: '98%',
      salary: 'Rp 12jt - 18jt',
      type: 'Full-time',
      description: 'Membangun antarmuka web interaktif menggunakan Next.js, Tailwind CSS, dan integrasi model LLM berbasis AI.',
    },
    {
      id: 2,
      title: 'UI/UX Product Designer',
      company: 'PixelCraft Studio',
      location: 'Remote',
      category: 'UI/UX Design',
      match: '95%',
      salary: 'Rp 10jt - 15jt',
      type: 'Full-time',
      description: 'Merancang pengalaman pengguna (UX) dan antarmuka (UI) yang intuitif untuk platform SaaS berbasis kecerdasan buatan.',
    },
    {
      id: 3,
      title: 'Junior Data Analyst',
      company: 'DataPulse Indonesia',
      location: 'Bandung',
      category: 'Problem Solving & Logic',
      match: '91%',
      salary: 'Rp 8jt - 12jt',
      type: 'Contract',
      description: 'Menganalisis tren data pengguna dan membantu mengoptimalkan algoritma pencocokan bakat.',
    },
    {
      id: 4,
      title: 'React.js Developer',
      company: 'Solusi Digital Nusantara',
      location: 'Jakarta Selatan',
      category: 'Frontend Development',
      match: '89%',
      salary: 'Rp 9jt - 14jt',
      type: 'Full-time',
      description: 'Mengembangkan aplikasi web berskala besar menggunakan ekosistem React modern dan state management.',
    },
    {
      id: 5,
      title: 'Product Designer (Figma Specialist)',
      company: 'Inovasi Kreasi Media',
      location: 'Remote',
      category: 'UI/UX Design',
      match: '87%',
      salary: 'Rp 11jt - 16jt',
      type: 'Full-time',
      description: 'Bertanggung jawab atas pembuatan desain sistem, wireframe, dan uji coba pengguna secara berkala.',
    },
  ];

  // Filter lowongan berdasarkan kategori minat bakat & kata kunci pencarian
  const filteredJobs = allJobs.filter((job) => {
    const matchesCategory = selectedCategory === 'Semua' || job.category === selectedCategory;
    const matchesQuery = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

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
            <Link href="/jobs" className="text-indigo-400 transition-colors">
              Cari Lowongan
            </Link>
            <Link href="/tentang" className="hover:text-white transition-colors">
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

      {/* --- KONTEN UTAMA HALAMAN LOWONGAN --- */}
      <main className="py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* Header & Search Bar */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
              Pencarian Berbasis AI
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Temukan Pekerjaan yang <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Sesuai Bakat Anda</span>
            </h1>
            <p className="text-slate-400 text-sm">
              Sistem AI kami menyaring lowongan dari LinkedIn dan berbagai platform global berdasarkan skor kecocokan minat Anda.
            </p>

            {/* Input Pencarian */}
            <div className="pt-4">
              <input
                type="text"
                placeholder="Cari posisi pekerjaan atau nama perusahaan (contoh: Frontend, TechNova)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-all text-sm shadow-lg shadow-slate-950/50"
              />
            </div>

            {/* Filter Kategori Minat Bakat */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {['Semua', 'Frontend Development', 'UI/UX Design', 'Problem Solving & Logic'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all border ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                      : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Daftar Lowongan */}
          <div className="space-y-4 max-w-4xl mx-auto pt-6">
            <div className="flex items-center justify-between text-sm text-slate-400 px-2">
              <span>Menampilkan {filteredJobs.length} lowongan tervalidasi</span>
              <span className="text-xs text-indigo-400">Sinkronisasi LinkedIn Aktif ⚡</span>
            </div>

            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold bg-indigo-600/20 text-indigo-400 px-2.5 py-0.5 rounded-md border border-indigo-500/20">
                          Match {job.match} AI
                        </span>
                        <span className="text-xs text-slate-500">• {job.type}</span>
                        <span className="text-xs text-slate-500">• {job.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <p className="text-sm font-medium text-slate-300 mt-0.5">{job.company}</p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3">
                      <span className="text-sm font-semibold text-emerald-400">{job.salary}</span>
                      <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-xl shadow-md shadow-indigo-600/20 transition-all">
                        Lamar via LinkedIn
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                    {job.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-16 bg-slate-900/30 border border-slate-800 rounded-2xl space-y-3">
                <p className="text-lg font-semibold text-white">Tidak ada lowongan yang ditemukan</p>
                <p className="text-sm text-slate-400">Coba ubah kata kunci pencarian atau pilih kategori minat bakat yang berbeda.</p>
              </div>
            )}
          </div>

        </div>
      </main>

    </div>
  );
}
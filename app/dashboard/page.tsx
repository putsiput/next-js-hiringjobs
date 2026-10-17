'react';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '../layout';

export default function DashboardPage() {
  // Data simulasi untuk rekomendasi pekerjaan berbasis AI
  const recommendedJobs = [
    {
      id: 1,
      title: 'AI Frontend Engineer',
      company: 'TechNova AI',
      location: 'Jakarta (Hybrid)',
      match: '98%',
      salary: 'Rp 12jt - 18jt',
      type: 'Full-time',
    },
    {
      id: 2,
      title: 'UI/UX Product Designer',
      company: 'PixelCraft Studio',
      location: 'Remote',
      match: '95%',
      salary: 'Rp 10jt - 15jt',
      type: 'Full-time',
    },
    {
      id: 3,
      title: 'Junior Data Analyst',
      company: 'DataPulse Indonesia',
      location: 'Bandung',
      match: '91%',
      salary: 'Rp 8jt - 12jt',
      type: 'Contract',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      

      {/* --- KONTEN UTAMA DASHBOARD ANDA --- */}
      <main className="py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* Top Header / Welcome Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
            <div>
              <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
                Dashboard Pelamar
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Selamat Datang Kembali, <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Putri! 👋</span>
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                AI kami telah menganalisis profil Anda hari ini. Berikut adalah pembaruan status karier Anda.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link 
                href="/profile/edit" 
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm rounded-xl transition-all border border-slate-700"
              >
                Edit Profil AI
              </Link>
              <Link 
                href="/jobs" 
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
              >
                Jelajahi Lowongan
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Kecocokan Profil AI</p>
              <div className="flex items-baseline justify-between mt-3">
                <h3 className="text-3xl font-extrabold text-white">96%</h3>
                <span className="text-emerald-400 text-xs font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">Sangat Baik</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Pekerjaan Dilamar</p>
              <div className="flex items-baseline justify-between mt-3">
                <h3 className="text-3xl font-extrabold text-white">12</h3>
                <span className="text-indigo-400 text-xs font-semibold bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">Bulan Ini</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Undangan Interview</p>
              <div className="flex items-baseline justify-between mt-3">
                <h3 className="text-3xl font-extrabold text-white">3</h3>
                <span className="text-purple-400 text-xs font-semibold bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">Aktif</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Skill Teridentifikasi</p>
              <div className="flex items-baseline justify-between mt-3">
                <h3 className="text-3xl font-extrabold text-white">18</h3>
                <span className="text-sky-400 text-xs font-semibold bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">Terverifikasi</span>
              </div>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Rekomendasi Pekerjaan AI (2 Kolom) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>✨</span> Rekomendasi Khusus Untuk Anda
                </h2>
                <Link href="/app/jobs" className="text-sm text-indigo-400 hover:underline">
                  Lihat Semua
                </Link>
              </div>

              <div className="space-y-4">
                {recommendedJobs.map((job) => (
                  <div 
                    key={job.id} 
                    className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold bg-indigo-600/20 text-indigo-400 px-2.5 py-0.5 rounded-md border border-indigo-500/20">
                          Match {job.match}
                        </span>
                        <span className="text-xs text-slate-500">• {job.type}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mt-1">{job.title}</h3>
                      <p className="text-sm text-slate-400">{job.company} • {job.location}</p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3">
                      <span className="text-sm font-semibold text-emerald-400">{job.salary}</span>
                      <button className="px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white text-xs font-medium rounded-xl transition-all border border-indigo-500/30">
                        Lamar Cepat
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar / Analisis Minat & Bakat (1 Kolom) */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>📊</span> Analisis Minat Bakat
              </h2>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-medium">Frontend Development</span>
                    <span className="text-indigo-400 font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div className="bg-indigo-500 h-full rounded-full w-[92%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-medium">UI/UX & Design Thinking</span>
                    <span className="text-purple-400 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div className="bg-purple-500 h-full rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-medium">Problem Solving & Logic</span>
                    <span className="text-sky-400 font-semibold">88%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div className="bg-sky-500 h-full rounded-full w-[88%]"></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-center">
                  <p className="text-xs text-slate-400 mb-3">Ingin memperbarui hasil analisis minat bakat Anda?</p>
                  <button className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium rounded-xl transition-all border border-slate-700">
                    Ulangi Tes AI Bakat
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}
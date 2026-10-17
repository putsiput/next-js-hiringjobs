export default function Profil() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-sans text-3xl font-bold text-foreground">
        Profil Saya
      </h1>
      <p className="mt-4 font-mono text-sm text-slate-500">
        status: sedang belajar tailwind
      </p>
      <button className="mt-6 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-600">
        Simpan
      </button>
      <p className="mt-6 text-base md:text-xl">
        Teks ini membesar di layar yang lebih lebar.
      </p>
    </main>
  );
}
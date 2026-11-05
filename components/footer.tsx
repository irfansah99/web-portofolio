

export default function Footer() {

  return (
    <footer className="bg-cyan-900 px-6 py-8 text-white">
      <div className="mx-auto w-[80vw] lg:w-[70vw]">
        <div className="flex flex-col items-center gap-5">
          <div className="text-center">
            <h2 className="text-xl font-bold">Irfan Sah Ramadhani</h2>
            <p className="mt-2 text-sm text-slate-400">
              Web Developer | Frontend & Backend Development
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-5 text-sm text-slate-300">
            <a href="/#beranda" className="hover:text-cyan-400">
              Beranda
            </a>
            <a href="/#tentang" className="hover:text-cyan-400">
              Tentang Saya
            </a>
            <a href="/#keahlian" className="hover:text-cyan-400">
              Keahlian
            </a>
            <a href="/#projek" className="hover:text-cyan-400">
              Proyek
            </a>
            <a href="/#kontak" className="hover:text-cyan-400">
              Kontak
            </a>
          </nav>

          <div className="w-full border-t border-slate-700 pt-5">
            <p className="text-center text-xs text-slate-400">
              © 2026 Irfan Sah Ramadhani. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

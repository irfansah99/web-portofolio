"use client"

import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <div className=" contain mx-auto mt-16 md:mt-28 w-[95vw] md:w-[80vw] lg:w-[70vw]  flex  flex-row items-center  justify-between gap-6 md:gap-10 lg:gap-20">
      <div className="md:w-1/2 space-y-4 ">
        <h1 className="text-lg  md:text-2xl ">
          HALO, SELAMAT DATANG DI PORTOFOLIO SAYA,
        </h1>
        <h2 className="text-xl  md:text-3xl font-bold ">Irfan Sah Ramadhani</h2>
        <div className="md:hidden block">
          <img
            className="max-w-60 h-52 sm:w-72 sm:h-60  rounded-3xl bg-white/10 backdrop-blur-md bg-cover  object-cover bg-center shadow-xl transition-all duration-300"
            src="/image/profil2.jpeg"
          />
        </div>
        <p className=" text-base md:text-lg  text-cyan-500">
          Berfokus pada pengembangan aplikasi web, mulai dari membangun
          antarmuka yang responsif hingga mengembangkan sistem backend yang
          fungsional.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs  md:text-sm text-blue-500">
            Frontend Developer
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs  md:text-sm text-green-500">
            Backend Developer
          </span>

          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs  md:text-sm text-yellow-500">
            Fullstack Developer
          </span>
        </div>
        <div className="flex gap-4 mb-6">
          <div className="flex flex-wrap gap-3 text-sm md:text-base">
            <button
              onClick={() =>
                document
                  .getElementById("tentang")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 font-semibold text-white hover:bg-cyan-700 transition"
            >
              <ArrowRight size={18} />
              Jelajahi Portfolio
            </button>

            <a
              href="/image/CV_Irfan.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500 px-5 py-2.5 font-semibold text-cyan-500 hover:bg-cyan-500/10 transition"
            >
              <Download size={18} />
              Unduh CV
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          className=" w-full max-h-90  bg-white/10 backdrop-blur-md bg-cover rounded-full bg-center shadow-xl transition-all duration-300"
          src="/image/profil1.jpeg"
        />
      </div>
    </div>
  );
}

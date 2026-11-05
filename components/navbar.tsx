"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { motion, useScroll, useSpring } from "motion/react";
import { Monoton } from "next/font/google";
import { useEffect, useState } from "react";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io";
import { MdEmail } from "react-icons/md";
const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
});
export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setIsSticky(value > 0);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    restDelta: 0.001,
  });

  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav
        className={`w-full transition-all duration-300  bg-transparent  flex justify-center ${
          isSticky
            ? " bg-white/60 backdrop-blur-md text-gray-900 md:text-lg text-sm"
            : " text-gray-400 md:text-xl text-base"
        } fixed left-0 z-50 top-0 p-2 md:p-6`}
      >
        <div className=" justify-between  w-[80vw] lg:w-[70vw] hidden md:flex">
          <h1
            className={`${monoton.className} font-bold ${
              isSticky ? "text-2xl" : "text-3xl"
            }`}
          >
            IRFAN
          </h1>
          <ul className="flex items-center gap-5 ">
            <li>
              <a href="/#beranda" className="hover:text-cyan-500 transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="/#tentang" className="hover:text-cyan-500 transition">
                Tentang Saya
              </a>
            </li>

            <li>
              <a href="/#projek" className="hover:text-cyan-500 transition">
                Proyek
              </a>
            </li>

            <li>
              <a href="/#kontak" className="hover:text-cyan-500 transition">
                Hubungi Saya
              </a>
            </li>
          </ul>
        </div>
        <div className="flex  items-center  justify-end flex-1 md:hidden">
          <button
            className="  z-50 text-white lg:px-3  px-2 py-1 rounded bg-cyan-900 hover:bg-gray-700 md:hidden"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-7 " />
            ) : (
              <Bars3Icon className="w-6 h-7" />
            )}
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full ">
          <motion.div
            className="fixed left-0 right-0 h-0.75 bg-cyan-400"
            style={{
              scaleX,
              originX: 0,
            }}
          />
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed right-0 top-14 z-50 flex h-[calc(100vh-3.5rem)] w-[80vw] max-w-sm flex-col border-l border-white/30 bg-white/90 p-5 shadow-2xl backdrop-blur-xl ">
            <div className="mb-6 rounded-xl bg-blue-50 p-4">
              <h2 className="font-bold text-slate-800">Irfan Sah Ramadhani</h2>
              <p className="mt-1 text-sm text-slate-500">Web Developer</p>
              <p className="mt-2 text-xs text-slate-500">
                Frontend & Backend Development
              </p>
            </div>

            <p className="mb-3 text-xs font-semibold tracking-widest text-slate-400">
              MENU NAVIGASI
            </p>

            <ul className="flex flex-col gap-2">
              {[
                ["Beranda", "/#beranda"],
                ["Tentang Saya", "/#tentang"],
                ["Keahlian", "/#keahlian"],
                ["Proyek", "/#projek"],
                ["Hubungi Saya", "/#kontak"],
              ].map(([title, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="
                block rounded-lg px-4 py-3
                font-medium text-slate-700
                transition hover:bg-cyan-50
                hover:text-cyan-600
              "
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t border-slate-200 pt-5">
              <p className="mb-3 text-xs font-semibold tracking-widest text-slate-400">
                TEMUKAN SAYA
              </p>

              <ul className="flex my-3 gap-4 text-2xl  text-slate-400 items-center justify-center">
                <li>
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="hover:text-blue-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoFacebook />
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/1234567890"
                    aria-label="WhatsApp"
                    className="hover:text-green-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="hover:text-pink-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="hover:text-red-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdEmail />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="hover:bg-slate-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoGithub />
                  </a>
                </li>
              </ul>
              <p className="text-xs text-slate-400">
                © 2026 Irfan Sah Ramadhani
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

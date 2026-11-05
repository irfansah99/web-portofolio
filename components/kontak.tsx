import {
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io";
import { MdEmail } from "react-icons/md";
export default function Kontak() {
  return (
    <div className="mx-auto   w-[80vw] lg:w-[70vw]">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Kontak</h1>
        <p className="mt-3 text-white/80">
          Saya terbuka terhadap kesempatan kerja dan kolaborasi di bidang
          pengembangan aplikasi web.
        </p>
      </div>
      <ul className="flex mt-3 gap-6 text-2xl lg:text-6xl text-white items-center justify-center">
        <li>
          <a
            href="https://www.facebook.com/share/1AEr3j4FNc/"
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
            href="https://www.linkedin.com/in/irfan-sah-ramadhani-a15411382/"
            aria-label="Linkedin"
            className="hover:text-sky-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/085697202457"
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
            href="https://www.instagram.com/irfansahramadhani?rpxt=MTh4NHhpMnRreGxnZQ=="
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
            href="mailto:irfansyah3657@gmail.com"
            aria-label="Email"
            className="hover:text-red-500 transition-colors duration-300"
          >
            <MdEmail />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/irfansah99"
            aria-label="Github"
            className="hover:bg-slate-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}

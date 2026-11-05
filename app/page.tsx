import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import Tentang from "@/components/tentang";
import Projek from "@/components/projek";
import Kontak from "@/components/kontak";

export default function Home() {
  return (
    <>

 

      <section
        id="beranda"
        className="relative   min-h-[80vh]  bg-linear-to-r from-white to-cyan-100 text-cyan-700 flex p-6 items-center "
      >
        <Hero />
      </section>

      <section
        id="tentang"
        className="relative min-h-screen bg-linear-to-r from-blue-400 to-cyan-500 px-6 py-20 text-white"
      >
        <Tentang />
      </section>
      <section
        id="projek"
        className="relative min-h-screen bg-linear-to-r from-white to-cyan-100 text-cyan-700 px-6 py-20 "
      >
        <Projek />
      </section>
      <section
        id="kontak"
        className="relative  bg-linear-to-r from-blue-300 to-cyan-500 px-6 py-20 text-white"
      >
        <Kontak />
      </section>

    </>
  );
}

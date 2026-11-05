import { Listproyek, LogoTeknologi } from "@/data/data";
import Link from "next/link";

export default function Projek() {
  return (
    <div className="mx-auto  w-[80vw] lg:w-[70vw]">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Proyek</h1>
        <p className="mt-3 text-cyan-600/60">
          Berikut adalah tiga proyek pilihan yang merepresentasikan pengalaman,
          keterampilan, dan kemampuan saya dalam merancang serta mengembangkan
          aplikasi berbasis web.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-8  py-5 px-2 rounded-2xl mb-5 ">
        {Listproyek.map((item) => (
          <div
            key={item.id}
            className="flex h-full flex-col overflow-hidden rounded-xl border border-white/20 bg-white/80 shadow-md"
          >
            <div className="h-80 w-full shrink-0 overflow-hidden">
              <img
                src={item.image[0]}
                alt={item.judul}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="mb-2 text-xs text-gray-500">{item.time}</p>

              <h2 className="mb-3 text-lg font-bold text-slate-800">
                {item.judul}
              </h2>

              <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
                {item.deskripsi}
              </p>

              <div className="mb-5 flex flex-wrap gap-3">
                {item.teknologi.slice(0, 5).map((tech) => {
                  const Icon =
                    LogoTeknologi[tech as keyof typeof LogoTeknologi];

                  return (
                    <div
                      key={tech}
                      title={tech}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-cyan-300 hover:text-cyan-600"
                    >
                      {Icon && <Icon size={20} />}
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto border-t border-slate-200 pt-4">
                <Link
                  href={`/detail-proyek/${item.slug}`}
                  className="text-sm font-semibold text-cyan-600 hover:underline"
                >
                  Lihat Selengkapnya →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

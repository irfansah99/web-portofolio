import { LogoTeknologi } from "@/data/data";

export type ProjekType = {
  id: number;
  judul: string;
  slug: string;
  kategori: string;
  time: string;
  peran: string;

  deskripsi: string;
  permasalahan: string;
  solusi: string;
  tantangan: string;
  pembelajaran: string;

  image: string[];
  teknologi: string[];
  link?: string;
  fitur: {
    judul: string;
    deskripsi: string;
  }[];
};
export default function Detail_Proyek({ projek }: { projek: ProjekType }) {
  return (
    <div className="mx-auto w-full space-y-14 pb-16">
      <section className="grid grid-cols-2 gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-4">
        {[
          { label: "Nama Proyek", value: projek.judul },
          { label: "Kategori", value: projek.kategori },
          { label: "Periode", value: projek.time },
          { label: "Peran", value: projek.peran },
        ].map((item) => (
          <div key={item.label} className="space-y-1 ">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {item.label}
            </span>
            <p className="font-semibold text-slate-800">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <img
            src={projek.image[0]}
            alt={`Preview ${projek.judul}`}
            className="mx-auto aspect-video w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
        <div className="text-center space-y-2">
          <p className=" text-xs text-slate-400">
            Tampilan utama aplikasi {projek.judul}
          </p>
          {projek.link && (
            <a
              href={projek.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-center text-base text-blue-600 hover:text-blue-400"
            >
              Link Demo
            </a>
          )}
        </div>
      </section>
      <section className="space-y-4">
        <div>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">
            Deskripsi Proyek
          </h2>
        </div>

        <p className="text-justify leading-8 text-slate-600">
          {projek.deskripsi}
        </p>
      </section>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              !
            </div>
            <h2 className="text-xl font-bold text-slate-800">Permasalahan</h2>
          </div>

          <p className="leading-7 text-slate-600">{projek.permasalahan}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
              ✓
            </div>
            <h2 className="text-xl font-bold text-slate-800">Solusi</h2>
          </div>

          <p className="leading-7 text-slate-600">{projek.solusi}</p>
        </div>
      </section>

      <section className="space-y-8">
        <div>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">
            Fitur Utama
          </h2>
          <p className="mt-2 text-slate-500">
            Beberapa fitur yang dikembangkan dalam aplikasi ini.
          </p>
        </div>

        <div className="space-y-10">
          {projek.image.slice(1).map((image, index) => {
            const fitur = projek.fitur[index];

            return (
              <div
                key={`${image}-${index}`}
                className="grid grid-cols-1 items-center gap-5 md:grid-cols-2"
              >
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                  <img
                    src={image}
                    alt={fitur?.judul ?? `Fitur ${index + 1}`}
                    className="aspect-video w-full object-contain transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="space-y-3 md:px-5">
                  <h3 className="text-xl font-bold text-slate-800">
                    {fitur?.judul ?? `Fitur ${index + 1}`}
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {fitur?.deskripsi ?? "Informasi fitur aplikasi."}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">
            Teknologi yang Digunakan
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {projek.teknologi.map((tech) => {
            const Icon = LogoTeknologi[tech as keyof typeof LogoTeknologi];

            return (
              <div
                key={tech}
                title={tech}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-sm"
              >
                {Icon && <Icon size={22} />}
                <span className="text-sm font-medium text-slate-700">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-800">Tantangan</h2>
          <p className="leading-7 text-slate-600">{projek.tantangan}</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-800">Pembelajaran</h2>
          <p className="leading-7 text-slate-600">{projek.pembelajaran}</p>
        </div>
      </section>
    </div>
  );
}

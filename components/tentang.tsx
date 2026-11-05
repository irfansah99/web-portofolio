import {
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  MapPin,
  Monitor,
  Server,
  Wrench,
} from "lucide-react";
import Link from "next/link";

import {
  SiGo,
  SiPhp,
  SiLaravel,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiMeilisearch,
  SiGithub,
  SiDocker,
  SiPostman,
} from "react-icons/si";
export default function Tentang() {
  return (
    <div className="mx-auto  w-[80vw] lg:w-[70vw]">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Tentang Saya</h1>
        <p className="mt-3 text-white/80">
          Mengenal lebih dekat tentang diri dan perjalanan saya.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 py-5 px-2 rounded-2xl mb-5 ">
        <div className="flex flex-col items-center md:items-start ">
          <img
            src="/image/tentang.jpg"
            alt="Foto profil Irfan"
            className="h-64 w-64 rounded-2xl object-cover shadow-2xl md:h-72 md:w-72"
          />

          <h2 className="mt-5 text-lg md:text-2xl font-bold">
            Irfan Sah Ramadhani
          </h2>

          <p className="mt-1 text-xs md:text-sm flex items-center gap-2 text-white/80">
            <MapPin size={16} />
            Jakarta, Indonesia
          </p>
        </div>

        <div className="space-y-4 md:col-span-2">
          <h2 className="text-lg md:text-2xl font-bold">Siapa Saya?</h2>

          <p className="leading-relaxed text-white/90 md:text-base text-sm">
            Saya merupakan lulusan S1 Teknologi Informasi dari Universitas Bina
            Sarana Informatika dengan masa studi 2022–2026. Selama menempuh
            pendidikan, saya mengembangkan ketertarikan pada dunia teknologi,
            khususnya pengembangan aplikasi web. Saya senang mengeksplorasi
            teknologi baru, mengasah kemampuan pemrograman, dan menerapkan
            pengetahuan yang saya miliki untuk membangun aplikasi yang dapat
            memberikan solusi serta manfaat bagi penggunanya.
          </p>

          <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
            <h3 className="mb-4 text-lg font-bold">Informasi Pribadi</h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-5 text-sm">
              <div>
                <p className="text-white/70">Domisili</p>
                <p className="font-medium">Jakarta, Indonesia</p>
              </div>

              <div>
                <p className="text-white/70">Tanggal Lahir</p>
                <p className="font-medium">Batusangkar, 04 November 2003</p>
              </div>

              <div>
                <p className="text-white/70">Email</p>
                <p className="break-all font-medium">irfansyah3657@gmail.com</p>
              </div>

              <div>
                <p className="text-white/70">No. Telepon</p>
                <p className="font-medium">085697202457</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 justify-items-center ">
        <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md w-full">
          <div className="mb-2 flex items-center gap-3">
            <GraduationCap size={24} />
            <h3 className="text-lg font-bold">Pendidikan</h3>
          </div>

          <p className="font-semibold">Universitas Bina Sarana Informatika</p>
          <p className="text-sm text-white/80">S1 Teknologi Informasi</p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <span>Periode: 2022–2026</span>
            <span>IPK: 3,98</span>
          </div>
        </div>

        <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md w-full">
          <div className="mb-2 flex items-center gap-3">
            <BriefcaseBusiness size={24} />
            <h3 className="text-lg font-bold">Pengalaman</h3>
          </div>

          <p className="font-semibold">Sudin Kominfotik Jakarta Timur</p>
          <p className="text-sm text-white/80">
            Magang - September hingga November 2025
          </p>
        </div>

        <div className="col-span-3 w-full rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
          <div className="mb-6 flex items-center gap-3">
            <Code2 size={24} />
            <h3 className="text-xl font-bold">Keahlian Teknis</h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Server size={18} />
                <h4 className="font-semibold">Backend Development</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Go", icon: SiGo },
                  { name: "Gin", icon: SiGo },
                  { name: "PHP", icon: SiPhp },
                  { name: "Laravel", icon: SiLaravel },
                ].map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2"
                  >
                    <Icon size={20} />
                    <span className="text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <Monitor size={18} />
                <h4 className="font-semibold">Frontend Development</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { name: "JavaScript", icon: SiJavascript },
                  { name: "TypeScript", icon: SiTypescript },
                  { name: "Next.js", icon: SiNextdotjs },
                  { name: "Tailwind CSS", icon: SiTailwindcss },
                ].map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2"
                  >
                    <Icon size={20} />
                    <span className="text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Database size={18} />
                <h4 className="font-semibold">Database & Search Engine</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { name: "MySQL", icon: SiMysql },
                  { name: "PostgreSQL", icon: SiPostgresql },
                  { name: "Redis", icon: SiRedis },
                  { name: "Meilisearch", icon: SiMeilisearch },
                ].map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2"
                  >
                    <Icon size={20} />
                    <span className="text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Wrench size={18} />
                <h4 className="font-semibold">Tools & Others</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { name: "GitHub", icon: SiGithub },
                  { name: "Docker", icon: SiDocker },
                  { name: "Postman", icon: SiPostman },
                ].map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2"
                  >
                    <Icon size={20} />
                    <span className="text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

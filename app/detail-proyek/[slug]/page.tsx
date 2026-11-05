import Detail_Proyek from "@/components/detail";
import { Listproyek } from "@/data/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BiLeftArrow } from "react-icons/bi";

export function generateStaticParams() {
  return Listproyek.map((item) => ({
    slug: item.slug,
  }));
}

async function DetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const proyek = Listproyek.find((item) => item.slug === slug);

  if (!proyek) {
    notFound();
  }

  return <Detail_Proyek projek={proyek} />;
}

export default function Detail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="mx-auto min-h-screen w-[80vw] space-y-4 py-10 pt-14 md:w-[70vw] md:pt-30">
      <Link
        href="/#projek"
        className="inline-flex items-center gap-2 text-slate-600 transition hover:text-cyan-600"
      >
        <BiLeftArrow size={18} />
        <span>Kembali</span>
      </Link>

      <Suspense fallback={<p>Memuat detail proyek...</p>}>
        <DetailContent params={params} />
      </Suspense>
    </main>
  );
}

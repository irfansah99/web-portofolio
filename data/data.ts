export const Listproyek = [
  {
    id: 1,
    judul: "Diabetes.Care",
    slug: "diabetes-care",
    kategori: "Tugas Akhir / Skripsi",
    time: "2026",
    peran: "Full-Stack Developer",

    deskripsi:
      "Diabetes.Care merupakan aplikasi berbasis web yang dirancang untuk membantu pengguna mengenali risiko diabetes sejak dini melalui analisis karakteristik dan gejala menggunakan algoritma Random Forest. Proyek ini dikembangkan sebagai bagian dari penyusunan tugas akhir (skripsi) dengan judul 'Perancangan Sistem Deteksi Penyakit Diabetes Berbasis Website Menggunakan Algoritma Random Forest'.",

    permasalahan:
      "Pemeriksaan diabetes umumnya memerlukan fasilitas pelayanan kesehatan, pemeriksaan laboratorium, biaya, serta waktu sehingga dapat menjadi kendala bagi masyarakat untuk melakukan pemeriksaan secara rutin. Selain itu, pemanfaatan teknologi Machine Learning untuk membantu mengenali risiko diabetes sejak dini masih perlu dikembangkan dalam bentuk aplikasi yang mudah diakses dan digunakan oleh masyarakat.",

    solusi:
      "Mengembangkan Diabetes.Care, sebuah aplikasi deteksi dini risiko diabetes berbasis web yang dapat diakses dengan mudah oleh masyarakat. Sistem ini mengintegrasikan algoritma Machine Learning Random Forest untuk mengolah karakteristik dan gejala pengguna sehingga menghasilkan prediksi risiko diabetes. Selain itu, aplikasi dilengkapi dengan fitur riwayat prediksi dan artikel edukasi kesehatan untuk membantu meningkatkan pemahaman masyarakat mengenai diabetes. Melalui sistem ini, pengguna diharapkan dapat mengenali potensi risiko diabetes lebih awal sebagai langkah awal dalam meningkatkan kesadaran dan melakukan pencegahan.",

    tantangan:
      "Mengintegrasikan beberapa teknologi dengan fungsi yang berbeda, yaitu Next.js sebagai frontend, Go dengan framework Gin sebagai backend, serta FastAPI sebagai layanan Machine Learning. Tantangan utamanya adalah memastikan setiap layanan dapat saling berkomunikasi dengan baik melalui REST API, termasuk dalam proses pengiriman data, pengolahan prediksi, dan pengembalian hasil ke frontend.",

    pembelajaran:
      "Memperoleh pemahaman mengenai integrasi antar layanan dan pengembangan REST API, serta mempelajari penggunaan Docker untuk mengelola dan menjalankan beberapa layanan dalam lingkungan deployment. Selain itu, mendapatkan pengalaman dalam mengimplementasikan Redis sebagai sistem caching, Meilisearch sebagai mesin pencarian, mengonfigurasi Cloudflare untuk mendukung deployment, serta mengintegrasikan model Machine Learning ke dalam aplikasi berbasis web.",

    image: [
      "/image/dashboard_diabetes.png",
      "/image/predik_diabetes.png",
      "/image/hasil_diabetes.png",
      "/image/riwayat_diabetes.png",
      "/image/artikel_diabetes.png",
    ],

    teknologi: [
      "Next.js",
      "FastApi",
      "Tailwind CSS",
      "Go",
      "Gin",
      "Meilisearch",
      "MySQL",
      "TypeScript",
      "Python",
    ],

    fitur: [
      {
        judul: "Form Prediksi Diabetes",
        deskripsi:
          "Formulir untuk mengisi karakteristik dan gejala pengguna sebagai input model prediksi.",
      },
      {
        judul: "Hasil Prediksi",
        deskripsi:
          "Menampilkan hasil prediksi risiko diabetes berdasarkan data yang dimasukkan.",
      },
      {
        judul: "Riwayat Prediksi",
        deskripsi:
          "Memungkinkan pengguna melihat kembali hasil prediksi sebelumnya.",
      },
      {
        judul: "Artikel Kesehatan",
        deskripsi: "Menyediakan informasi dan edukasi seputar kesehatan.",
      },
      {
        judul: "Dashboard Administrator",
        deskripsi: "Menyediakan pengelolaan data pengguna dan konten aplikasi.",
      },
    ],
  },
  {
    id: 2,
    judul: "Sistem Jaktim Crisis Center (JCC)",
    slug: "jcc",
    kategori: "Tugas Akhir PKL",
    time: "2025",
    peran: "Full-Stack Developer",

    deskripsi:
      "Jaktim Crisis Center (JCC) merupakan aplikasi berbasis web yang dikembangkan sebagai platform pelaporan keadaan darurat secara terpadu, cepat, dan responsif. Sistem ini bertujuan mempermudah masyarakat dalam menyampaikan laporan, meningkatkan koordinasi antarinstansi terkait, serta mempercepat proses penanganan keadaan darurat. Selain itu, JCC menyediakan informasi perkembangan laporan sehingga masyarakat dapat memantau proses penanganan secara lebih transparan. Proyek ini dikembangkan sebagai bagian dari tugas akhir Praktik Kerja Lapangan (PKL) dengan judul 'Perancangan Sistem Jaktim Crisis Center (JCC) Berbasis Laravel sebagai Solusi Pelaporan Realtime dan Tanggap Cepat dengan Metode Waterfall'.",

    permasalahan:
      "Penanganan keadaan darurat di wilayah Jakarta Timur masih menghadapi berbagai kendala, seperti pelaporan yang belum terpusat, keterlambatan respons akibat koordinasi yang kurang optimal, serta belum adanya sistem prioritas berdasarkan tingkat bahaya. Selain itu, minimnya dokumentasi digital menyulitkan pelacakan riwayat kejadian, sementara kurangnya transparansi membuat masyarakat tidak dapat memantau perkembangan laporan secara langsung. Kondisi tersebut berpotensi menghambat proses penanganan keadaan darurat secara efektif dan tepat waktu.",

    solusi:
      "Mengembangkan Jaktim Crisis Center (JCC), sebuah sistem pelaporan keadaan darurat berbasis web yang mengintegrasikan proses pelaporan oleh masyarakat, pengelolaan dan verifikasi oleh administrator, serta penanganan laporan oleh instansi terkait. Sistem ini dilengkapi dengan notifikasi real-time untuk mendukung penyampaian informasi dan koordinasi antarinstansi, serta fitur pemantauan status laporan agar masyarakat dapat mengetahui perkembangan penanganan secara langsung. Melalui sistem ini, diharapkan proses pelaporan dan penanganan keadaan darurat dapat berjalan lebih cepat, terkoordinasi, dan transparan.",

    tantangan:
      "Mengintegrasikan Laravel Livewire dengan Laravel Reverb untuk mendukung komunikasi dan pembaruan data secara real-time. Selain itu, tantangan lainnya adalah mengembangkan sistem dengan tiga jenis pengguna, yaitu masyarakat, instansi, dan administrator, yang masing-masing memiliki hak akses serta tanggung jawab berbeda. Pengembangan fitur notifikasi real-time melalui email juga menjadi tantangan untuk memastikan informasi laporan dapat diterima oleh pihak terkait secara tepat waktu.",

    pembelajaran:
      "Memperoleh pengalaman dalam menggunakan Laravel Livewire untuk membangun antarmuka web yang interaktif, Laravel Reverb untuk mendukung komunikasi real-time, serta Alpine.js untuk menangani interaksi pada sisi frontend. Selain itu, mempelajari implementasi fitur pengiriman email menggunakan Laravel dan memahami penerapannya dalam sistem notifikasi aplikasi.",

    image: [
      "/image/dashboar_crisis.png",
      "/image/kirim_laporan_crisis.png",
      "/image/detail_laporan.png",
      "/image/Admin_meneruskan_laporan.png",
      "/image/Intansi_menindaklanjuti_laporan.png",
    ],

    teknologi: [
      "Laravel",
      "Livewire",
      "Tailwind CSS",
      "PHP",
      "MySQL",
      "Alpine.js",
      "Reverb",
    ],

    fitur: [
      {
        judul: "Formulir Pengiriman Laporan",
        deskripsi:
          "Memungkinkan masyarakat mengisi dan mengirimkan laporan kejadian darurat melalui formulir yang tersedia.",
      },
      {
        judul: "Detail dan Pemantauan Laporan",
        deskripsi:
          "Menampilkan informasi lengkap laporan yang telah dikirimkan serta memungkinkan masyarakat memantau perkembangan dan status penanganannya.",
      },
      {
        judul: "Penerusan Laporan oleh Admin",
        deskripsi:
          "Memungkinkan administrator memverifikasi dan meneruskan laporan kepada instansi terkait untuk ditindaklanjuti.",
      },
      {
        judul: "Tindak Lanjut Laporan oleh Instansi",
        deskripsi:
          "Memungkinkan instansi terkait menindaklanjuti laporan serta memperbarui informasi dan status penanganan kejadian.",
      },
    ],
  },

  {
    id: 3,
    judul: "Website Pernikahan",
    slug: "web-pernikahan",
    kategori: "Proyek Pribadi",
    time: "2025",
    peran: "Full-Stack Developer",

    deskripsi:
      "Website Pernikahan merupakan aplikasi berbasis web yang dikembangkan secara pribadi untuk membantu menyampaikan informasi acara pernikahan kakak saya kepada keluarga, kerabat, dan tamu undangan. Website ini dirancang dengan tampilan yang menarik dan responsif agar dapat diakses dengan nyaman melalui berbagai perangkat. Selain itu, website ini dilengkapi dengan elemen visual dan animasi untuk memberikan pengalaman yang lebih interaktif bagi pengunjung.",

    permasalahan:
      "Penyampaian informasi acara pernikahan kepada keluarga, kerabat, dan tamu undangan membutuhkan media yang praktis dan mudah diakses. Informasi seperti waktu, lokasi, serta detail acara perlu disajikan secara terstruktur agar dapat dipahami oleh para tamu. Oleh karena itu, diperlukan sebuah media digital yang dapat mengumpulkan informasi tersebut dalam satu halaman yang mudah dibagikan.",

    solusi:
      "Mengembangkan website pernikahan sebagai media informasi digital yang menyajikan berbagai informasi acara dalam satu tempat. Website dirancang dengan antarmuka yang menarik dan responsif, dilengkapi animasi serta navigasi yang memudahkan pengunjung dalam menemukan informasi mengenai acara pernikahan.",

    tantangan:
      "Mengembangkan tampilan website yang menarik secara visual, responsif pada berbagai ukuran layar, serta mampu menyajikan informasi acara secara terstruktur. Selain itu, diperlukan penyesuaian animasi dan elemen antarmuka agar dapat meningkatkan pengalaman pengguna tanpa mengurangi kenyamanan saat mengakses website.",

    pembelajaran:
      "Memperdalam pemahaman mengenai HTML, CSS, dan JavaScript dalam membangun aplikasi web. Selain itu, memperoleh pengalaman dalam mengatur tata letak responsif, menerapkan animasi, serta mengembangkan antarmuka yang interaktif dan mudah digunakan.",

    image: [
      "/image/dashboard_nikah.png",
      "/image/nikah-2.png",
      "/image/nikah-3.png",
    ],

    teknologi: ["Html", "CSS", "Javascript"],

    fitur: [
      {
        judul: "Confirmation of Attendance (RSVP)",
        deskripsi:
          "Memungkinkan tamu undangan mengonfirmasi kehadiran pada acara pernikahan melalui formulir yang tersedia.",
      },
      {
        judul: "Give Your Wishes to Us",
        deskripsi:
          "Memungkinkan tamu undangan menyampaikan ucapan dan doa untuk kedua mempelai melalui halaman ucapan yang tersedia.",
      },
    ],
    link: "https://irfansah99.github.io/Pernikahan/",
  },
];
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
  SiGin,
  SiPython,
  SiLivewire,
  SiAlpinedotjs,
  SiFastapi,
  SiReverbnation,
  SiHtml5,
  SiCss,
} from "react-icons/si";

export const LogoTeknologi = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Go: SiGo,
  MySQL: SiMysql,
  Redis: SiRedis,
  PHP: SiPhp,
  Laravel: SiLaravel,
  Javascript: SiJavascript,
  Meilisearch: SiMeilisearch,
  Github: SiGithub,
  Docker: SiDocker,
  Postman: SiPostman,
  Gin: SiGin,
  Python: SiPython,
  Livewire: SiLivewire,
  "Alpine.js": SiAlpinedotjs,
  FastApi: SiFastapi,
  Html : SiHtml5,
  CSS : SiCss
};

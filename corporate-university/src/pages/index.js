// [FIX] Menghapus "use client". Ini PENTING untuk memperbaiki masalah halaman statis
// karena Anda menggunakan Pages Router, bukan App Router.

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';
import { Image } from 'antd'; // Pastikan antd sudah terinstal
import Link from 'next/link';

// [REFACTOR] Mengimpor data dari file terpisah untuk kode yang lebih bersih
import {
  layananItems,
  potensiDesaItems,
  pengurusItems,
  galeriImages,
  artikelItems,
} from '../data/homeData'; // Sesuaikan path jika perlu

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <main>
        <section
          id="hero"
          className="relative w-full min-h-[500px] flex items-center text-white"
        >
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: 'url(/images/pantai.jpg)' }}
          ></div>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-3/5 text-center md:text-left">
              <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-md mb-6">
                Selamat Datang di <br /> Koperasi Desa Merah Putih <br /> Karang
                Taliwang
              </h1>
              <a
                href="#tentang"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector('#tentang')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/20 px-8 py-3 font-semibold text-white shadow-lg backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/30"
              >
                <ChevronDown className="h-5 w-5" />
                <span>Jelajahi Produk Kami</span>
              </a>
            </div>
            <div className="hidden md:flex md:w-2/5 justify-end items-end gap-4">
              <Image
                preview={false}
                src="/images/menekan-harga.png"
                alt="Menekan Harga"
                className="w-28 h-36 object-cover rounded-lg shadow-lg"
              />
              <Image
                preview={false}
                src="/images/pemerataan-ekonomi.png"
                alt="Pemerataan Ekonomi"
                className="w-28 h-44 object-cover rounded-lg shadow-lg"
              />
              <Image
                preview={false}
                src="/images/petaniHero.jpg"
                alt="Petani Sejahtera"
                className="w-28 h-52 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <div id="tentang" className="w-full bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Tentang Koperasi */}
            <section>
              <h2 className="text-2xl md:text-xl font-bold text-[#065366] mb-4">
                Tentang Koperasi Desa Merah Putih
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Koperasi Desa Merah Putih Karang Taliwang adalah Koperasi Desa
                yang dibentuk untuk menyukseskan progam Koperasi Desa/Kelurahan
                Merah Putih. Tujuannya adalah membangun desa, membangun negeri,
                mewujudkan pemerataan ekonomi dan keadilan sosial bagi seluruh
                rakyat Indonesia.
              </p>
              <Link
                href="/tentang-kami"
                className="inline-block bg-[#a0ba3b] text-white text-sm px-6 py-3 mt-4 rounded-md hover:bg-[#92ac2c] transition-transform hover:scale-105 font-semibold"
              >
                Selengkapnya Tentang Kami
              </Link>
            </section>

            {/* Potensi Unggulan */}
            <section id="potensi" className="scroll-mt-20 py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-xl font-bold text-[#065366] mb-8">
                  Potensi Unggulan Desa
                </h2>

                {/* Container Scrollable */}
                <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
                  {potensiDesaItems.map((item) => (
                    <div
                      key={item.title}
                      className="relative min-w-[240px] md:min-w-[280px] lg:min-w-[320px] h-[200px] rounded-lg overflow-hidden shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-xl snap-start flex-shrink-0"
                    >
                      {/* Gambar full */}
                      <img
                        src={item.img}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <h3 className="absolute bottom-3 left-3 text-white text-base font-semibold z-20">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <section id="pengurus" className="py-16 bg-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-xl font-bold text-center text-[#065366] mb-12">
              Struktur Pengurus Koperasi
            </h2>

            {/* Wrapper scroll horizontal di mobile, grid di desktop */}
            <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:snap-none pb-4">
              {pengurusItems.map((item) => (
                <div
                  key={item.name}
                  className="min-w-[200px] md:min-w-0 snap-start flex-shrink-0 text-center flex flex-col items-center"
                >
                  <Image
                    preview={false}
                    src={item.img}
                    alt={item.name}
                    className="w-36 h-36 object-cover rounded-full shadow-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-[#065366]">
                    {item.name}
                  </h3>
                  <p className="text-[#065366]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="layanan" className="py-16 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-xl font-bold text-center text-[#065366] mb-12">
              Unit Usaha Kami
            </h2>

            <div className="relative">
              <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:snap-none pb-4">
                {layananItems.map((item) => (
                  <div
                    key={item.no}
                    className="relative min-w-[240px] md:min-w-full h-[300px] rounded-lg overflow-hidden shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-2xl snap-start"
                  >
                    {/* Background image full cover */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    />

                    {/* Overlay hitam semi transparan */}
                    <div className="absolute inset-0 bg-black/40 z-10" />

                    {/* Konten teks */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                      <p className="text-sm text-lime-300 font-bold">
                        {item.no}
                      </p>
                      <h3 className="text-white text-xl font-semibold mt-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="galeri" className="py-16 bg-[#065366] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-xl font-bold text-center text-white mb-12">
              Galeri Kegiatan
            </h2>
            <Image.PreviewGroup>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {galeriImages.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={`Galeri ${idx + 1}`}
                    className="w-full h-40 object-cover rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer shadow-md"
                  />
                ))}
              </div>
            </Image.PreviewGroup>
          </div>
        </section>

        <section id="artikel" className="py-16 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-xl font-bold text-center text-[#065366] mb-12">
              Kabar Koperasi
            </h2>

            <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory">
              <div className="flex gap-4 w-max">
                {artikelItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="snap-start flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[25vw] lg:w-[22vw] xl:w-[20vw]"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                      <Image
                        preview={false}
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-base font-semibold text-gray-800 flex-grow">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#a0ba3b] mt-3">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Link
                href="/artikel"
                className="bg-[#a0ba3b] text-white text-sm px-8 py-3 rounded-md hover:bg-[#92ac2c] transition-transform hover:scale-105 font-semibold"
              >
                Lihat Semua Artikel
              </Link>
            </div>
          </div>
        </section>

        <section id="lokasi" className="py-16 bg-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl md:text-xl font-bold text-center text-[#004B59] mb-12">
              Kunjungi Kami
            </h2>
            <div
              className="relative w-full overflow-hidden rounded-lg shadow-xl"
              style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7890.392110696255!2d116.12232709135954!3d-8.577139465868912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc0ae51641725%3A0x244729539e7c7f92!2sKarang%20Taliwang%2C%20Kec.%20Cakranegara%2C%20Kota%20Mataram%2C%20Nusa%20Tenggara%20Bar.!5e0!3m2!1sid!2sid!4v1750238103413!5m2!1sid!2sid"
                className="absolute top-0 left-0 w-full h-full border-0"
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Koperasi"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

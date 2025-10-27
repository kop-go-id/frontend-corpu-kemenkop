import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full flex flex-col md:flex-row">

            {/* Kolom kiri: logo & info koperasi */}
            <div className="bg-[#EAF0F6] w-full md:w-[35%] px-6 py-10 flex flex-col justify-center">
                <div>
                    <img loading='lazy' src="/images/hut-ri/logo.webp" alt="Logo Kopdes Sukasari" className="h-12 mb-4" />
                </div>
            </div>

            {/* Kolom kanan: info kementerian + sosmed + copyright */}
            <div className="bg-[#065366] w-full md:w-[65%] text-white flex flex-col justify-between">

                {/* Info dan Sosial Media */}
                <div className="px-6 pt-10 pb-6">
                    <h2 className="font-semibold text-base mb-1">
                        Koperasi Desa/Kelurahan Merah Putih Karang Taliwang
                    </h2>
                    <p className="text-sm leading-relaxed mb-4">
                        Jl. H. R. Rasuna Said No.Kav. 3–4, RT.6/RW.7, Kuningan, Karet Kuningan, Kecamatan Setiabudi,<br />
                        Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12940
                    </p>
                    <div className="flex space-x-4 mt-2">
                        <Link href="https://www.facebook.com/kemenkopukm" target="_blank">
                            <img loading='lazy' src="/images/facebook.png" alt="Facebook" className="h-6" />
                        </Link>
                        <Link href="https://www.instagram.com/kemenkop/" target="_blank">
                            <img loading='lazy' src="/images/ig.png" alt="Instagram" className="h-6" />
                        </Link>
                        <Link href="https://twitter.com/kemenkop_" target="_blank">
                            <img loading='lazy' src="/images/x.png" alt="X" className="h-6" />
                        </Link>
                        <Link href="https://www.youtube.com/@KemenKopUKM" target="_blank">
                            <img loading='lazy' src="/images/yt.png" alt="YouTube" className="h-6" />
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="bg-[#A1B539] px-6 pb-3 text-sm py-3">
                    Dibuat oleh Kementerian Koperasi
                </div>
            </div>
        </footer>
    );
};

export default Footer;

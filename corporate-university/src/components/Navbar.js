"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Image } from "antd";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // State untuk dropdown, jika Anda ingin menambahkannya nanti
    // const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Menggunakan ambang batas 10px seperti pada kode referensi
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Tentang", href: "#tentang" },
        { label: "Layanan", href: "#layanan" },
        { label: "Galeri", href: "#galeri" },
        { label: "Artikel", href: "#artikel" },
    ];

    // Menentukan apakah navbar harus opak (tidak transparan)
    const isNavbarOpaque = scrolled; // Anda bisa menambahkan kondisi lain jika perlu, misal: || pathname !== '/'

    return (
        <header
            className={`fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${
                isNavbarOpaque
                    ? 'bg-white/75 backdrop-blur-xl border-b border-white/30 shadow-md'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src={isNavbarOpaque ? "/images/hut-ri/logo.webp" : "/images/logo-default.png"}
                        alt="Logo Kopdes"
                        width={200} // Ukuran bisa disesuaikan lagi
                        // height={50} // Sesuaikan height agar tidak terlalu besar
                        preview={false}
                        className="lg:w-[200px] md:w-[200px] w-[200px] h-auto" // Style responsif dari referensi
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`flex items-center text-xs transition-colors ${
                                isNavbarOpaque
                                    ? 'text-gray-900 hover:text-[#a0ba3b]'
                                    : 'text-white hover:text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    {/* Contoh Tombol Masuk & Daftar dari referensi */}
                    
                </nav>

                {/* Mobile Hamburger */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`transition-colors ${
                            isNavbarOpaque
                                ? 'text-gray-900 hover:text-[#a0ba3b]'
                                : 'text-white hover:text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
                        }`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 top-[4.5rem] z-40 bg-black/30 lg:hidden">
                    <div
                        className="absolute top-0 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out"
                    >
                        <div className="flex flex-col items-start text-left px-6 py-4 w-full">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="w-full font-semibold text-left py-2 text-md text-[#065366] hover:text-[#a0ba3b]"
                                >
                                    {item.label}
                                </a>
                            ))}
                            {/* Contoh Tombol Masuk di Mobile */}
                            <hr className="my-2 border-gray-200 w-full" />
                             <Link
                                href="/masuk"
                                className="w-full text-center mt-2 text-white bg-[#a0b73e] border border-[#a0ba3b] px-4 py-2 rounded-md hover:bg-[#859d18]"
                                onClick={() => setIsOpen(false)}
                            >
                                Masuk
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
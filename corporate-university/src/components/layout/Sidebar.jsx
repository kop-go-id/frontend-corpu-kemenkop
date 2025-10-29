"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { GraduationCap, BookOpen, Menu, X } from 'lucide-react';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = useMemo(
    () => [
      { label: 'Semua Kelas', href: '/user/courses', Icon: GraduationCap },
      { label: 'Pembelajaran Saya', href: '/user/enrolled', Icon: BookOpen },
    ],
    []
  );

  const isActive = (href) => {
    if (!pathname) return false;
    return pathname.startsWith(href);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-gray-100">
      {/* Top bar with burger on mobile/tablet */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between gap-3 px-4 py-3 bg-primary text-white">
        <div className="flex items-center gap-2">
          <Image
            src="/logos/corpu-light.svg"
            alt="Kemenkop Corporate University"
            width={120}
            height={32}
            priority
          />
        </div>
        <button
          aria-label="Open sidebar"
          className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div className="mx-auto flex h-[calc(100vh-56px)] lg:h-screen w-full overflow-hidden">
        {/* Desktop sidebar */}
        <aside className="hidden lg:flex lg:w-64 xl:w-72 p-3">
          <div className="flex h-[calc(100vh-24px)] w-full flex-col rounded-2xl bg-primary shadow-md">
            <div className="p-4">
              <Image
                src="/logos/corpu-light.svg"
                alt="Kemenkop Corporate University"
                width={180}
                height={48}
                priority
              />
            </div>
            <nav className="mt-2 flex-1 overflow-y-auto space-y-2 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/90 transition ${
                    isActive(item.href)
                      ? 'bg-white/10 text-white'
                      : 'hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <item.Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Drawer sidebar (mobile/tablet) */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-72 max-w-[85%] p-3">
              <div className="flex h-full flex-col rounded-l-2xl bg-primary shadow-xl">
                <div className="flex items-center justify-between p-4">
                  <Image
                    src="/logos/corpu-light.svg"
                    alt="Kemenkop Corporate University"
                    width={150}
                    height={40}
                  />
                  <button
                    aria-label="Close sidebar"
                    className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <nav className="mt-2 flex-1 overflow-y-auto space-y-2 px-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/90 transition ${
                        isActive(item.href)
                          ? 'bg-white/10 text-white'
                          : 'hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <item.Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto h-full p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Skeleton } from 'antd';
import { useAuth } from '@/hooks/auth';

const menuItems = [
  { key: 'about', href: '#about', label: 'Tentang' },
  { key: 'program', href: '#program', label: 'Program' },
  { key: 'contact', href: '#', label: 'Kontak Kami' },
];

const Navbar = () => {
  const { isAuthenticated, isLoading } = useAuth();
  return (
    <nav className="sticky top-0 z-50 bg-primary text-white py-5">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/corpu-light.svg"
            alt="Kemenkop Corporate University"
            width={180}
            height={50}
            priority
            className='h-auto select-none'
          />
        </Link>

        <div className="ml-auto hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm text-white/90 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          {isLoading ? (
            <Skeleton.Button
              active
              className="!w-28 !h-10 !rounded-md !bg-white/30"
            />
          ) : (
            <Link
              href={isAuthenticated ? '/user/courses' : '/login'}
              className="inline-flex"
            >
              <Button
                type="primary"
                className="!bg-secondary !border-0 !shadow-0 !text-white hover:!bg-[#f0b51b] hover:!border-[#f0b51b] !px-9 !py-5 !font-semibold"
              >
                {isAuthenticated ? 'Dashboard' : 'Masuk'}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
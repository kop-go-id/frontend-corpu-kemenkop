"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Skeleton, Drawer } from 'antd';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useAuth } from '@/hooks/auth';
import { handleHashClick } from '@/utils/helpers';

const menuItems = [
  { key: 'about', href: '#about', label: 'Tentang' },
  { key: 'program', href: '#program', label: 'Program' },
  { key: 'contact', href: '#', label: 'Kontak Kami' },
];

const Navbar = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Desktop Menu */}
        <div className="ml-auto hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={(e) => handleHashClick(e, item.href)}
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

        {/* Mobile Burger Menu Button */}
        <Button
          type="text"
          onClick={() => setIsMobileMenuOpen(true)}
          className="ml-auto !text-white md:hidden"
          icon={<MenuIcon className="h-6 w-6" />}
          aria-label="Open menu"
        />
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        placement="right"
        width={300}
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        className="md:hidden"
        classNames={{
          header: '!bg-primary !text-white'
        }}
        styles={{
          body: { padding: 0, background: '#1a4d8c' },
        }}
        closeIcon={<X className="h-6 w-6 text-white" />}
      >
        <div className="flex h-full flex-col bg-primary">
          <div className="flex flex-col gap-6 p-6">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  handleHashClick(e, item.href);
                  setIsMobileMenuOpen(false);
                }}
                className="text-base text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4">
              {isLoading ? (
                <Skeleton.Button
                  active
                  className="!w-full !h-10 !rounded-md !bg-white/30"
                />
              ) : (
                <Link
                  href={isAuthenticated ? '/user/courses' : '/login'}
                  className="inline-flex w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    type="primary"
                    className="!bg-secondary !border-0 !shadow-0 !text-white hover:!bg-[#f0b51b] hover:!border-[#f0b51b] !w-full !py-5 !font-semibold"
                  >
                    {isAuthenticated ? 'Dashboard' : 'Masuk'}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
'use client'

import React from 'react'
import Image from 'next/image'
import { handleHashClick } from '@/utils/helpers'

const Hero = () => {

  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url('/images/overlay/crown-primary.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 pb-20">
          <div className="text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Empowering People,
              <br />
              Transforming Cooperatives
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#d6eef2]">
              Pusat pembelajaran strategis bagi ASN, pegawai non-ASN, dan mitra ekosistem
              koperasi untuk mempercepat transformasi digital dan tata kelola koperasi
              modern.
            </p>
            <div className="mt-8">
              <a
                href="#learn-more"
                onClick={(e) => handleHashClick(e, '#learn-more')}
                className="inline-flex items-center rounded-md bg-[#F0B51A] px-6 py-3 font-semibold text-[#0a3e46] transition-colors hover:bg-[#e2a407]"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[540px]">
            <Image
              src="/images/landing-page/coder.svg"
              alt="Learning illustration"
              width={540}
              height={420}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
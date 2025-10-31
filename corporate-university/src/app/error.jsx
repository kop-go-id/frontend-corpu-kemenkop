"use client"

import React from 'react'
import Image from 'next/image'

export default function GlobalError({ error, reset }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-solitude">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10 -translate-y-10 text-center">
        <div className="mx-auto">
          <Image
            src="/images/internal-error/500.svg"
            alt="Server internal bermasalah"
            width={600}
            height={320}
            priority
            className="mx-auto h-auto w-full max-w-2xl"
          />
        </div>

        <h1 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-br from-primary to-alt-secondary bg-clip-text text-transparent">Waduh!</span>
          <span className="text-black/80"> Server internal bermasalah</span>
        </h1>
        <p className="mt-2 text-sm sm:text-base text-black">
          Terjadi kesalahan pada server kami. Silakan coba beberapa saat lagi.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset?.()}
            className="inline-flex items-center justify-center rounded-xl font-semibold bg-primary px-6 py-3 text-alt-white hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Coba Muat Ulang
          </button>
        </div>
      </div>
    </div>
  )
}



import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-solitude">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10 -translate-y-10 text-center">
        <div className="mx-auto">
          <Image
            src="/images/not-found/wrong-way.svg"
            alt="Halaman tidak ditemukan"
            width={1100}
            height={600}
            priority
            className="mx-auto h-auto w-full max-w-5xl"
          />
        </div>

        <h1 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          Waduh, Jalan Buntu
        </h1>
        <p className="mt-2 text-sm sm:text-base text-black">
          Sepertinya Anda tersesat. Halaman yang dicari tidak ditemukan di peta kami.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl font-semibold bg-primary px-6 py-3 text-alt-white hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Kembali Ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'antd'

const CTA = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:py-20 text-center">
        <div className="mx-auto w-full max-w-[520px]">
          <Image
            src="/images/landing-page/rocket.svg"
            alt="Rocket launch illustration"
            width={449}
            height={329}
            className="mx-auto h-auto w-full"
            priority
          />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-[#262626] sm:text-3xl lg:text-4xl">
          Tingkatkan kapasitas dan wawasan Anda melalui program pembelajaran unggulan kami
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-[#6b7280] sm:text-base">
          Pilih pelatihan yang sesuai dengan kebutuhan dan mulai perjalanan belajar Anda sekarang
        </p>

        <div className="mt-6">
          <Link href="/login">
            <Button type="primary" size="large" className='!bg-secondary !border-0 !shadow-none'>
              Mulai Belajar Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
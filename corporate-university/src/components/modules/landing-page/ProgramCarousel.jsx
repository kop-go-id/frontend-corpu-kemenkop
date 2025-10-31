'use client'

import { useMemo } from 'react'
import { Carousel } from '@/components/common'

const ProgramCarousel = () => {
    const slides = useMemo(
        () => [
            {
                id: 1,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                description: 'Program kepemimpinan digital untuk pengurus dan manajer koperasi.',
                // Using local placeholder asset; replace with real image later
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 2,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                description: 'Pengembangan kompetensi strategis dan literasi teknologi.',
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 3,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                description: 'Membekali talenta koperasi dengan keterampilan abad 21.',
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 4,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                description: 'Program kepemimpinan digital untuk pengurus dan manajer koperasi.',
                // Using local placeholder asset; replace with real image later
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 5,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                description: 'Pengembangan kompetensi strategis dan literasi teknologi.',
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 6,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                description: 'Membekali talenta koperasi dengan keterampilan abad 21.',
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 7,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                description: 'Program kepemimpinan digital untuk pengurus dan manajer koperasi.',
                // Using local placeholder asset; replace with real image later
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 8,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                description: 'Pengembangan kompetensi strategis dan literasi teknologi.',
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 9,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                description: 'Membekali talenta koperasi dengan keterampilan abad 21.',
                src: '/images/landing-page/coder.svg',
            },
        ],
        []
    )

    // Program pages pass data only; carousel UI/logic is handled by shared component

    return (
        <section className="bg-primary">
            <div className="mx-auto max-w-7xl px-6 py-14">
                <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
                    <h2 className="text-xl font-semibold text-white text-center md:text-left">Program Unggulan</h2>

                    {/* Slider */}
                    <Carousel slides={slides} />
                </div>
            </div>
        </section>
    )
}

export default ProgramCarousel
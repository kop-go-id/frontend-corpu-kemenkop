'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'

const ProgramCarousel = () => {
    const slides = useMemo(
        () => [
            {
                id: 1,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                // Using local placeholder asset; replace with real image later
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 2,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 3,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 4,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                // Using local placeholder asset; replace with real image later
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 5,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 6,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 7,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                // Using local placeholder asset; replace with real image later
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 8,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                src: '/images/landing-page/coder.svg',
            },
            {
                id: 9,
                title: 'Digital Cooperative Leadership Program (DCLP)',
                src: '/images/landing-page/coder.svg',
            },
        ],
        []
    )

    const [activeIndex, setActiveIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(1) // default to 1 to match mobile first
    const viewportRef = useRef(null)
    const isPointerDownRef = useRef(false)
    const startXRef = useRef(0)
    const [dragDeltaPx, setDragDeltaPx] = useState(0)

    const goTo = (index) => {
        const max = Math.max(0, pages.length - 1)
        setActiveIndex(Math.min(Math.max(index, 0), max))
    }
    const goPrev = () => goTo(activeIndex - 1)
    const goNext = () => goTo(activeIndex + 1)

    // Match Tailwind's md breakpoint (min-width: 768px)
    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)')
        const apply = () => setItemsPerPage(mq.matches ? 3 : 1)
        apply()
        mq.addEventListener('change', apply)
        return () => mq.removeEventListener('change', apply)
    }, [])

    const pages = useMemo(() => {
        const totalPages = Math.ceil(slides.length / itemsPerPage)
        return Array.from({ length: totalPages }, (_, pageIndex) =>
            slides.slice(
                pageIndex * itemsPerPage,
                pageIndex * itemsPerPage + itemsPerPage
            )
        )
    }, [slides, itemsPerPage])

    // Keep activeIndex within range when itemsPerPage changes
    useEffect(() => {
        if (activeIndex > pages.length - 1) {
            setActiveIndex(Math.max(0, pages.length - 1))
        }
    }, [pages.length, activeIndex])

    // Pointer/drag handlers
    const onPointerDown = (e) => {
        isPointerDownRef.current = true
        startXRef.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0
        setDragDeltaPx(0)
    }

    const onPointerMove = (e) => {
        if (!isPointerDownRef.current) return
        const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0
        setDragDeltaPx(clientX - startXRef.current)
    }

    const onPointerUp = () => {
        if (!isPointerDownRef.current) return
        const width = viewportRef.current?.clientWidth ?? 1
        const threshold = Math.max(50, width * 0.15)
        if (dragDeltaPx <= -threshold) {
            goNext()
        } else if (dragDeltaPx >= threshold) {
            goPrev()
        }
        isPointerDownRef.current = false
        setDragDeltaPx(0)
    }

    return (
        <section className="bg-primary">
            <div className="mx-auto max-w-7xl px-6 py-14">
                <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
                    <h2 className="text-xl font-semibold text-white">Program Unggulan</h2>

                    {/* Slider */}
                    <div className="relative">
                        <div
                            ref={viewportRef}
                            className="overflow-hidden rounded-2xl select-none"
                            onMouseDown={onPointerDown}
                            onMouseMove={onPointerMove}
                            onMouseUp={onPointerUp}
                            onMouseLeave={onPointerUp}
                            onTouchStart={onPointerDown}
                            onTouchMove={onPointerMove}
                            onTouchEnd={onPointerUp}
                        >
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{
                                    transform: `translateX(calc(-${activeIndex * 100}% + ${dragDeltaPx}px))`,
                                }}
                            >
                                {pages.map((page, pageIdx) => (
                                    <div key={pageIdx} className="min-w-full px-1 sm:px-2">
                                        <div
                                            className="grid gap-4"
                                            style={{
                                                gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
                                            }}
                                        >
                                            {page.map((slide) => (
                                                <div key={slide.id} className="rounded-2xl bg-white shadow/10">
                                                    {/* Image area */}
                                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-gray-200">
                                                        <Image
                                                            src={slide.src}
                                                            alt={slide.title}
                                                            fill
                                                            className="object-cover pointer-events-none select-none"
                                                            draggable={false}
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                            priority={slide.id === 1}
                                                        />
                                                    </div>
                                                    {/* Caption */}
                                                    <div className="p-5">
                                                        <p className="text-sm font-semibold text-gray-700">
                                                            {slide.title}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Arrows */}
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={goPrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-700 shadow hover:bg-white"
                        >
                            <span className="block h-3 w-3 rotate-45 border-b-2 border-l-2 border-current" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={goNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-700 shadow hover:bg-white"
                        >
                            <span className="block h-3 w-3 -rotate-45 border-b-2 border-r-2 border-current" />
                        </button>

                        {/* Dots */}
                        <div className="mt-5 flex items-center justify-center gap-3">
                            {pages.map((_, idx) => {
                                const isActive = idx === activeIndex
                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        aria-label={`Go to slide ${idx + 1}`}
                                        onClick={() => setActiveIndex(idx)}
                                        className={
                                            'h-2.5 w-2.5 rounded-full transition-colors ' +
                                            (isActive ? 'bg-secondary' : 'bg-white')
                                        }
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgramCarousel
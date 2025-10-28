import React from 'react'
import {
    GraduationCap,
    PlaySquare,
    Lightbulb,
    Route,
    BadgeCheck,
} from 'lucide-react'

const items = [
    {
        title: 'Peningkatan Kompetensi',
        desc:
            'Meningkatkan kompetensi ASN dan mitra Kemenkop dalam bidang kebijakan, manajemen, dan digitalisasi koperasi.',
        Icon: GraduationCap,
    },
    {
        title: 'Sistem Pembelajaran Terpadu',
        desc:
            'Menyediakan sistem pembelajaran terpadu (blended learning) berbasis learning management system (LMS) dan microcredential.',
        Icon: PlaySquare,
    },
    {
        title: 'Pusat Pengetahuan',
        desc:
            'Menjadi pusat pengembangan pengetahuan dan inovasi kebijakan koperasi nasional.',
        Icon: Lightbulb,
    },
    {
        title: 'Sinkronisasi Roadmap',
        desc:
            'Menyinkronkan learning roadmap dengan kebutuhan organisasi dan arah RPJMN 2025–2045.',
        Icon: Route,
    },
    {
        title: 'Sertifikasi Internal',
        desc:
            'Menyediakan sertifikasi internal (badge/credit-based) yang diakui lintas unit dan lembaga mitra.',
        Icon: BadgeCheck,
    },
]

const Card = ({ Icon, title, desc }) => {
    return (
        <div className="rounded-2xl bg-gray-100 p-6 shadow-sm h-full">
            <div className="flex flex-col items-center text-center gap-4">
                <div className="rounded-full bg-gray-100 p-3 text-gray-700">
                    <Icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <section id="about" className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-10">
                <h2 className="text-xl font-semibold text-primary">Tentang Kemenkop CorpU</h2>

                {/* Centered flexible layout: wraps and centers the last row */}
                <div className="mt-6 w-full flex flex-wrap justify-center gap-6">
                    {items.map((item) => (
                        <div key={item.title} className="w-full sm:w-1/3 lg:w-1/4 h-auto">
                            <Card {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
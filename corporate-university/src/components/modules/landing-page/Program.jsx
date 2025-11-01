'use client'

import { useState } from 'react'

const tabs = [
  { key: 'asn', label: 'Level ASN Internal' },
  { key: 'partner', label: 'Level Mitra Eksternal' },
  { key: 'public', label: 'Level Publik dan Akademik' },
]

const asnTracks = [
  {
    title: 'Kepemimpinan',
    items: ['Manajerial', 'Reformasi Birokrasi', 'SPBE'],
  },
  {
    title: 'Fungsional',
    items: ['Jabatan fungsional koperasi', 'Pengawas', 'Penyuluh'],
  },
  {
    title: 'Digitalisasi',
    items: ['Literasi digital', 'Data governance', 'SIMKOPDES', 'KDMP Mobile'],
  },
]

const partnerTracks = [
  {
    title: 'Akademi Asisten Bisnis (BA/KDMMP)',
    items: [],
  },
  {
    title: 'Pengembangan Talenta Koperasi Indonesia',
    items: [],
  },
  {
    title: 'Akademi OneCoop',
    items: ['Pembelajaran integratif dengan BUMN, DJP, AHU, dan Kemendesa'],
  },
]

const publicTracks = [
  {
    title: 'Kelas Microcredential',
    items: [],
  },
  {
    title: 'Pusat Riset',
    items: ['Riset kebijakan koperasi dan digitalisasi daerah'],
  },
]

const tracksConfig = {
  asn: { tracks: asnTracks, cols: 'md:grid-cols-3' },
  partner: { tracks: partnerTracks, cols: 'md:grid-cols-3' },
  public: { tracks: publicTracks, cols: 'md:grid-cols-2' },
}

const Program = () => {
  const [activeKey, setActiveKey] = useState('asn')
  const { tracks, cols } = tracksConfig[activeKey] || tracksConfig.asn

  return (
    <section id="program" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-xl font-semibold text-primary">Struktur Program Pembelajaran</h2>

        {/* Tabs header */}
        <div className="mt-6 flex gap-4">
          {tabs.map((t) => {
            const isActive = activeKey === t.key
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveKey(t.key)}
                className={
                  'rounded-full px-5 py-3 text-xs lg:text-sm font-semibold transition-colors ' +
                  (isActive
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                }
              >
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="mt-4 rounded-xl border border-secondary p-6">
          <div className={`grid gap-8 ${cols}`}>
            {tracks.map((track) => (
              <div key={track.title}>
                <h3 className="text-lg font-semibold text-secondary">{track.title}</h3>
                {track.items.length > 0 && (
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {track.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Program
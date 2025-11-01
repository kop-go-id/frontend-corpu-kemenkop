'use client'

import { useState } from 'react'

const tabs = [
  { key: 'asn', label: 'Level ASN Internal' },
  { key: 'mitra', label: 'Level Mitra Eksternal' },
  { key: 'publik', label: 'Level Publik dan Akademik' },
]

const asnTracks = [
  {
    title: 'Leadership Track',
    items: ['Manajerial', 'Reformasi Birokrasi', 'SPBE'],
  },
  {
    title: 'Functional Track',
    items: ['Jabatan fungsional koperasi', 'Pengawas', 'Penyuluh'],
  },
  {
    title: 'Digital Track',
    items: ['Literasi digital', 'Data governance', 'SIMKOPDES', 'KDMP Mobile'],
  },
]

const Program = () => {
  const [activeKey, setActiveKey] = useState('asn')

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
          {activeKey === 'asn' && (
            <div className="grid gap-8 md:grid-cols-3">
              {asnTracks.map((track) => (
                <div key={track.title}>
                  <h3 className="text-lg font-semibold text-secondary">{track.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {track.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeKey !== 'asn' && (
            <div className="py-6 text-sm text-gray-500">Konten akan segera tersedia.</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Program
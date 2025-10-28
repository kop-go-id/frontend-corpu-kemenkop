import React from 'react'

const stats = [
  { value: '10.000+', label: 'Peserta Terdaftar' },
  { value: '100', label: 'Pelatihan Tersedia' },
  { value: '5.000+', label: 'Mengikuti Pelatihan' },
  { value: '5.000+', label: 'Peserta Tersertifikasi' },
]

const Statistic = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <dl className="grid grid-cols-2 gap-x-10 gap-y-10 text-center sm:gap-x-16 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <dt className="text-3xl font-extrabold bg-gradient-to-b from-sky-900 to-cyan-500 bg-clip-text text-transparent">{item.value}</dt>
              <dd className="mt-2 text-sm text-gray-600">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Statistic
'use client'

import React from 'react'
import { Statistic, Carousel } from '@/components/common'
import { DiscussionItem } from '@/components/modules/discussion'
import classStatistics from '@/datas/dummies/statistics'
import { discussionThreads } from '@/datas/dummies/discussion'
import activityNews from '@/datas/dummies/activityNews'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const OverviewPage = () => {
  // Get the latest discussion (first one in the array)
  const latestDiscussion = discussionThreads[2] // ROSA SALSA SAIDA based on image

  return (
    <div className="space-y-8 pb-8">
      {/* Ringkasan Kelas Section */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Ringkasan Kelas</h2>
        <Statistic data={classStatistics} />
      </section>

      {/* Diskusi Terbaru Section */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Diskusi Terbaru</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <DiscussionItem thread={latestDiscussion} />
          
          {/* View Discussion Link */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/user/discussion"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium text-sm"
            >
              Lihat Diskusi
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Berita Kegiatan Section */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Berita Kegiatan</h2>
        <Carousel slides={activityNews} />
      </section>
    </div>
  )
}

export default OverviewPage
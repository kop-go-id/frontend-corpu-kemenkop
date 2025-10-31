import React from 'react'
import { LearningHistoryTable } from '@/components/modules/learning-history'
import { learningHistoryData } from '@/datas/dummies/learningHistory'

const LearningHistoryPage = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-2xl">
      <LearningHistoryTable data={learningHistoryData} />
    </div>
  )
}

export default LearningHistoryPage
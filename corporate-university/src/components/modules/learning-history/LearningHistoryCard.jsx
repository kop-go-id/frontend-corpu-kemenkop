import React from 'react'
import { Card, Typography } from 'antd'
import Link from 'next/link'

const { Text } = Typography

const LearningHistoryCard = ({ item, formatDate }) => {
  return (
    <Card className="!rounded-xl shadow-sm">
      <div className="space-y-2">
        <div>
          <Text className="text-gray-500 text-xs block mb-1">Aktivitas</Text>
          <Link 
            href={item.activityUrl}
            className="text-[#065366] hover:underline font-medium text-sm"
          >
            {item.activity}
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div>
            <Text className="text-gray-500 text-xs block">Kategori</Text>
            <Text className="text-sm">{item.category}</Text>
          </div>
          
          <div>
            <Text className="text-gray-500 text-xs block">Tipe</Text>
            <Text className="text-sm">{item.type}</Text>
          </div>
          
          <div>
            <Text className="text-gray-500 text-xs block">Mulai pada</Text>
            <Text className="text-sm">{formatDate(item.startedAt)}</Text>
          </div>
          
          <div>
            <Text className="text-gray-500 text-xs block">Selesai pada</Text>
            <Text className="text-sm">{formatDate(item.completedAt)}</Text>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default LearningHistoryCard


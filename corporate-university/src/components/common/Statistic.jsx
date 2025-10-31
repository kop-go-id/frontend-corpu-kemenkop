import React from 'react'
import * as LucideIcons from 'lucide-react'

const iconMap = {
  BookOpen: LucideIcons.BookOpen,
  CheckCircle: LucideIcons.CheckCircle,
  XCircle: LucideIcons.XCircle,
  Award: LucideIcons.Award,
}

const Statistic = ({ data = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-x-auto w-max max-w-full">
      <div className="flex gap-10 min-w-fit">
        {data.map((stat) => {
          const IconComponent = iconMap[stat.icon] || LucideIcons.BookOpen
          return (
            <div key={stat.id} className="flex items-center gap-4 flex-shrink-0">
              <IconComponent className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-primary">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Statistic


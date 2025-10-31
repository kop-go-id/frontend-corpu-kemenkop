'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { Table, Input, Typography, Card, Button } from 'antd'
import { Search, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/id'
import { Pagination } from '@/components/common'
import LearningHistoryCard from './LearningHistoryCard'

dayjs.extend(relativeTime)
dayjs.locale('id')

const { Title, Text } = Typography
const ITEMS_PER_PAGE = 10

const LearningHistoryTable = ({ data = [] }) => {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredData = useMemo(() => {
    if (!searchText.trim()) return data
    
    const searchLower = searchText.toLowerCase()
    return data.filter(item => 
      item.activity.toLowerCase().includes(searchLower) ||
      item.category.toLowerCase().includes(searchLower) ||
      item.type.toLowerCase().includes(searchLower)
    )
  }, [data, searchText])

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredData, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchText])

  const formatRelativeDate = (dateString) => dayjs(dateString).fromNow()

  const columns = [
    {
      title: 'Aktivitas',
      dataIndex: 'activity',
      key: 'activity',
      render: (text, record) => (
        <Link 
          href={record.activityUrl} 
          className="text-[#065366] hover:underline font-medium"
        >
          {text}
        </Link>
      ),
    },
    {
      title: 'Kategori',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Tipe',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Mulai pada',
      dataIndex: 'startedAt',
      key: 'startedAt',
      render: formatRelativeDate,
    },
    {
      title: 'Selesai pada',
      dataIndex: 'completedAt',
      key: 'completedAt',
      render: formatRelativeDate,
    },
  ]

  return (
    <div className="w-full">
      <div className="mb-4">
        <Button
          type="text"
          icon={<ArrowLeft size={20} />}
          onClick={() => router.back()}
          className="!p-0 !h-auto hover:!text-[#065366]"
        >
          Kembali
        </Button>
      </div>

      <div className="mb-6">
        <Title level={2} className="!text-[#065366] !mb-2">
          Riwayat Pembelajaran
        </Title>
        <Text className="!text-gray-500 block mb-4">
          Lacak aktivitas belajarmu serta riwayat dan kembali kempelajari kursus
        </Text>
        
        <div className="max-w-md">
          <Input
            size="large"
            placeholder="Cari Kelas"
            prefix={<Search size={20} className="text-gray-400" />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="!rounded-lg"
          />
        </div>
      </div>

      <div className="hidden md:block">
        <Table
          columns={columns}
          dataSource={paginatedData}
          rowKey="id"
          pagination={false}
          className="bg-white rounded-xl shadow-sm"
        />
        
        {filteredData.length > ITEMS_PER_PAGE && (
          <div className="mt-6">
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={ITEMS_PER_PAGE}
              onChange={setCurrentPage}
            />
          </div>
        )}
      </div>

      <div className="block md:hidden">
        <div className="space-y-3">
          {paginatedData.length === 0 ? (
            <Card className="text-center py-8">
              <Text className="text-gray-400">Tidak ada data ditemukan</Text>
            </Card>
          ) : (
            paginatedData.map((item) => (
              <LearningHistoryCard 
                key={item.id} 
                item={item} 
                formatDate={formatRelativeDate}
              />
            ))
          )}
        </div>
        
        {filteredData.length > ITEMS_PER_PAGE && (
          <div className="mt-6">
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={ITEMS_PER_PAGE}
              onChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default LearningHistoryTable

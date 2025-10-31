'use client'

import React from 'react'
import { List, Button, Divider } from 'antd'
import { Plus } from 'lucide-react'
import { DiscussionItem } from '@/components/modules/discussion'
import { discussionThreads } from '@/datas/dummies/discussion'
import { useRouter } from 'next/navigation'

const DiscussionPage = () => {
  const router = useRouter()

  const handleCreate = () => {
    router.push(`/user/discussion/new`)
  }

  const handleReply = (thread) => {
    alert(`Reply to: ${thread.authorName}`)
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-2xl">
      <div className="flex items-center justify-between">
        <Button
          type="primary"
          size="middle"
          onClick={handleCreate}
          icon={<Plus size={16} />}
          className="!bg-secondary !border-secondary hover:!bg-secondary hover:!border-secondary !text-white !font-semibold !border-0 !shadow-none !rounded-lg !px-6 !py-5"
        >
          Diskusi Baru
        </Button>
      </div>

      <Divider className="!my-4" />

      <List
        itemLayout="vertical"
        dataSource={discussionThreads}
        renderItem={(item) => (
          <List.Item className="!px-0">
            <DiscussionItem thread={item} onReply={handleReply} />
          </List.Item>
        )}
      />
    </div>
  )
}

export default DiscussionPage

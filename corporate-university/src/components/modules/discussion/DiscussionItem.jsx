import React from 'react'
import { Avatar, Tag, Typography, Space, Button } from 'antd'
import { Reply } from 'lucide-react'

const getInitials = (name) => {
  if (!name) return '?'
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

const formatDate = (iso) => {
  try {
    const date = new Date(iso)
    return date.toLocaleString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return iso
  }
}

const roleColorByTag = (role) => {
  if (role?.toLowerCase() === 'admin') return '#065366' // primary
  return '#E5A80E' // secondary
}

const DiscussionItem = ({ thread, onReply }) => {
  return (
    <div className="w-full">
      <div className="flex items-start gap-3">
        <Avatar
          size={40}
          className="!bg-primary !text-white select-none"
        >
          {getInitials(thread.authorName)}
        </Avatar>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <Typography.Text className="!font-semibold !text-alt-black">
              {thread.authorName}
            </Typography.Text>
            <span className="text-alt-black/50">•</span>
            <Tag
              color={roleColorByTag(thread.role)}
              className="!border-none !text-white"
            >
              {thread.role}
            </Tag>
          </div>

          <Typography.Text type="secondary" className="!text-xs">
            {formatDate(thread.postedAt)}
          </Typography.Text>

          <div className="mt-2">
            <Typography.Paragraph className="!m-0 !text-alt-black !leading-relaxed">
              {thread.content}
            </Typography.Paragraph>
          </div>

          <Space size={12} className="mt-2">
            <Button
              type="text"
              onClick={() => onReply?.(thread)}
              className="!text-primary hover:!text-primary"
              icon={<Reply size={16} />}
            >
              Reply
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default DiscussionItem



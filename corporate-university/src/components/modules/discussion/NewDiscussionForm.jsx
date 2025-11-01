'use client'

import React, { useState } from 'react'
import { Input, Typography, message } from 'antd'
import { RichTextEditor } from '@/components/common'
import { Button } from '@/components/common'
import { useRouter } from 'next/navigation'

const { Title, Text } = Typography

const NewDiscussionForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    recipient: '',
    title: '',
    content: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.recipient.trim()) {
      message.error('Mohon isi kolom "Kepada"')
      return
    }

    if (!formData.title.trim()) {
      message.error('Mohon isi judul diskusi')
      return
    }

    if (!formData.content.trim() || formData.content === '<p><br></p>') {
      message.error('Mohon isi konten diskusi')
      return
    }

    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      message.success('Diskusi berhasil dibuat!')
      router.push('/user/discussion')
    } catch (error) {
      message.error('Gagal membuat diskusi. Silakan coba lagi.')
      console.error('Error creating discussion:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full h-full  min-h-screen">
      <div className="mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8">
          <Title level={3} className="!text-[#065366] !mb-4 !text-xl sm:!text-2xl">
            Buat Diskusi Baru
          </Title>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                Publik
              </span>
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Kepada :
              </label>
              <Input
                size="large"
                placeholder="Tulis judul disini..."
                value={formData.recipient}
                onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
                className="!rounded-lg"
              />
            </div>

            <div>
              <Input
                size="large"
                placeholder="Tulis pendapatmu di sini..."
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="!rounded-lg"
              />
            </div>

            <div>
              <RichTextEditor
                value={formData.content}
                onChange={(value) => setFormData({ ...formData, content: value })}
                placeholder="Tulis konten diskusi di sini..."
                minHeight="200px"
              />
            </div>

            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="!w-full sm:!w-auto !min-w-[120px]"
              >
                {loading ? 'Mengirim...' : 'Kirim'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewDiscussionForm


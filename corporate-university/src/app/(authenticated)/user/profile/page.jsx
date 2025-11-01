'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Avatar } from 'antd';
import { ArrowLeftOutlined, EditOutlined, UserOutlined } from '@ant-design/icons';
import { message } from 'antd';

const UserProfilePage = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Initial values from image
  const initialValues = {
    fullName: 'Nuansa Suasana',
    nip: '123456789',
    email: 'nuansa@example.com',
    phone: '0812341234',
    password: '********',
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      message.success('Profil berhasil diperbarui!');
    } catch (error) {
      message.error('Gagal memperbarui profil. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = () => {
    router.push('/user/profile/reset-password');
  };

  return (
    <div className="min-h-screen bg-solitude">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:py-8">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors mb-6 group border-0 outline-none bg-transparent p-0"
        >
          <ArrowLeftOutlined className="text-base group-hover:translate-x-[-2px] transition-transform" />
          <span className="text-sm font-medium">Kembali</span>
        </button>

        {/* Title */}
        <h1 className="text-3xl font-bold text-primary mb-8">Profil Saya</h1>

        {/* Profile Content */}
        <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-start">
            {/* Profile Picture Section */}
            <div className="flex-shrink-0">
              <div className="relative inline-block">
                <Avatar
                  size={120}
                  icon={<UserOutlined />}
                  className="!bg-[#a0b73e] !text-white"
                  style={{
                    fontSize: '48px',
                  }}
                />
                <button
                  type="button"
                  className="absolute -bottom-1 -right-1 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow border-2 border-gray-100"
                  onClick={() => message.info('Fitur ubah foto profil akan segera tersedia')}
                >
                  <EditOutlined className="!text-gray-600 !text-sm" />
                </button>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 w-full">
              <Form
                form={form}
                layout="vertical"
                initialValues={initialValues}
                onFinish={onFinish}
                className="w-full"
                size="large"
              >
                <Form.Item
                  label={<span className="!text-gray-700 !font-medium">Nama Lengkap</span>}
                  name="fullName"
                  rules={[
                    { required: true, message: 'Nama lengkap wajib diisi!' }
                  ]}
                >
                  <Input 
                    className="!h-11 !rounded-lg"
                    placeholder="Masukkan nama lengkap"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="!text-gray-700 !font-medium">Nomor Induk Pegawai (NIP)</span>}
                  name="nip"
                  rules={[
                    { required: true, message: 'NIP wajib diisi!' }
                  ]}
                >
                  <Input 
                    className="!h-11 !rounded-lg"
                    placeholder="Masukkan NIP"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="!text-gray-700 !font-medium">Email</span>}
                  name="email"
                  rules={[
                    { required: true, message: 'Email wajib diisi!' },
                    { type: 'email', message: 'Format email tidak valid!' }
                  ]}
                >
                  <Input 
                    className="!h-11 !rounded-lg"
                    placeholder="Masukkan email"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="!text-gray-700 !font-medium">No. HP</span>}
                  name="phone"
                  rules={[
                    { required: true, message: 'Nomor HP wajib diisi!' }
                  ]}
                >
                  <Input 
                    className="!h-11 !rounded-lg"
                    placeholder="Masukkan nomor HP"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="!text-gray-700 !font-medium">Kata Sandi</span>}
                  name="password"
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <Input 
                      value="********"
                      disabled
                      className="!h-11 !rounded-lg !flex-1 !min-w-[200px]"
                    />
                    <button
                      type="button"
                      onClick={handleChangePassword}
                      className="!text-secondary hover:!text-[#d47800] !font-medium !text-sm !transition-colors !whitespace-nowrap"
                    >
                      Ubah Kata Sandi
                    </button>
                  </div>
                </Form.Item>

                <Form.Item className="!mb-0 !mt-8">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    className="!bg-secondary hover:!bg-[#d47800] !border-0 !rounded-lg !h-12 !px-8 !text-white !font-semibold !text-base !w-full lg:!w-auto !shadow-none"
                  >
                    Simpan Perubahan
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
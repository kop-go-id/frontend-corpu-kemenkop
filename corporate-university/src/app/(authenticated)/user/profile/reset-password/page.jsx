'use client';

import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useRouter } from 'next/navigation';
import { ArrowLeftOutlined } from '@ant-design/icons';

const UserProfilePasswordResetPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            message.success('Tautan reset kata sandi telah dikirim ke email Anda!');
            form.resetFields();
        } catch (error) {
            message.error('Gagal mengirim tautan. Silakan coba lagi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-solitude flex items-center justify-center p-4">
            <div className="w-full max-w-5xl">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors mb-6 group border-0 outline-none bg-transparent p-0"
                >
                    <ArrowLeftOutlined className="text-base group-hover:translate-x-[-2px] transition-transform" />
                    <span className="text-sm font-medium">Kembali</span>
                </button>
                {/* White Card */}
                <div className="bg-white rounded-2xl p-8 lg:p-10">
                    {/* Heading */}
                    <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                        Ingin Ubah Kata Sandi?
                    </h1>

                    {/* Instructional Text */}
                    <p className="text-gray-600 text-sm lg:text-base mb-8 leading-relaxed">
                        Masukkan alamat email yang terdaftar. Kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda.
                    </p>

                    {/* Form */}
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                        size="large"
                    >
                        <Form.Item
                            label={<span className="!text-gray-700 !font-medium">Email</span>}
                            name="email"
                            rules={[
                                { required: true, message: 'Email wajib diisi!' },
                                { type: 'email', message: 'Format email tidak valid!' }
                            ]}
                            initialValue="nuansa@example.com"
                        >
                            <Input
                                className="!h-11 !rounded-lg"
                                placeholder="Masukkan alamat email"
                                type="email"
                            />
                        </Form.Item>

                        <Form.Item className="!mb-0 !mt-8">
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                block
                                className="!bg-secondary hover:!bg-[#d47800] !border-0 !rounded-lg !h-12 !text-white !font-semibold !text-base !shadow-none"
                            >
                                Kirim Tautan ke Email
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePasswordResetPage;
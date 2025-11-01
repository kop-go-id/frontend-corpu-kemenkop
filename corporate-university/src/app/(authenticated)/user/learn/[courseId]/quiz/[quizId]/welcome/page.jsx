"use client"
import React from 'react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { Button } from 'antd'
import { ArrowLeft } from 'lucide-react'

const LearningQuizWelcomePage = () => {
    const router = useRouter()
    const { courseId } = useParams()
    const { quizId } = useParams()

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 flex items-center">
                <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className='space-y-8 md:-translate-y-12'>
                        <Button onClick={() => router.back()} className="!px-4 !py-2 !rounded-xl !text-primary hover:!bg-primary/10 !transition-all !duration-300 !border-0">
                            <ArrowLeft size={18} />
                            Kembali
                        </Button>
                        <div className="flex flex-col justify-center md:justify-start">
                            <Image
                                src="/images/pretest/pretest-welcome.svg"
                                alt="Pretest Welcome Illustration"
                                width={538}
                                height={300}
                                priority
                            />
                        </div>
                    </div>
                    <div className="md:pl-6">
                        <h2 className="text-lg md:text-xl font-semibold tracking-wider text-primary">
                            Kuis Modul 3 Kebijakan dan Standar Pengelolaan Data
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 max-w-md">
                            Selesaikan kuis berikut untuk menilai sejauh mana pemahaman Anda terhadap materi yang telah dipelajari.
                        </p>

                        <Button
                            onClick={() => router.push(`/user/learn/${courseId}/quiz/${quizId}`)}
                            className="!mt-6 !bg-secondary !rounded-lg !border-0 !shadow-none !text-white !px-8 !py-5 !font-semibold"
                        >
                            Lanjutkan
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearningQuizWelcomePage
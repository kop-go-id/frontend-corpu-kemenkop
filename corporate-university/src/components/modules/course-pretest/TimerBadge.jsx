'use client';

import { endPretest } from '@/lib/coursePretestService';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function TimerBadge({ initialTime = 0, storageConfig }) {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const router = useRouter()

    const finishAssessment = async () => {
        try {
            const res = await endPretest({
                pretest_id: storageConfig.getPretestId(),
                pretest_respondent_id: storageConfig.getRespondentId(),
                time_remaining: 0,
                token: storageConfig.getToken(),
                expires_at: storageConfig.getTokenExpires(),
            })
            router.push(storageConfig.getFinishUrl(res.submission.assessment_submission_id))
        } catch (err) {
            console.error(err)
            message.error('Terjadi kesalahan');
        }
    }

    useEffect(() => {
        if (timeLeft <= 0) {
            finishAssessment()
            return
        };

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
            localStorage.setItem(storageConfig.getTimeLeftKey(), JSON.stringify(timeLeft - 1));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="inline-block px-3 py-1 sm:px-6 sm:py-2 bg-white border border-alt-red rounded-lg shadow-sm w-[130px] sm:w-[190px]">
            <span className="text-alt-red text-xs sm:text-base">
                <span>
                    {`Sisa Waktu: `}
                </span>
                <span>
                    {formatTime(timeLeft)}
                </span>
            </span>
        </div>
    );
}

'use client';

import { Card, Button, Modal } from 'antd';
import { List } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function QuestionNavigation({
    totalQuestions,
    answeredQuestions = [],
    questions = [],
    currentQuestion,
    flaggedQuestions = [],
    onQuestionClick
}) {
    const getQuestionStatus = (num) => {
        const currentQuestionData = questions[num - 1];
        if (flaggedQuestions.includes(num)) return 'flagged';
        if (currentQuestionData && answeredQuestions.includes(currentQuestionData.assessment_question_id)) return 'answered';
        return 'unanswered';
    };

    const getButtonClass = (num) => {
        const status = getQuestionStatus(num);
        const isActive = num === currentQuestion;

        let baseClass = 'w-12 h-12 rounded-lg font-medium transition-all cursor-pointer hover:scale-105 ';

        if (status === 'answered') {
            return baseClass + (isActive ? 'bg-neutral-200 text-neutral-400' : 'bg-dark-primary text-white');
        } else if (status === 'flagged') {
            return baseClass + (isActive ? 'bg-neutral-200 text-neutral-400' : 'bg-alt-tertiary text-white');
        } else {
            return baseClass + (isActive ? 'bg-neutral-200 text-neutral-400' : 'bg-white border border-neutral-400 text-neutral-400');
        }
    };

    const questionsI = Array.from({ length: totalQuestions }, (_, i) => i + 1);

    return (
        <Card title="Navigasi Soal" className="shadow-md">
            {/* Question Grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
                {questionsI.map((num) => (
                    <button
                        key={num}
                        className={getButtonClass(num)}
                        onClick={() => onQuestionClick?.(num)}
                    >
                        {num}
                    </button>
                ))}
            </div>

            {/* Legend */}
            <div className="space-y-2 pt-4 border-t">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-dark-primary rounded"></div>
                    <span className="text-sm text-gray-600">Sudah dijawab</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded"></div>
                    <span className="text-sm text-gray-600">Belum dijawab</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-alt-tertiary rounded"></div>
                    <span className="text-sm text-gray-600">Ragu-Ragu</span>
                </div>
            </div>
        </Card>
    );
}

const QuestionNavigationCompact = ({
    totalQuestions,
    answeredQuestions = [],
    questions = [],
    currentQuestion,
    flaggedQuestions = [],
    onQuestionClick
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const hideModal = () => setIsModalOpen(false);

    const getQuestionStatus = (num) => {
        const currentQuestionData = questions[num - 1];
        if (flaggedQuestions.includes(num)) return 'flagged';
        if (currentQuestionData && answeredQuestions.includes(currentQuestionData.assessment_question_id)) return 'answered';
        return 'unanswered';
    };

    const getButtonClass = (num) => {
        const status = getQuestionStatus(num);
        const isActive = num === currentQuestion;

        let baseClass = 'w-10 h-10 rounded-lg font-medium transition-all cursor-pointer hover:scale-105 ';

        if (status === 'answered') {
            return baseClass + (isActive ? 'bg-neutral-200 text-neutral-400' : 'bg-dark-primary text-white');
        } else if (status === 'flagged') {
            return baseClass + (isActive ? 'bg-neutral-200 text-neutral-400' : 'bg-alt-tertiary text-white');
        } else {
            return baseClass + (isActive ? 'bg-neutral-200 text-neutral-400' : 'bg-white border border-neutral-400 text-neutral-400');
        }
    };

    const questionsI = Array.from({ length: totalQuestions }, (_, i) => i + 1);

    return (
        <div className="block md:hidden">
            <Button
                type="primary"
                onClick={showModal}
                className="bg-white border border-dark-primary text-dark-primary shadow-none rounded-lg text-xs"
            >
                <span>
                    Daftar Pertanyaan
                </span>
                <List size={16} strokeWidth={1.25} />
            </Button>

            <Modal
                title="Navigasi Soal"
                open={isModalOpen}
                onCancel={hideModal}
                footer={null}
                width="100%"
                style={{ maxWidth: '270px' }}
            >
                <div className="grid grid-cols-4 gap-2 mb-3">
                    {questionsI.map((num) => (
                        <button
                            key={num}
                            className={getButtonClass(num)}
                            onClick={() => onQuestionClick?.(num)}
                        >
                            {num}
                        </button>
                    ))}
                </div>

                {/* Legend */}
                <div className="space-y-2 pt-2 border-t">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-dark-primary rounded"></div>
                        <span className="text-sm text-gray-600">Sudah dijawab</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded"></div>
                        <span className="text-sm text-gray-600">Belum dijawab</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-alt-tertiary rounded"></div>
                        <span className="text-sm text-gray-600">Ragu-Ragu</span>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export { QuestionNavigationCompact };

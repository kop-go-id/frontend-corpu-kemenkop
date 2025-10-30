'use client';

import { setQuestionAnswerByPretestId } from '@/lib/coursePretestService';
import { Card, Radio, Badge, message } from 'antd';
import { useState, useEffect } from 'react';

export default function QuestionCard({
    questionNumber,
    questionLength,
    question,
    questionId,
    options,
    initialValue = null,
    label,
    onAnswer,
    storageConfig
}) {
    const [selectedValue, setSelectedValue] = useState(initialValue);

    useEffect(() => {
        setSelectedValue(initialValue);
    }, [initialValue]);

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        handleSubmit(e.target.value)
    };

    const handleSubmit = async (option) => {
        try {
            await setQuestionAnswerByPretestId({
                pretest_id: storageConfig.getPretestId(),
                pretest_respondent_id: storageConfig.getRespondentId(),
                assessment_question_id: questionId,
                assessment_question_option_id: option.option_id,
                answer_respondent: option.option_text
            })
            onAnswer()
        } catch (err) {
            console.error(err)
            message.error('Gagal menyimpan jawaban, silakan coba lagi');
        } finally {
            onAnswer()
        }
    }

    return (
        <Card className="shadow-md">
            {/* Header */}
            <div className="w-full h-2 bg-gray-100 mb-4">
                <div
                    className="h-full bg-alt-secondary transition-all duration-300"
                    style={{ width: `${((questionNumber) / questionLength) * 100}%` }}
                />
            </div>
            <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold">Pertanyaan Nomor</span>
                    <Badge
                        count={questionNumber}
                        style={{ backgroundColor: '#065366' }}
                        className="text-lg"
                    />
                </div>
                <div className='py-1 px-2 rounded-full border border-dark-primary text-dark-primary text-xs w-max'>
                    {label}
                </div>
            </div>

            {/* Question Text */}
            <div className="mb-4">
                <p className="text-gray-700 leading-relaxed text-justify">
                    {question}
                </p>
            </div>

            {/* Options */}
            <Radio.Group
                onChange={handleChange}
                value={selectedValue}
                className="w-full"
            >
                <div className="space-y-3">
                    {options.map((option) => (
                        <Radio
                            key={option.option_id}
                            value={option}
                            className="w-full border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-all"
                        >
                            <span className="text-gray-700">{option.option_text}</span>
                        </Radio>
                    ))}
                </div>
            </Radio.Group>
        </Card>
    );
}

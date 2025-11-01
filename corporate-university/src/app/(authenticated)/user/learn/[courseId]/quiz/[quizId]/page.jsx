"use client";

import React, { useEffect, useState } from 'react'
import { Button, Modal, message } from 'antd';
import QuestionCard from '@/components/modules/course-pretest/QuestionCard';
import QuestionNavigation, { QuestionNavigationCompact } from '@/components/modules/course-pretest/QuestionNavigation';
import TimerBadge from '@/components/modules/course-pretest/TimerBadge';
import TopBar from '@/components/modules/course-pretest/TopBar';
import LoadingAnimation from '@/components/modules/course-pretest/LoadingAnimation';
import { endPretest, getQuestionAnsweredByPretestId, getQuestionByPretestId } from '@/lib/coursePretestService';
import { ensureCoursePretestSeeded, lastCoursePretest, lastCoursePretestTimeLeft, clearCoursePretestStorage } from '@/lib/coursePretestStorage';
import { getCoursePretestStorageConfig } from '@/config/coursePretest';
import { ChevronLeft, ChevronRight, CheckSquare, Square } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LearningQuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [flaggedQuestions, setFlaggedQuestions] = useState([]);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [isFinishing, setIsFinishing] = useState(false);
    const router = useRouter()
    const storageConfig = getCoursePretestStorageConfig()

    const fetchQuestions = async () => {
        try {
            setIsLoading(true)
            const res = await getQuestionByPretestId(lastCoursePretest()?.pretest?.pretest_id)
            setQuestions(res.questions)

            if (typeof window !== 'undefined') {
                const savedQuestion = localStorage.getItem(storageConfig.getLastOpenedQuestionKey(lastCoursePretest()?.pretest?.pretest_id));
                if (savedQuestion !== null) {
                    const questionIndex = parseInt(savedQuestion, 10);

                    if (!isNaN(questionIndex) && questionIndex >= 0 && questionIndex < res.questions.length) {
                        setCurrentQuestion(questionIndex);
                    }
                }
            }
        } catch (err) {
            console.error(err)
            message.error('Gagal memuat asesmen');
        } finally {
            setIsLoading(false)
        }
    }

    const fetchAnsweredQuestions = async () => {
        try {
            const res = await getQuestionAnsweredByPretestId(lastCoursePretest()?.pretest?.pretest_id, lastCoursePretest()?.respondent?.respondent_id)
            setAnsweredQuestions(res)
        } catch (err) {
            console.error(err)
            message.error('Gagal memuat asesmen');
        }
    }

    useEffect(() => {
        ensureCoursePretestSeeded();
        if (!lastCoursePretest()) {
            router.push(`/`)
            return
        }

        fetchQuestions()
        fetchAnsweredQuestions()
    }, [])

    useEffect(() => {
        const saved = localStorage.getItem(storageConfig.getFlaggedQuestionsKey(lastCoursePretest()?.pretest?.pretest_id));
        if (saved) {
            setFlaggedQuestions(JSON.parse(saved));
        }
    }, [])

    const handleToggleFlag = () => {
        const questionNumber = currentQuestion + 1;
        setFlaggedQuestions(prev => {
            const newFlagged = prev.includes(questionNumber)
                ? prev.filter(q => q !== questionNumber)
                : [...prev, questionNumber];

            localStorage.setItem(
                storageConfig.getFlaggedQuestionsKey(lastCoursePretest()?.pretest?.pretest_id),
                JSON.stringify(newFlagged)
            );
            return newFlagged;
        });
    };

    const navigationData = {
        totalQuestions: questions.length,
        answeredQuestions: answeredQuestions.filter(q => q.user_answer_option_id).map(q => q.assessment_question_id),
        currentQuestion: currentQuestion + 1,
        flaggedQuestions: flaggedQuestions
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && !isLoading && questions.length > 0) {
            localStorage.setItem(
                storageConfig.getLastOpenedQuestionKey(lastCoursePretest()?.pretest?.pretest_id),
                currentQuestion.toString()
            );
        }
    }, [currentQuestion, questions, isLoading]);

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleFinish = async () => {
        const unansweredQuestions = [];

        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            const answeredQuestion = answeredQuestions.find(
                answered => answered.assessment_question_id === question.assessment_question_id
            );

            if (!answeredQuestion || !answeredQuestion.user_answer_option_id) {
                unansweredQuestions.push(i + 1);
            }
        }

        if (unansweredQuestions.length > 0) {
            message.error(`Masih ada ${unansweredQuestions.length} pertanyaan yang belum dijawab: ${unansweredQuestions.join(', ')}`);
            setIsSubmitModalOpen(false);
            return;
        }

        try {
            setIsFinishing(true)
            const res = await endPretest({
                pretest_id: lastCoursePretest()?.pretest?.pretest_id,
                pretest_respondent_id: lastCoursePretest()?.respondent?.respondent_id,
                time_remaining: lastCoursePretestTimeLeft(),
                token: lastCoursePretest()?.token,
                expires_at: lastCoursePretest()?.token_expires_at,
            })
            clearCoursePretestStorage()
            router.push(`/`)
        } catch (err) {
            console.error(err)
            message.error('Gagal menyelesaikan asesmen');
        } finally {
            setIsFinishing(false)
        }
    }

    if (isLoading) return <LoadingAnimation message="Memuat soal survei..." />

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <TopBar storageConfig={storageConfig} title={`PRE-TEST`} />

                <div className="mb-3 sm:mb-6 w-full flex flex-wrap gap-2 justify-between items-center mt-12">
                    <TimerBadge initialTime={lastCoursePretestTimeLeft()} storageConfig={storageConfig} />
                    <div className="md:hidden">
                        <QuestionNavigationCompact
                            totalQuestions={navigationData.totalQuestions}
                            answeredQuestions={navigationData.answeredQuestions}
                            questions={questions}
                            currentQuestion={navigationData.currentQuestion}
                            flaggedQuestions={navigationData.flaggedQuestions}
                            onQuestionClick={(num) => setCurrentQuestion(num - 1)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <QuestionCard
                            questionNumber={currentQuestion + 1}
                            questionLength={questions.length}
                            question={questions[currentQuestion].question}
                            questionPrompt={questions[currentQuestion].questionPrompt}
                            options={questions[currentQuestion].options}
                            questionId={questions[currentQuestion].assessment_question_id}
                            initialValue={(() => {
                                const answeredQuestion = answeredQuestions.find(q => q.assessment_question_id === questions[currentQuestion].assessment_question_id);
                                if (answeredQuestion && answeredQuestion.user_answer_option_id) {
                                    const matchedOption = questions[currentQuestion].options.find(option => option.option_id === answeredQuestion.user_answer_option_id);
                                    return matchedOption || null;
                                }
                                return null;
                            })()}
                            onAnswer={fetchAnsweredQuestions}
                            label={questions[currentQuestion].instrument}
                            storageConfig={storageConfig}
                        />
                        <div className='sm:hidden flex w-full justify-end my-4'>
                            <Button
                                type="default"
                                size="large"
                                onClick={handleToggleFlag}
                                className={`!px-6 !flex !flex-row !items-center !gap-2 !bg-alt-tertiary !text-white hover:!bg-alt-quaternary !border-0`}
                            >
                                {flaggedQuestions.includes(currentQuestion + 1) ? (
                                    <CheckSquare size={20} />
                                ) : (
                                    <Square size={20} />
                                )}
                                <span>Ragu-Ragu</span>
                            </Button>
                        </div>
                        <div className="flex flex-wrap sm:flex-row justify-center items-center gap-4 mt-6">
                            <Button
                                size="large"
                                className="!px-6 !flex !flex-row !items-center !gap-2 !bg-alt-secondary disabled:!bg-alt-secondary/80 !text-white hover:!bg-alt-secondary/90 !border-0 !w-full sm:!w-max"
                                onClick={handlePreviousQuestion}
                                disabled={currentQuestion === 0}
                                type="default"

                            >
                                <ChevronLeft />
                                <p>
                                    Pertanyaan Sebelumnya
                                </p>
                            </Button>
                            <Button
                                type="default"
                                size="large"
                                onClick={handleToggleFlag}
                                className={`!px-6 !hidden sm:!flex !flex-row !items-center !gap-2 !bg-alt-tertiary !text-white hover:!bg-alt-tertiary/90 !border-0`}
                            >
                                {flaggedQuestions.includes(currentQuestion + 1) ? (
                                    <CheckSquare size={20} />
                                ) : (
                                    <Square size={20} />
                                )}
                                <span>Ragu-Ragu</span>
                            </Button>
                            {currentQuestion === questions.length - 1 ? (
                                <Button
                                    type="primary"
                                    size="large"
                                    className="!px-6 !border-0 !flex !flex-row !gap-2 !items-center !justify-center !shadow-none !bg-dark-primary !w-full sm:!w-max"
                                    onClick={() => setIsSubmitModalOpen(true)}
                                >
                                    <p>
                                        Selesai & Kirim
                                    </p>
                                </Button>
                            ) : (
                                <Button
                                    type="primary"
                                    size="large"
                                    className="!px-6 !border-0 !flex !flex-row !gap-2 !items-center !justify-center !shadow-none !w-full sm:!w-max"
                                    onClick={handleNextQuestion}
                                >
                                    <p>
                                        Pertanyaan Berikutnya
                                    </p>
                                    <ChevronRight />
                                </Button>
                            )}

                            <Modal
                                title="Konfirmasi Selesai"
                                open={isSubmitModalOpen}
                                onCancel={() => setIsSubmitModalOpen(false)}
                                footer={[
                                    <Button key="back" onClick={() => setIsSubmitModalOpen(false)}>
                                        Kembali
                                    </Button>,
                                    <Button
                                        key="submit"
                                        type="primary"
                                        className="!bg-dark-primary"
                                        loading={isFinishing}
                                        onClick={() => {
                                            handleFinish()
                                            setIsSubmitModalOpen(false);
                                        }}
                                    >
                                        Ya, Selesai
                                    </Button>,
                                ]}
                            >
                                <p>Setelah diselesaikan, Anda tidak dapat mengubah jawaban lagi.</p>
                            </Modal>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <QuestionNavigation
                            totalQuestions={navigationData.totalQuestions}
                            answeredQuestions={navigationData.answeredQuestions}
                            questions={questions}
                            currentQuestion={navigationData.currentQuestion}
                            flaggedQuestions={navigationData.flaggedQuestions}
                            onQuestionClick={(num) => setCurrentQuestion(num - 1)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearningQuizPage
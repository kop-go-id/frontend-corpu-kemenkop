import React from "react";
import { Card, Tabs } from "antd";
import DescriptionTabContent from "./DescriptionTabContent.jsx";
import DiscussionTabContent from "./DiscussionTabContent.jsx";
import TaskTabContent from "./TaskTabContent.jsx";
import QuizTabContent from "./QuizTabContent.jsx";

const CourseInfoTabs = ({
  description,
  learningObjectives,
  tasks,
  onStartTask,
  onStartQuiz,
  discussions,
  quiz,
  report,
  attachments,
}) => {
  // Struktur tab sekarang ditetapkan di dalam komponen
  const tabItems = [
    {
      key: "1",
      label: "Deskripsi",
      children: (
        <DescriptionTabContent
          description={description}
          learningObjectives={learningObjectives}
        />
      ),
    },
    {
      key: "2",
      label: "Diskusi",
      children: <DiscussionTabContent discussions={discussions} />,
    },
    {
      key: "3",
      label: "Tugas",
      children: <TaskTabContent tasks={tasks} onStartTask={onStartTask} />,
    },
    {
      key: "4",
      label: "Kuis",
      children: <QuizTabContent quizzes={quiz} onStartQuiz={onStartQuiz} />,
    },
    {
      key: "5",
      label: "Lampiran",
      children: <>{attachments}</>, // Bungkus dengan React.Fragment
    },
  ];

  return (
    <Card style={{ marginTop: 16 }} bodyStyle={{ minHeight: "500px" }}>
      <Tabs defaultActiveKey="1" items={tabItems} />
    </Card>
  );
};

export default CourseInfoTabs;

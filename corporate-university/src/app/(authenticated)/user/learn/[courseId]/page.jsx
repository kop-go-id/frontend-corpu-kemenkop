"use client";
import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import VideoPlayerSection from "@/components/modules/course-learning/VideoPlayerSection.jsx";
import ModulePlaylistCard from "@/components/modules/course-learning/ModulePlaylistCard.jsx";
import ModuleProgressCard from "@/components/modules/course-learning/ModuleProgressCard.jsx";
import CourseInfoTabs from "@/components/modules/course-learning/CourseInfoTabs.jsx";
import { courseData } from "@/datas/dummies/courseLearning.js";

const CourseLearningPage = ({ params }) => {
  const router = useRouter();
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const totalModules = courseData.length;
  const completedModules = courseData.filter((module) =>
    module.videos.every((video) => video.completed)
  ).length;

  const activeModulePlaylist = courseData[activeModuleIndex];
  const activeVideo = activeModulePlaylist.videos[activeVideoIndex];

  const handleModuleSelect = (moduleIndex) => {
    setActiveModuleIndex(moduleIndex);
    setActiveVideoIndex(0);
  };

  const handleVideoSelect = (videoIndex) => {
    setActiveVideoIndex(videoIndex);
  };

  const handleStartTask = (taskId) => {
    router.push(`/user/learn/${params.courseId}/task/${taskId}`);
  };

  const handleStartQuiz = (quizId) => {
    router.push(`/user/learn/${params.courseId}/quiz/${quizId}/welcome`);
  };

  return (
    <main className="p-8">
      <Button
        type="text"
        icon={<ArrowLeft size={20} />}
        onClick={() => router.back()}
        style={{ marginBottom: 16, padding: 0, height: "auto" }}
      >
        Kembali
      </Button>
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <VideoPlayerSection
            currentVideoTitle={activeVideo.videoTitle}
            currentVideoDuration={activeVideo.duration}
            videoUrl={activeVideo.url}
            videoPlaylistInModule={activeModulePlaylist.videos}
            activeVideoIndex={activeVideoIndex}
            onVideoSelect={handleVideoSelect}
          />
          <CourseInfoTabs
            description={activeModulePlaylist.description}
            learningObjectives={activeModulePlaylist.learningObjectives}
            tasks={activeModulePlaylist.tasks}
            onStartTask={handleStartTask}
            onStartQuiz={handleStartQuiz}
            discussions={activeModulePlaylist.discussions}
            quiz={activeModulePlaylist.quiz}
            report={activeModulePlaylist.report}
            attachments={activeModulePlaylist.attachments}
          />
        </Col>
        <Col span={6}>
          <ModulePlaylistCard
            modulePlaylists={courseData}
            onModuleSelect={handleModuleSelect}
            activeModuleIndex={activeModuleIndex}
          />
          <ModuleProgressCard
            completedModules={completedModules}
            totalModules={totalModules}
          />
        </Col>
      </Row>
    </main>
  );
};

export default CourseLearningPage;

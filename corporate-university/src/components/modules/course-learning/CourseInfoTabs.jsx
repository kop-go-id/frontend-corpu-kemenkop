import React from "react";
import { Card, Tabs } from "antd";
import DescriptionTabContent from "./DescriptionTabContent.jsx";

const CourseInfoTabs = ({
  description,
  learningObjectives,
  task,
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
    { key: "2", label: "Diskusi", children: task },
    { key: "3", label: "Tugas", children: quiz },
    { key: "4", label: "Kuis", children: report },
    { key: "5", label: "Lampiran", children: attachments },
  ];

  return (
    <Card style={{ marginTop: 16 }} bodyStyle={{ minHeight: "500px" }}>
      <Tabs defaultActiveKey="1" items={tabItems} />
    </Card>
  );
};

export default CourseInfoTabs;

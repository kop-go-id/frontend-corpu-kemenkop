import React from "react";
import { Card, Tabs } from "antd";

const CourseInfoTabs = ({ description, task, quiz, report, attachments }) => {
  // Struktur tab sekarang ditetapkan di dalam komponen
  const tabItems = [
    {
      key: "1",
      label: "Deskripsi",
      children: description,
    },
    { key: "2", label: "Tugas", children: task },
    { key: "3", label: "Kuis", children: quiz },
    { key: "4", label: "Laporan", children: report },
    { key: "5", label: "Lampiran", children: attachments },
  ];

  return (
    <Card style={{ marginTop: 16 }} bodyStyle={{ minHeight: "500px" }}>
      <Tabs defaultActiveKey="1" items={tabItems} />
    </Card>
  );
};

export default CourseInfoTabs;

"use client";
import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import VideoPlayerSection from "@/components/modules/course-learning/VideoPlayerSection.jsx";
import VideoPlaylistCard from "@/components/modules/course-learning/VideoPlaylistCard.jsx";
import CourseInfoTabs from "@/components/modules/course-learning/CourseInfoTabs.jsx";
import AttachmentItem from "@/components/modules/course-learning/AttachmentItem.jsx";

const CourseLearningPage = ({ params }) => {
  // State untuk melacak video yang sedang aktif (berdasarkan index array)
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  // Struktur data baru yang menggabungkan semua informasi per sub-materi/bab
  const courseData = [
    {
      moduleTitle: "Dasar-dasar Data Governance",
      video: {
        duration: "08:15",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      description:
        "Ini adalah deskripsi untuk Bab 1. Membahas konsep dasar dan pentingnya data governance dalam organisasi modern.",
      task: "Tugas untuk Bab 1: Buat ringkasan tentang pilar utama data governance.",
      quiz: "Kuis untuk Bab 1 akan tersedia di sini setelah Anda menyelesaikan video.",
      report: "Laporan kemajuan Anda untuk Bab 1 akan ditampilkan di sini.",
      attachments: [
        {
          fileName: "Slide Presentasi Bab 1.pdf",
          fileUrl: "/path/to/dummy-file.pdf",
        },
      ],
    },
    {
      moduleTitle: "Pentingnya Kualitas Data",
      video: {
        duration: "12:30",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      },
      description:
        "Deskripsi untuk Bab 2. Fokus pada metrik dan cara meningkatkan kualitas data untuk pengambilan keputusan yang lebih baik.",
      task: "Tugas untuk Bab 2: Identifikasi 5 metrik kualitas data yang relevan untuk departemen Anda.",
      quiz: "Kuis untuk Bab 2 belum tersedia.",
      report: "Laporan kemajuan Anda untuk Bab 2.",
      attachments: [], // Tidak ada lampiran
    },
    {
      moduleTitle: "Studi Kasus: Implementasi di Pemerintahan",
      video: {
        duration: "15:05",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      },
      description:
        "Deskripsi untuk Bab 3. Menganalisis studi kasus nyata tentang implementasi data governance di sektor pemerintahan.",
      task: "Tidak ada tugas untuk bab ini.",
      quiz: "Kuis untuk Bab 3 akan segera hadir.",
      report: "Laporan kemajuan Anda untuk Bab 3.",
      attachments: [
        {
          fileName: "Data Studi Kasus.xlsx",
          fileUrl: "/path/to/dummy-file.xlsx",
        },
        {
          fileName: "Laporan Analisis.docx",
          fileUrl: "/path/to/dummy-file.docx",
        },
      ],
    },
  ];

  // Mengambil data untuk modul yang sedang aktif
  const activeModule = courseData[activeIndex];

  // Fungsi untuk mengubah video yang aktif
  const handleVideoSelect = (index) => {
    setActiveIndex(index);
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
        {/* Kolom untuk Video Player (3/4 halaman) */}
        <Col span={18}>
          <VideoPlayerSection
            currentVideoTitle={activeModule.moduleTitle}
            currentVideoDuration={activeModule.video.duration}
            videoUrl={activeModule.video.url}
          />
          <CourseInfoTabs
            description={activeModule.description}
            task={activeModule.task}
            quiz={activeModule.quiz}
            report={activeModule.report}
            attachments={
              activeModule.attachments.length > 0
                ? activeModule.attachments.map((att, index) => (
                    <AttachmentItem key={index} {...att} />
                  ))
                : "Tidak ada lampiran untuk bab ini."
            }
          />
        </Col>

        {/* Kolom untuk Daftar Video (1/4 halaman) */}
        <Col span={6}>
          <VideoPlaylistCard
            videoPlaylist={courseData}
            onVideoSelect={handleVideoSelect}
            activeIndex={activeIndex}
          />
        </Col>
      </Row>
    </main>
  );
};

export default CourseLearningPage;

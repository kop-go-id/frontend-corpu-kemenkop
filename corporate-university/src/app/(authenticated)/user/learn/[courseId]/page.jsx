"use client";
import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import VideoPlayerSection from "@/components/modules/course-learning/VideoPlayerSection.jsx";
import ModulePlaylistCard from "@/components/modules/course-learning/ModulePlaylistCard.jsx";
import ModuleProgressCard from "@/components/modules/course-learning/ModuleProgressCard.jsx";
import CourseInfoTabs from "@/components/modules/course-learning/CourseInfoTabs.jsx";
import AttachmentItem from "@/components/modules/course-learning/AttachmentItem.jsx";

const CourseLearningPage = ({ params }) => {
  const router = useRouter();
  // State untuk melacak modul playlist yang aktif
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  // State untuk melacak video yang aktif di dalam modul playlist
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Struktur data baru: Array of Module Playlists, each with an array of videos
  const courseData = [
    {
      modulePlaylistTitle: "Modul 1: Dasar-dasar Data Governance",
      // Informasi sekarang berada di level Modul
      description:
        "Modul ini membahas konsep dasar dan pentingnya data governance dalam organisasi modern, mencakup pilar utama dan kerangka kerja yang efektif.",
      learningObjectives: [
        "Memahami definisi dan pentingnya Data Governance.",
        "Mengidentifikasi pilar-pilar utama Data Governance.",
        "Mengenal kerangka kerja Data Governance yang umum digunakan.",
      ],
      tasks: [
        {
          id: "task-1-1",
          title: "Ringkasan 5 Pilar Utama Data Governance",
          date: "Batas Waktu: 25 Des 2023",
          time: "23:59 WIB",
        },
      ],
      discussions: [
        {
          id: "comment-1",
          author: "Budi Santoso",
          avatarUrl: "https://i.pravatar.cc/150?u=budi",
          comment:
            "Materi yang sangat bagus untuk pengenalan. Apakah ada contoh nyata penerapan pilar-pilar ini di koperasi?",
          timestamp: "2 jam yang lalu",
          reply: {
            id: "reply-1-1",
            author: "Admin Kemenkop",
            avatarUrl: "https://i.pravatar.cc/150?u=admin",
            comment:
              "Terima kasih atas pertanyaannya, Budi. Contoh nyata akan dibahas lebih mendalam pada Modul 2 tentang Studi Kasus.",
            timestamp: "1 jam yang lalu",
          },
        },
        {
          id: "comment-2",
          author: "Citra Lestari",
          avatarUrl: "https://i.pravatar.cc/150?u=citra",
          comment:
            "Saya setuju, video kedua tentang kualitas data sangat membuka wawasan. Terima kasih!",
          timestamp: "1 hari yang lalu",
          reply: null, // Belum ada balasan
        },
      ],
      quiz: [
        {
          id: "quiz-1-1",
          title: "Kuis Pemahaman Dasar Data Governance",
          duration: "15 Menit",
          questionCount: 10,
        },
      ],
      report: "Laporan kemajuan Anda untuk Modul 1 akan ditampilkan di sini.",
      attachments: [
        {
          fileName: "Materi Lengkap Modul 1.pdf",
          fileUrl: "/path/to/dummy-file.pdf",
        },
      ],
      videos: [
        {
          videoTitle: "Pengantar Data Governance",
          duration: "08:15",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          completed: true, // Menambahkan status selesai
        },
        {
          videoTitle: "Pentingnya Kualitas Data",
          duration: "12:30",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          completed: true, // Menambahkan status selesai
        },
      ],
    },
    {
      modulePlaylistTitle: "Modul 2: Studi Kasus & Implementasi",
      description:
        "Modul ini berfokus pada analisis studi kasus nyata dan strategi implementasi data governance di berbagai sektor, termasuk pemerintahan dan swasta.",
      learningObjectives: [
        "Menganalisis studi kasus implementasi Data Governance.",
        "Memahami tantangan umum dalam implementasi.",
        "Menyusun strategi implementasi dasar.",
      ],
      tasks: [
        {
          id: "task-2-1",
          title: "Analisis Studi Kasus Implementasi",
          date: "Batas Waktu: 30 Des 2023",
          time: "23:59 WIB",
        },
      ],
      discussions: [], // Belum ada diskusi untuk modul ini
      quiz: [], // Gunakan array kosong jika tidak ada kuis
      report: "Laporan kemajuan Anda untuk Modul 2.",
      attachments: [
        {
          fileName: "Kumpulan Studi Kasus.zip",
          fileUrl: "/path/to/dummy-file.zip",
        },
      ],
      videos: [
        {
          videoTitle: "Studi Kasus: Implementasi di Pemerintahan",
          duration: "15:05",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          completed: false,
        },
        {
          videoTitle: "Analisis Dampak Data Governance",
          duration: "10:00",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          completed: false,
        },
        {
          videoTitle: "Strategi Implementasi Data Governance",
          duration: "14:20",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          completed: false,
        },
        {
          videoTitle: "Peran Teknologi dalam Data Governance",
          duration: "09:45",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
          completed: false,
        },
        {
          videoTitle: "Masa Depan Data Governance",
          duration: "11:10",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
          completed: false,
        },
        {
          videoTitle: "Strategi Implementasi Data Governance",
          duration: "14:20",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          completed: false,
        },
        {
          videoTitle: "Peran Teknologi dalam Data Governance",
          duration: "09:45",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
          completed: false,
        },
        {
          videoTitle: "Masa Depan Data Governance",
          duration: "11:10",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
          completed: false,
        },
      ],
    },
    {
      modulePlaylistTitle: "Modul 3: Teknik Lanjutan dan Kepatuhan",
      description:
        "Modul ini mendalami teknik lanjutan seperti Master Data Management (MDM), Data Lineage, dan pentingnya kepatuhan terhadap regulasi data.",
      learningObjectives: [
        "Memahami konsep Master Data Management (MDM).",
        "Mengetahui pentingnya Data Lineage dan Data Catalog.",
        "Mengenal dasar-dasar kepatuhan regulasi data seperti GDPR dan PDP.",
      ],
      tasks: [
        {
          id: "task-3-1",
          title: "Perbedaan MDM dan Data Governance",
          date: "Batas Waktu: 05 Jan 2024",
          time: "23:59 WIB",
        },
      ],
      discussions: [],
      quiz: [], // Gunakan array kosong jika tidak ada kuis
      report: "Laporan kemajuan Anda untuk Modul 3.",
      attachments: [],
      videos: [
        {
          videoTitle: "Master Data Management (MDM)",
          duration: "18:00",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
          completed: false,
        },
        {
          videoTitle: "Kepatuhan Regulasi (GDPR, PDP)",
          duration: "20:30",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
          completed: false,
        },
        {
          videoTitle: "Data Lineage dan Data Catalog",
          duration: "14:00",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
          completed: false,
        },
        {
          videoTitle: "Data Quality Management",
          duration: "11:50",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
          completed: false,
        },
        {
          videoTitle: "Data Security dan Privasi",
          duration: "17:20",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          completed: false,
        },
        {
          videoTitle: "Manajemen Siklus Hidup Data",
          duration: "13:00",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
          completed: false,
        },
        {
          videoTitle: "Audit dan Pemantauan Data Governance",
          duration: "10:40",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
          completed: false,
        },
        {
          videoTitle: "Peran Data Steward dan Data Owner",
          duration: "09:10",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
          completed: false,
        },
      ],
    },
    {
      modulePlaylistTitle: "Modul 4: Alat dan Platform Data Governance",
      description:
        "Modul ini memperkenalkan berbagai alat dan platform populer yang digunakan untuk implementasi data governance, serta membahas peran otomatisasi.",
      learningObjectives: [
        "Mengenal beberapa platform Data Governance populer.",
        "Memahami peran otomatisasi dalam Data Governance.",
        "Membandingkan fitur dasar dari berbagai alat.",
      ],
      tasks: [], // Tidak ada tugas untuk modul ini
      discussions: [],
      quiz: [], // Gunakan array kosong jika tidak ada kuis
      report: "Laporan kemajuan Anda untuk Modul 4.",
      attachments: [],
      videos: [
        {
          videoTitle: "Pengenalan Platform Populer",
          duration: "16:45",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
          completed: false,
        },
        {
          videoTitle: "Otomatisasi dalam Data Governance",
          duration: "13:15",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
          completed: false,
        },
      ],
    },
    {
      modulePlaylistTitle: "Modul 5: Mengukur ROI dan Tren Masa Depan",
      description:
        "Modul terakhir ini membahas cara mengukur Return on Investment (ROI) dari inisiatif data governance dan melihat tren masa depan seperti Data Fabric dan Data Mesh.",
      learningObjectives: [
        "Memahami cara mengukur ROI dari inisiatif Data Governance.",
        "Mengenal tren masa depan seperti Data Fabric dan Data Mesh.",
        "Mempersiapkan diri untuk tantangan Data Governance di masa depan.",
      ],
      tasks: [], // Tidak ada tugas untuk modul ini
      discussions: [],
      quiz: [], // Gunakan array kosong jika tidak ada kuis
      report: "Laporan akhir kemajuan Anda.",
      attachments: [
        {
          fileName: "Template Kalkulasi ROI.xlsx",
          fileUrl: "/path/to/dummy-roi.xlsx",
        },
      ],
      videos: [
        {
          videoTitle: "Mengukur Return on Investment (ROI)",
          duration: "12:50",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          completed: false,
        },
        {
          videoTitle: "Tren Masa Depan dalam Data Governance",
          duration: "10:25",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          completed: false,
        },
      ],
    },
  ];

  // Menghitung progres modul
  const totalModules = courseData.length;
  const completedModules = courseData.filter((module) =>
    // Sebuah modul dianggap selesai jika semua video di dalamnya selesai
    module.videos.every((video) => video.completed)
  ).length;

  // Mengambil data untuk modul playlist yang sedang aktif
  const activeModulePlaylist = courseData[activeModuleIndex];
  // Mengambil data untuk video yang sedang aktif
  const activeVideo = activeModulePlaylist.videos[activeVideoIndex];

  // Fungsi untuk mengubah modul playlist yang aktif
  const handleModuleSelect = (moduleIndex) => {
    setActiveModuleIndex(moduleIndex);
    // Reset ke video pertama di modul baru
    setActiveVideoIndex(0);
  };

  // Fungsi untuk mengubah video yang aktif di dalam modul saat ini
  const handleVideoSelect = (videoIndex) => {
    setActiveVideoIndex(videoIndex);
  };

  // Fungsi untuk navigasi ke halaman detail tugas
  const handleStartTask = (taskId) => {
    router.push(`/user/learn/${params.courseId}/${taskId}`);
  };

  // Fungsi untuk navigasi ke halaman sambutan kuis
  const handleStartQuiz = (quizId) => {
    router.push(`/user/learn/${params.courseId}/${quizId}`);
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
            currentVideoTitle={activeVideo.videoTitle}
            currentVideoDuration={activeVideo.duration}
            videoUrl={activeVideo.url}
            // Teruskan props carousel ke VideoPlayerSection
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
            attachments={
              activeModulePlaylist.attachments.length > 0
                ? activeModulePlaylist.attachments.map((att, index) => (
                    <AttachmentItem key={index} {...att} />
                  ))
                : "Tidak ada lampiran untuk bab ini."
            }
          />
        </Col>

        {/* Kolom untuk Daftar Video (1/4 halaman) */}
        <Col span={6}>
          <ModulePlaylistCard // Komponen ini sekarang akan menampilkan daftar modul
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

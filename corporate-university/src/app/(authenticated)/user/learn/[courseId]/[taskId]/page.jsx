"use client";

import React from "react";
import { Card, Button, Typography, Upload, message } from "antd";
import {
  ArrowLeftOutlined,
  DownloadOutlined,
  FileTextOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;
const { Dragger } = Upload;

// --- Konfigurasi Upload ---
const uploadProps = {
  name: "file",
  multiple: false,
  maxCount: 1,
  accept: ".pdf,.doc,.docx", // Batasan format file
  // Ganti dengan endpoint API Anda yang sebenarnya
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} berhasil diunggah.`);
    } else if (status === "error") {
      message.error(`${info.file.name} gagal diunggah.`);
    }
  },
  onDrop(e) {
    console.log("File dijatuhkan", e.dataTransfer.files);
  },
};
// -------------------------

const TaskDetailPage = () => {
  const router = useRouter();

  const handleDownload = () => {
    // Logika untuk mengunduh file soal
    console.log("Mulai mengunduh file soal...");
    // Di aplikasi nyata, Anda akan menggunakan window.open atau link 'a' tersembunyi
  };

  const handleSubmit = () => {
    // Logika untuk mengirim jawaban
    console.log("Mengirim jawaban...");
    message.info("Jawaban dikirim!");
  };

  return (
    // Container utama dengan padding dan background abu-abu muda
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col">
      {/* Tombol Kembali */}
      <div className="mb-6">
        <Button
          type="link"
          icon={<ArrowLeftOutlined />}
          className="p-0 h-auto"
          onClick={() => router.back()}
        >
          Kembali
        </Button>
      </div>

      {/* Kartu Konten Utama */}
      <Card className=" mx-auto rounded-lg shadow-lg w-full flex-grow">
        {/* Header Tugas */}
        <Title level={3} className="text-gray-900 !mb-2">
          Studi Kasus Implementasi Kebijakan Data
        </Title>
        <Text className="text-gray-600 block mb-8">
          Dalam tugas ini, Anda akan menganalisis implementasi kebijakan data
          governance dalam sebuah koperasi. Analisis harus mencakup aspek-aspek
          penting seperti struktur organisasi, proses bisnis, dan tantangan yang
          dihadapi.
        </Text>

        {/* --- Bagian File Soal --- */}
        <Title level={4} className="text-gray-800 !mb-3">
          File Soal
        </Title>
        <div className="flex items-center justify-between p-4 mb-8 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center space-x-3">
            <FileTextOutlined className="text-2xl text-blue-500" />
            <div>
              <Text strong className="block">
                Soal_StudiKasus_KebijakanData2025.PDF
              </Text>
              <Text type="secondary" className="text-sm">
                PDF Document
              </Text>
            </div>
          </div>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            className="bg-teal-600 border-teal-600 hover:bg-teal-700 hover:border-teal-700 rounded-md"
            onClick={handleDownload}
          >
            Unduh Soal
          </Button>
        </div>

        {/* --- Bagian Unggah Jawaban --- */}
        <Title level={4} className="text-gray-800 !mb-3">
          Unggah Jawaban
        </Title>
        <div className="mb-8 flex-grow flex">
          <Dragger
            {...uploadProps}
            className="flex-grow flex flex-col justify-center items-center"
          >
            <p className="ant-upload-drag-icon">
              <UploadOutlined className="text-4xl text-blue-500" />
            </p>
            <p className="ant-upload-text text-gray-700 font-semibold">
              Klik untuk pilih file atau seret file ke sini
            </p>
            <p className="ant-upload-hint text-sm text-gray-500">
              Format: PDF, DOC, DOCX (Maksimal 10MB)
            </p>
          </Dragger>
        </div>

        {/* --- Tombol Kirim --- */}
        <div className="flex justify-end pt-4 mt-auto">
          <Button
            type="primary"
            size="large"
            className="bg-amber-500 border-amber-500 hover:bg-amber-600 hover:border-amber-600 rounded-md shadow-md"
            onClick={handleSubmit}
          >
            Kirim
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TaskDetailPage;

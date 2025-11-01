'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'antd';
import { ArrowLeftOutlined, DownloadOutlined } from '@ant-design/icons';

const UserGuidePage = () => {
  const router = useRouter();
  
  // Dummy PDF file URL - replace with actual PDF path when available
  // Using a sample PDF from Mozilla for demonstration
  const pdfUrl = '/sample-guide.pdf'; // This should be replaced with actual PDF file path
  // For now, using an external sample PDF as fallback
  const dummyPdfUrl = '/docs/pdf/dummy.pdf';

  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = dummyPdfUrl;
    link.download = 'Panduan-Pengguna.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-solitude">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:py-8">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            {/* Back Button */}
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors mb-4 group border-0 outline-none bg-transparent p-0"
            >
              <ArrowLeftOutlined className="text-base group-hover:translate-x-[-2px] transition-transform" />
              <span className="text-sm font-medium">Kembali</span>
            </button>

            {/* Title */}
            <h1 className="text-3xl font-bold text-primary">Panduan Pengguna</h1>
          </div>

          {/* Download Button */}
          <Button
            icon={<DownloadOutlined />}
            onClick={handleDownload}
            className="!border-primary !text-primary hover:!bg-primary/10 !rounded-lg !h-10 !px-6"
          >
            Unduh Panduan
          </Button>
        </div>

        {/* PDF Viewer Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
          <div className="relative w-full" style={{ height: 'calc(100vh - 250px)', minHeight: '800px' }}>
            <iframe
              src={`${dummyPdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
              className="w-full h-full"
              style={{
                border: 'none',
              }}
              title="Panduan Pengguna PDF Viewer"
            />
            {/* Fallback for browsers that don't support iframe PDF */}
            <div className="absolute inset-0 hidden items-center justify-center bg-gray-50">
              <div className="text-center p-8">
                <p className="text-gray-600 mb-4">PDF tidak dapat ditampilkan di browser ini.</p>
                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  onClick={handleDownload}
                  className="!bg-primary"
                >
                  Unduh PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGuidePage;
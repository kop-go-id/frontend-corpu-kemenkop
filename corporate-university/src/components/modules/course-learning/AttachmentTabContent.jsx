import React from "react";
import { Typography, Card, Button } from "antd";
import { PaperClipOutlined, DownloadOutlined } from "@ant-design/icons";

const { Title } = Typography;

const AttachmentTabContent = ({ attachments }) => {
  if (!attachments || attachments.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <PaperClipOutlined style={{ fontSize: 48, color: "#ccc" }} />
        <Title level={5} style={{ color: "#aaa", marginTop: 16 }}>
          Tidak Ada Lampiran untuk Modul Ini
        </Title>
      </div>
    );
  }

  return (
    <div>
      <Title level={5} className="!text-primary" style={{ marginBottom: 12 }}>
        Lampiran Modul
      </Title>
      {attachments.map((item, index) => (
        <Card
          key={index}
          className="rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 border-l-primary mb-4"
          bodyStyle={{ padding: "16px 20px" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <PaperClipOutlined className="text-xl text-primary" />
              <div>
                <Title level={5} className="!mb-0 text-base font-semibold">
                  {item.fileName}
                </Title>
              </div>
            </div>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              href={item.fileUrl}
              download
            >
              Unduh
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AttachmentTabContent;

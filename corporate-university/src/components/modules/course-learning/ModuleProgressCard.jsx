import React from "react";
import { Card, Progress, Typography, Button } from "antd";
import Image from "next/image";

const { Text } = Typography;

const ModuleProgressCard = ({ completedModules, totalModules }) => {
  const percent =
    totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

  return (
    <Card style={{ marginTop: 16 }} bodyStyle={{ textAlign: "center" }}>
      <Image
        src="/icons/certificate-icon.png"
        alt="Sertifikat"
        width={48}
        height={48}
        className="mb-4 mx-auto"
      />
      <Text
        strong
        className="!text-primary"
        style={{ fontSize: "1.1em", display: "block" }}
      >
        Sertifikat Penyelesaian
      </Text>
      <Text type="secondary" style={{ display: "block", marginTop: 4 }}>
        Selesaikan semua modul untuk menyelesaikan sertifikat anda
      </Text>
      <Text
        style={{
          display: "block",
          textAlign: "left",
          fontSize: "0.9em",
          color: "#000",
          marginTop: 16,
        }}
      >
        Progress penyelesaian
      </Text>
      <Progress
        percent={percent}
        strokeColor={{
          "0%": "#E5A80E",
          "100%": "#F2C94C",
        }}
        showInfo={false}
      />
      <Text type="secondary" style={{ display: "block", marginTop: 8 }}>
        {completedModules} dari {totalModules} Modul Selesai
      </Text>
      <Button type="primary" style={{ marginTop: 16, width: "100%" }}>
        Unduh Sertifikat
      </Button>
    </Card>
  );
};

export default ModuleProgressCard;

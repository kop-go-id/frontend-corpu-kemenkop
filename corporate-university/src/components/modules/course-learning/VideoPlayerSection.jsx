import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

const VideoPlayerSection = ({
  currentVideoTitle,
  currentVideoDuration,
  videoUrl,
}) => {
  return (
    <Card>
      <video
        key={videoUrl} // Menambahkan key untuk me-remount video player saat URL berubah
        controls
        width="100%"
        src={videoUrl}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      >
        Browser Anda tidak mendukung tag video.
      </video>
      <Title level={3} style={{ marginTop: 16, marginBottom: 4 }}>
        {currentVideoTitle}
      </Title>
      <Text type="secondary" style={{ fontSize: "0.9em" }}>
        Durasi: {currentVideoDuration}
      </Text>
    </Card>
  );
};

export default VideoPlayerSection;

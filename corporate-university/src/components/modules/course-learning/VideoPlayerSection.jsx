import React from "react";
import { Card, Typography, Divider } from "antd";
import VideoCarousel from "./VideoCarousel.jsx"; // Import VideoCarousel

const { Title, Text } = Typography;

const VideoPlayerSection = ({
  currentVideoTitle,
  currentVideoDuration,
  videoUrl,
  videoPlaylistInModule, // Tambahkan props untuk carousel
  onVideoSelect, // Tambahkan props untuk carousel
  activeVideoIndex, // Tambahkan props untuk carousel
}) => {
  return (
    <Card>
      <video
        key={videoUrl} // Menambahkan key untuk me-remount video player saat URL berubah
        controls
        width="100%"
        src={videoUrl}
      >
        Browser Anda tidak mendukung tag video.
      </video>
      <Title level={3} style={{ marginTop: 16, marginBottom: 4 }}>
        {currentVideoTitle}
      </Title>
      <Text type="secondary" style={{ fontSize: "0.9em" }}>
        Durasi: {currentVideoDuration}
      </Text>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />{" "}
      {/* Beri margin bawah pada divider */}
      <VideoCarousel // Render VideoCarousel di sini
        videoPlaylistInModule={videoPlaylistInModule}
        onVideoSelect={onVideoSelect}
        activeVideoIndex={activeVideoIndex}
      />
    </Card>
  );
};

export default VideoPlayerSection;

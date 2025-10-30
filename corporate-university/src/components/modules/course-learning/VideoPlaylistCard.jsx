import React from "react";
import { Card, List, Typography } from "antd";

const { Text } = Typography;

const VideoPlaylistCard = ({ videoPlaylist, onVideoSelect, activeIndex }) => {
  return (
    <Card title="Daftar Video" bodyStyle={{ padding: "0 16px 16px 16px" }}>
      <List
        itemLayout="vertical"
        dataSource={videoPlaylist}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            style={{ padding: "12px 0 0 0", border: "none" }}
          >
            <Card
              hoverable
              style={{ borderRadius: 8, overflow: "hidden" }}
              onClick={() => onVideoSelect(index)}
              bodyStyle={{
                padding: 12,
                backgroundColor: activeIndex === index ? "#E5A80E" : "#FAFAFA",
              }}
            >
              <Text
                strong
                style={{ color: activeIndex === index ? "white" : undefined }}
                className={activeIndex !== index ? "!text-primary" : ""}
              >
                Modul {index + 1}
              </Text>
              <Text
                style={{
                  display: "block",
                  margin: "4px 0",
                  color: activeIndex === index ? "white" : "inherit",
                }}
              >
                {item.moduleTitle}
              </Text>
              <Text
                type={activeIndex !== index ? "secondary" : undefined}
                style={{
                  fontSize: "0.85em",
                  color: activeIndex === index ? "white" : undefined,
                }}
              >
                Durasi: {item.video.duration}
              </Text>
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default VideoPlaylistCard;

import React from "react";
import { Card, List, Typography } from "antd";
import { CheckCircle, PlayCircle, Lock } from "lucide-react";

const { Text } = Typography;

const ModulePlaylistCard = ({
  modulePlaylists,
  onModuleSelect,
  activeModuleIndex,
}) => {
  return (
    <Card title="Daftar Modul" bodyStyle={{ padding: "0 16px 16px 16px" }}>
      <List
        itemLayout="vertical"
        dataSource={modulePlaylists}
        renderItem={(item, index) => {
          const isCompleted = item.videos.every((video) => video.completed);
          const isActive = activeModuleIndex === index;
          const isLocked =
            index > 0 &&
            !modulePlaylists[index - 1].videos.every(
              (video) => video.completed
            );

          let icon = null;
          let cardStyle = {};
          let titleColor = undefined;

          if (isActive) {
            icon = <PlayCircle size={20} className="mr-2 text-white" />;
            cardStyle.backgroundColor = "#E5A80E"; // Warna secondary untuk 'in progress'
            titleColor = "white";
          } else if (isCompleted) {
            icon = <CheckCircle size={20} className="mr-2 text-green-500" />;
            cardStyle.backgroundColor = "#FAFAFA";
          } else if (isLocked) {
            icon = <Lock size={20} className="mr-2 text-gray-400" />;
            cardStyle.backgroundColor = "#F5F5F5";
            cardStyle.opacity = 0.7;
            cardStyle.cursor = "not-allowed";
          } else {
            // Unlocked but not active/completed
            cardStyle.backgroundColor = "#FAFAFA";
          }

          return (
            <List.Item
              key={index}
              style={{ padding: "12px 0 0 0", border: "none" }}
            >
              <Card
                hoverable={!isLocked}
                style={{ borderRadius: 8, overflow: "hidden", ...cardStyle }}
                onClick={() => !isLocked && onModuleSelect(index)}
                bodyStyle={{
                  padding: 12,
                  backgroundColor: "transparent",
                }}
              >
                <div className="flex items-center">
                  {icon}
                  <div className="flex flex-col">
                    <Text
                      strong
                      style={{
                        color: titleColor,
                      }}
                      className={!isActive ? "!text-primary" : ""}
                    >
                      {item.modulePlaylistTitle}
                    </Text>
                    <Text
                      style={{
                        display: "block",
                        color: isActive ? "white" : "inherit",
                        opacity: isActive ? 0.9 : 1,
                      }}
                      className="text-xs"
                    >
                      {item.videos.length} Video
                    </Text>
                  </div>
                </div>
              </Card>
            </List.Item>
          );
        }}
      />
    </Card>
  );
};

export default ModulePlaylistCard;

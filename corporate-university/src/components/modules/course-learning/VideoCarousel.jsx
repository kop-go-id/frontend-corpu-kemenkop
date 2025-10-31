import React from "react";
import { Card, Typography, Carousel } from "antd";

const { Text, Title } = Typography;

const VideoCarousel = ({
  videoPlaylistInModule,
  onVideoSelect,
  activeVideoIndex,
}) => {
  return (
    <div>
      <Title level={4} style={{ marginBottom: 16 }}>
        Sesi Pembelajaran
      </Title>
      <Carousel
        arrows={true}
        slidesToShow={5}
        slidesToScroll={1}
        infinite={false}
        dots={false}
      >
        {videoPlaylistInModule.map((item, index) => (
          <div key={index}>
            <Card
              hoverable
              onClick={() => onVideoSelect(index)}
              style={{
                margin: "0 6px",
                borderRadius: 8,
                overflow: "hidden",
              }}
              bodyStyle={{
                padding: 12,
                backgroundColor:
                  activeVideoIndex === index ? "#E5A80E" : "#F0F0F0",
                textAlign: "center",
                border:
                  activeVideoIndex === index
                    ? "2px solid #E5A80E"
                    : "2px solid transparent",
                borderRadius: "8px",
              }}
            >
              <Text
                strong
                style={{ color: activeVideoIndex === index && "white" }}
              >
                Video {index + 1}
              </Text>
              <Text
                style={{ display: "block", fontSize: "0.8em" }}
                type={activeVideoIndex !== index ? "secondary" : undefined}
              >
                {item.duration}
              </Text>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;

import React from "react";
import { Typography } from "antd";
import { CheckCircle } from "lucide-react";

const { Title } = Typography;

const DescriptionTabContent = ({ description, learningObjectives }) => {
  return (
    <div>
      <Title level={5} className="!text-primary" style={{ marginBottom: 12 }}>
        Tentang Modul Ini
      </Title>
      <p style={{ whiteSpace: "pre-wrap" }}>{description}</p>
      <Title
        level={5}
        className="!text-primary"
        style={{ marginTop: 24, marginBottom: 12 }}
      >
        Tujuan Pembelajaran
      </Title>
      <ul style={{ paddingLeft: 0, listStyle: "none" }}>
        {learningObjectives?.map((objective, index) => (
          <li
            key={index}
            style={{ marginBottom: 8, display: "flex", alignItems: "start" }}
          >
            <CheckCircle
              size={20}
              className="text-primary mr-2 mt-1 flex-shrink-0"
            />
            <span>{objective}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DescriptionTabContent;

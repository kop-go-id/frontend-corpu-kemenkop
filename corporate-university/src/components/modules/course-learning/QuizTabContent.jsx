import React from "react";
import { Button, Card, List, Typography } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const QuizTabContent = ({ quizzes, onStartQuiz }) => {
  if (!quizzes || quizzes.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <QuestionCircleOutlined style={{ fontSize: 48, color: "#ccc" }} />
        <Title level={5} style={{ color: "#aaa", marginTop: 16 }}>
          Tidak Ada Kuis untuk Modul Ini
        </Title>
      </div>
    );
  }

  return (
    <div>
      <Title level={5} className="!text-primary" style={{ marginBottom: 12 }}>
        Kuis Modul
      </Title>
      <List
        className="space-y-4"
        dataSource={quizzes}
        renderItem={(item) => (
          <Card
            key={item.id}
            className="rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 border-l-primary"
            bodyStyle={{ padding: "16px 20px" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <QuestionCircleOutlined className="text-xl text-primary" />
                <div>
                  <Title level={5} className="!mb-0 text-base font-semibold">
                    {item.title}
                  </Title>
                  <Text type="secondary" className="text-sm">
                    {item.duration} | {item.questionCount} Pertanyaan
                  </Text>
                </div>
              </div>
              <Button type="primary" onClick={() => onStartQuiz(item.id)}>
                Mulai Kuis
              </Button>
            </div>
          </Card>
        )}
      />
    </div>
  );
};

export default QuizTabContent;

import React from "react";
import { Typography, Input, Button, Avatar, List } from "antd";
import CommentItem from "./CommentItem";

const { Title } = Typography;

const DiscussionTabContent = ({ discussions }) => {
  return (
    <div>
      <Title level={5} className="!text-primary" style={{ marginBottom: 12 }}>
        {discussions.length} Komentar
      </Title>

      {/* Input Komentar Baru */}
      <div className="flex items-start mb-8">
        <Avatar
          src="https://i.pravatar.cc/150?u=currentUser"
          alt="User"
          className="mr-4"
        />
        <div className="flex-grow">
          <Input.TextArea
            placeholder="Tambahkan komentar..."
            autoSize={{ minRows: 1, maxRows: 4 }}
            className="mb-2"
          />
          <div className="flex justify-end">
            <Button type="primary">Komentar</Button>
          </div>
        </div>
      </div>

      {/* Daftar Komentar */}
      <List
        dataSource={discussions}
        renderItem={(item) => <CommentItem key={item.id} comment={item} />}
      />
    </div>
  );
};

export default DiscussionTabContent;

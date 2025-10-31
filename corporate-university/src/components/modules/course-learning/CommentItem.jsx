import React from "react";
import { Avatar, Typography, Button } from "antd";

const { Text, Paragraph } = Typography;

const CommentItem = ({ comment }) => {
  return (
    <div className="flex items-start mb-6">
      <Avatar src={comment.avatarUrl} alt={comment.author} className="mr-4" />
      <div className="flex-grow">
        <div className="flex items-center">
          <Text strong className="mr-2">
            {comment.author}
          </Text>
          <Text type="secondary">{comment.timestamp}</Text>
        </div>
        <Paragraph className="!mb-2">{comment.comment}</Paragraph>
        {!comment.reply && (
          <Button type="text" size="small" style={{ padding: 0 }}>
            Balas
          </Button>
        )}

        {/* Render Reply if exists */}
        {comment.reply && (
          <div className="flex items-start mt-4">
            <Avatar
              src={comment.reply.avatarUrl}
              alt={comment.reply.author}
              className="mr-4"
            />
            <div className="flex-grow">
              <div className="flex items-center">
                <Text strong className="mr-2">
                  {comment.reply.author}
                </Text>
                <Text type="secondary">{comment.reply.timestamp}</Text>
              </div>
              <Paragraph className="!mb-0">{comment.reply.comment}</Paragraph>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentItem;

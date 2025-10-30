import React from "react";
import { Button } from "antd";
import { Download } from "lucide-react";

const AttachmentItem = ({ fileName, fileUrl }) => {
  return (
    <Button
      icon={<Download size={16} />}
      href={fileUrl}
      download
      style={{ marginBottom: 8, display: "block" }}
      target="_blank"
    >
      {fileName}
    </Button>
  );
};

export default AttachmentItem;

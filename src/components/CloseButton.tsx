import React from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <Button
      type="default"
      onClick={onClick}
      className="bg-red-400 text-white flex justify-center items-center w-1"
    >
      <CloseOutlined />
    </Button>
  );
};

export default CloseButton;

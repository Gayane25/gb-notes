import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import {
  BookOutlined,
  FileOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./DashboardStyles.css";

function DashSider({ setOpenModal, openModal }) {
  const handleModalOpen = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="dashboard-side">
      <Button className="plus-button" size="large" onClick={handleModalOpen}>
        +
      </Button>
      <Link className="link-style" to="/dashboard">
        <SnippetsOutlined />
        All Notes{" "}
      </Link>
      <Link className="link-style"  to="/highnotes">
        <BookOutlined />
        High priority Notes
      </Link>
      <Link className="link-style" to="/lownotes">
        <FileOutlined />
        Low priority Notes
      </Link>
    </div>
  );
}

export default DashSider;

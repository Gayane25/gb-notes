import React, { useEffect,useState } from "react";
import DashContent from "../components/DashContent";
import DashHeader from "../components/DashHeader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { projectAuth } from "../firebase/firestore";
import DashSider from "../components/DashSider";
import "antd/dist/antd.css";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
const { Sider, Content } = Layout;

function Dashboard() {
  const logged = useSelector((state) => state.auth);
  let navigate = useNavigate();
  const [openModal,setOpenModal]= useState(false);

  useEffect(() => {
    if (!Object.keys(logged).length) {
      navigate("/login");
    }
  }, [logged]);

  return (
    <Layout>
      <DashHeader />
      <Layout style={{display:"flex"}}>
        <Content><DashContent openModal={openModal} setOpenModal={setOpenModal}/></Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;

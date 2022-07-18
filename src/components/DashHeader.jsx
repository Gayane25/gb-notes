import { useNavigate } from "react-router-dom";
import { projectAuth } from "../firebase/firestore";
import logo from "../assets/logo.png";
import { Layout } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

function DashHeader() {
  const { Header } = Layout;

  const navigate = useNavigate();

  const handlelogOut = () => {
    projectAuth.signOut();
    navigate("/login");
  };

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          zIndex: 1,
          width: "100%",
          boxShadow:
            "rgb(0 0 0) 0px 10px 13px -14px, rgb(0 0 0 / 0.5%) 0px 12px 43px -5px",
        }}
      >
        <div>
          <img src={logo} alt="my-sites-logo" style={{ width: "150px" }} />
        </div>

        <span
          style={{ fontSize: "16px", color: "#6e7373" }}
          onClick={handlelogOut}
        >
          <LogoutOutlined /> Logout
        </span>
      </Header>
    </Layout>
  );
}

export default DashHeader;

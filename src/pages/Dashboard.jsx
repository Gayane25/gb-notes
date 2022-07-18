import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import DashContent from "../components/DashContent";
import DashHeader from "../components/DashHeader";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Content } = Layout;

function Dashboard({ notes }) {
  const logged = useSelector((state) => state.auth);
  let navigate = useNavigate();

  useEffect(() => {
    if (!Object.keys(logged).length) {
      navigate("/login");
    }
  }, [logged]);

  return (
    <Layout>
      <DashHeader />
      <Layout>
        <Content>
          <DashContent notes={notes} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;

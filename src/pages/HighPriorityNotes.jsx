import React,{useEffect} from 'react';
import {useSelector} from "react-redux"
import "antd/dist/antd.css";
import {useNavigate} from "react-router-dom"
import { Layout } from "antd";
import DashHeader from '../components/DashHeader';
import DashContent from '../components/DashContent';

const { Content } = Layout;

function HighPriorityNotes({notes}) {
    const logged = useSelector((state) => state.auth);
  let navigate = useNavigate();
  
notes = notes.filter(note=>note.priority==="high");
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
        <DashContent notes={notes}/>
      </Content>
    </Layout>
  </Layout>
  )
}

export default HighPriorityNotes;
import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import {LogoutOutlined}  from '@ant-design/icons';
import logo from "../assets/logo.png";
import {logOutUser} from "../redux/authReducer";
import {useNavigate} from "react-router-dom"

import {projectAuth} from "../firebase/firestore"


function DashHeader() {
    const { Header, Content, Footer } = Layout;

   
    const navigate = useNavigate();


    const handlelogOut = ()=>{
      projectAuth.signOut();
      navigate('/login')
      }
      
      
    
  return (
    <Layout>
         <Header
          style={{
            position: 'fixed',
            display: 'flex',
            justifyContent:'space-between',
            zIndex: 1,
            width: '100%',
            backgroundColor: '#FFFFFF',
            boxShadow: "rgb(0 0 0) 0px 10px 13px -14px, rgb(0 0 0 / 0.5%) 0px 12px 43px -5px",
           
          }}
        >
           <div><img src ={logo} alt="my-sites-logo" style={{width: "150px"}}/></div>
          
          <span style={{ fontSize: '16px', color: '#6e7373' }} onClick={handlelogOut} ><LogoutOutlined /> <span>Logout</span></span>
          
        </Header>
        {/* <Content
          className="site-layout"
          style={{
            padding: '0 50px',
            marginTop: 64,
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 380,
            }}
          >
            Content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
  )
}

export default DashHeader;
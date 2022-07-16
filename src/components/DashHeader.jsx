import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';

function DashHeader() {
    const { Header, Content, Footer } = Layout;

  return (
    <Layout>
         <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            backgroundColor: '#1890ff'
          }}
        >
          <div className="logo" />
          
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
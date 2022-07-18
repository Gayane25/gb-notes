import React from 'react';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import { BookOutlined, FileOutlined, SnippetsOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";


function DashSider({setOpenModal,openModal}) {
    const divstyle = {
        minWidth:"200px",
        // borderRight:"1px solid #bbdae2",
        padding:"10px",
        backgroundColor:"#FFFFFF",
        // height:"100vh"
       
       
}
const handleModalOpen =()=>{
    setOpenModal(!openModal)
  }
  return <div style={divstyle}>
    <Button style={{backgroundColor:"#bbdae2", color:"FFFFFF", maxWidth:"50px", marginTop:"100px"}} size='large' onClick={handleModalOpen} >+</Button>
   <Link to="/notes"><SnippetsOutlined />All Notes </Link>
   <Link to="/highnotes"><BookOutlined />High priority Notes</Link>
   <Link to="/lownotes"><FileOutlined />Low priority Notes</Link>
  </div>
}

export default DashSider